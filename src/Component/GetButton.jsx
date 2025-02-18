import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6"

const GetButton = () => {
    return (
        <div className="flex-col  items-center justify-center">

            <button className="px-6    py-2 bg-[#F37220] rounded-md text-white mt-[50px] flex items-center justify-center ">Get Started
                <FaArrowRightLong className="text-sm ml-2" />
            </button>
            <p className="text-sm mt-2">Over <span className="font-sm font-semibold">5,000,000</span> chews delivered!</p>
        </div>
    )
}

export default GetButton