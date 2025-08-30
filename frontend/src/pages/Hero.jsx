import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center h-full my-5 mx-5">
        <div className="font-bold text-8xl">
          <h1>Skin Disease</h1>
        </div>
        <div></div>
        <div className="font-bold text-8xl">
          <h1>Detection</h1>
        </div>
        <p className="font-semibold text-2xl mt-3">Skin disease detection refers to the process of identifying skin-related health conditions such as acne,
          eczema, psoriasis, ringworm, and more using clinical images and symptom descriptions. Early detection is
          crucial to avoid complications and get timely treatment.</p>
      </div>
      <div className="flex flex-col justify-center h-full my-5 bg-amber-200">
        <div className="font-bold text-9xl">
          <h1>Skin Disease</h1>
        </div>
        <div></div>
        <div className="font-bold text-9xl">
          <h1>Detection</h1>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero