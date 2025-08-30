import React, { useState } from "react";
import axios from "axios";

const Predict = () => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image || !description) {
      alert("Please upload an image and enter a description.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("description", description);

    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResult(response.data);
    } catch (error) {
      console.error("Prediction error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Skin Disease Predictor</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 font-medium">Upload Skin Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="border p-2 w-full"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Describe Your Symptoms</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            placeholder="e.g. Red itchy patch, scaling, burning sensation..."
            className="border p-2 w-full"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Predict
        </button>
      </form>

      {result && (
        <div className="mt-6 p-4 border rounded shadow">
          <h3 className="font-semibold text-lg mb-2">Prediction Result:</h3>
          <p><strong>Disease:</strong> {result.disease}</p>
          <p><strong>Confidence:</strong> {result.confidence}%</p>
          <p><strong>Recommendation:</strong> {result.recommendation}</p>
        </div>
      )}
    </div>
  );
};

export default Predict;
