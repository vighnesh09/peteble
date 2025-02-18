"use client";
import React, { useState } from "react";

const FORM = () => {
  const [dogName, setDogName] = useState("");
  const [step, setStep] = useState(1); // Starts at step 1 (out of 10)

  const totalSteps = 11;
  const progressWidth = ((step - 1) / (totalSteps - 1)) * 100 + 1.5; // Calculates percentage

  const handleNext = (e) => {
    e.preventDefault();
    if (step < totalSteps) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10 px-4">
      <h1 className="text-2xl font-bold text-center text-black">
        Find Your Dog’s Perfect Supplement!
      </h1>

      <div className="w-full max-w-md mt-6 bg-white p-6 rounded-lg shadow-lg">
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 h-[12px] rounded-full mb-4 relative">
          <div
            className="bg-[#9ACA3B] h-[12px] rounded-full transition-all duration-300"
            style={{ width: `${progressWidth}%` }}
          ></div>
          <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 ">
            {[...Array(totalSteps)].map((_, i) => (
              <div key={i}>
                <img src="/polyon.svg" className="h-[12px]" alt="" />
              </div>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <button
          onClick={handleBack}
          disabled={step === 1}
          className={`text-black text-sm mb-4 ${
            step === 1 ? "opacity-50 cursor-not-allowed" : "hover:underline "
          }`}
        >
          &lt;
        </button>

        {/* Question */}
        <h2 className="text-xl font-semibold text-black">
          {step}. What's your dog’s name?
        </h2>
        <p className="text-gray-600 mb-4">
          We want to get personal! What's your pup’s name?
        </p>

        {/* Input Field */}
        <form onSubmit={handleNext} className="flex flex-col gap-4">
          <input
            type="text"
            value={dogName}
            onChange={(e) => setDogName(e.target.value)}
            placeholder="Enter your dog's name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />

          {/* Next Button */}
          <button
            type="submit"
            className={`py-3 rounded-lg transition bg-orange-500 text-white hover:bg-orange-600`}
          >
            Submit →
          </button>
        </form>
      </div>
    </div>
  );
};

export default FORM;
