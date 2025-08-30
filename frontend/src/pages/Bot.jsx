import React from 'react';
import Lottie from "lottie-react";
import chatbotAnimation from "../assets/chatbotAnimation.json";

const Bot = () => {
  return (
    <div className='mt-20 '>
      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side - Text */}
          <div className="text-white">
            <h2 className="text-6xl font-extrabold mb-8  drop-shadow-lg">
              AI Chatbot
            </h2>
            <p className="text-lg text-[#cccccc] mb-4 leading-relaxed">
              We’ve integrated an intelligent AI-powered chatbot to assist users by answering queries in real-time.
            </p>
            <p className="text-lg text-[#cccccc] leading-relaxed">
              This enhances experience by providing instant support, guidance on crop issues, and tips on disease prevention.
            </p>
          </div>

          {/* Right Side - Lottie Animation */}
          <div className="flex justify-center items-center">
            <Lottie
              animationData={chatbotAnimation}
              loop={true}
              className="w-full max-w-lg"
            />
          </div>

        </div>
      </section>
    </div>
  );
};

export default Bot;
