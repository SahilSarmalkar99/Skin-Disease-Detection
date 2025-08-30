import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-[#1E1E1E] text-[#CCCCCC] py-10 mt-16 border-t border-[#444444]">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
    
    {/* Left side - Brand */}
    <div className="text-center md:text-left mb-6 md:mb-0">
      <h2 className="text-xl font-bold text-white mb-2">AI Skin Dieseas Detection</h2>
      <p className="text-sm">Empowering The Dieseas Detection With Our Ai Driven Plateform</p>
    </div>

    {/* Right side - Links */}
    <div className="flex space-x-6">
      <a href="#" className="hover:text-[#00ADB5] transition">Home</a>
      <a href="#" className="hover:text-[#00ADB5] transition">Features</a>
      <a href="#" className="hover:text-[#00ADB5] transition">Contact</a>
      <a href="#" className="hover:text-[#00ADB5] transition">Privacy Policy</a>
    </div>

  </div>

  {/* Bottom copyright */}
  <div className="text-center text-sm text-[#555555] mt-8">
    &copy; 2025 AI Skin Dieseas Detection. All rights reserved.
  </div>
</footer>

    </div>
  )
}

export default Footer