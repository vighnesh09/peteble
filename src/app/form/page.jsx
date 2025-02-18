'use client'
import { React, useState } from "react";

const page = () => {
    const [step, setStep] = useState(1)

    const totalSteps = 11;
    const Progress = ((step)/(totalSteps-1))*100
  return (
    <div className="flex flex-col items-center justify-center mt-10 px-4">
      <img src="/logo.svg" alt="" />
      <h1
        className="text-[32px]  font-bold text-center text-black"
        style={{ fontFamily: "Inter" }}
      >
        Find Your Dog’s Perfect Supplement!
      </h1>
      <div className="w-full max-w-md mt-6 bg-white p-6 rounded-lg shadow-lg">
        {/* progresss bae */}
        <div className="w-full bg-gray-200 h-[12px] rounded-full mb-4 relative">
          <div className="bg-[#9ACA3B] h-[12px] rounded-full transition-all duration-300"
          style={{width:`${Progress}`}}
          ></div>
    <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 ">
        
    </div>

        </div>
      </div>
    </div>
  );
}

export default page
