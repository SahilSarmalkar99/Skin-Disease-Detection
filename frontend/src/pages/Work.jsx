import React from 'react'

const Work = () => {
  return (
    <div className='mt-10'>
        <section className="my-16 px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12">
          How It Works
        </h1>

        <div className="grid gap-10 md:grid-cols-3">
          {/* Step 1 */}
          <div className="bg-[#2C2C2C] text-white p-6 rounded-xl shadow-lg border border-[#444444] hover:shadow-2xl transition">
            <div className="text-6xl font-bold text-blue-600 mb-4 text-center">1</div>
            <h2 className="text-xl font-semibold mb-2 text-center">Upload Your Image</h2>
            <p className="text-[#CCCCCC] text-center">
              Submit a clear picture of the affected skin area. Our AI will analyze it for possible diseases.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-[#2C2C2C] text-white p-6 rounded-xl shadow-lg border border-[#444444] hover:shadow-2xl transition">
            <div className="text-6xl font-bold text-blue-600 mb-4 text-center">2</div>
            <h2 className="text-xl font-semibold mb-2 text-center">Describe Your Symptoms</h2>
            <p className="text-[#CCCCCC] text-center">
              Enter a few lines about what you're experiencing — like itching, redness, or burning.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-[#2C2C2C] text-white p-6 rounded-xl shadow-lg border border-[#444444] hover:shadow-2xl transition">
            <div className="text-6xl font-bold text-blue-600 mb-4 text-center">3</div>
            <h2 className="text-xl font-semibold mb-2 text-center">Get Instant Prediction</h2>
            <p className="text-[#CCCCCC] text-center">
              Our AI combines the image and text data to predict the condition and suggest treatments.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Work