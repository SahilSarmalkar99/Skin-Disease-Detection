import React, { useState } from "react";
import axios from "axios";
import Lottie from "lottie-react";
import animation from "../assets/animation.json";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { text: "Ask your query.", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message instantly
    setMessages((prev) => [...prev, { text: input, sender: "user" }]);

    try {
      const res = await axios.post(
        "http://127.0.0.1:5000/chat",
        { message: input },
        { headers: { "Content-Type": "application/json" } }
      );

      setMessages((prev) => [
        ...prev,
        { text: res.data.reply || "No response from server.", sender: "bot" },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { text: "⚠️ Error connecting to server.", sender: "bot" },
      ]);
    }

    setInput("");
  };

  return (
    <div className="bg-[#1e1e1e] text-white px-6 py-10 rounded-xl max-w-7xl mx-auto shadow-lg mt-10">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Chat Section */}
        <div>
          <h1 className="text-3xl font-bold mb-6">Your Personal Bot</h1>

          <div className="h-72 overflow-y-auto space-y-3 p-4 bg-[#2a2a2a] rounded-lg mb-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <span
                  className={`max-w-[70%] px-4 py-2 rounded-xl text-sm ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-700 text-gray-200"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-2 items-center">
            <input
              type="text"
              className="flex-grow p-2 rounded bg-gray-800 text-white outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg"
            >
              Send
            </button>
          </div>
        </div>

        {/* Lottie Animation */}
        <div className="flex justify-center items-center">
          <Lottie animationData={animation} loop={true} className="w-full max-w-md" />
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
