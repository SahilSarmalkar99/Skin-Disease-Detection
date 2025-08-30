from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import numpy as np
from PIL import Image
import io
import tensorflow as tf
from tensorflow.keras.models import load_model
from text_pre import txt_preprocessing
import pickle as pkl

# encoder
with open("model/label_encoder.pkl", "rb") as f:
    le = pkl.load(f)
    


app = Flask(__name__)
CORS(app)

OLLAMA_URL = "http://localhost:11434/api/generate"
cnn = load_model("./model/resnet50_classifier.h5")
nlp = load_model("./model/aih_nlp.h5")

@app.route("/chat", methods=["POST"])
def chat():
    try:
        data = request.get_json(force=True)
        user_message = data.get("message", "").strip()

        if not user_message:
            return jsonify({"reply": "Please type something first."})

        payload = {
            "model": "medbot",
            "prompt": user_message,
            "stream": True
        }

        response = requests.post(OLLAMA_URL, json=payload, timeout=300)
        response.raise_for_status()
        data = response.json()

        return jsonify({"reply": data.get("response", "No reply from model")})

    except Exception as e:
        import traceback
        print("Error in /chat:", e)
        traceback.print_exc()  # Shows full error
        return jsonify({"reply": f"Error: {str(e)}"}), 500




def process_image(image_bytes):
    image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    image = image.resize((224, 224))  # Change size if your model uses a different input size
    image_array = np.array(image) / 255.0  # Normalize to 0-1
    image_array = np.expand_dims(image_array, axis=0)  # Add batch dimension
    return image_array

class_labels1 = ['Eczema', 'Skin Cancer', 'Vitiligo' ,'Acne', 'hyperpigmentation']

@app.route("/predict", methods=["POST"])
def predict():
    prediction = ""
    img = request.files.get("image")
    txt = request.form.get("description")
    
    if not img:
        return jsonify({"error": "No image uploaded"}), 400

    if not txt or txt.strip() == "":
        return jsonify({"error": "No description provided"}), 400

    
    # image
    image_data = img.read()
    processed_img = process_image(image_data)
    image_preds = cnn.predict(processed_img)
    image_class_index = np.argmax(image_preds)
    image_confidence = round(np.max(image_preds) * 100, 2)
    image_prediction = class_labels1[image_class_index] 

    # text prediction
    text = txt_preprocessing(txt)
    text_preds = nlp.predict(text)
    text_confidence = round(np.max(text_preds) * 100, 2)
    text_class_index = np.argmax(text_preds)
    text_prediction = le.inverse_transform([text_class_index])[0]

    # decision
    if image_confidence >= 95:
        prediction = image_prediction
        final_confidence = image_confidence
    else:
        prediction = text_prediction
        final_confidence = text_confidence

    
    
    
    recommendations = {
        "Eczema": "Apply moisturizer, avoid scratching, and see a dermatologist.",
        "Psoriasis": "Use medicated creams, stay hydrated, and consult a doctor.",
        "Vitiligo": "Consult a dermatologist for treatment options.",
        "Acne": "Keep skin clean, avoid oily foods, and use prescribed creams.",
        "Skin Cancer": "Seek immediate medical evaluation from a specialist.",
        "hyperpigmentation": "Use sunscreen, vitamin C serums, and consult dermatologist."
    }
    recommendation = recommendations.get(prediction, "Consult a dermatologist.")

    # Return JSON
    return jsonify({
        "disease": prediction,
        "confidence": final_confidence,
        "recommendation": recommendation
    })


if __name__ == "__main__":
    app.run(debug=True)
