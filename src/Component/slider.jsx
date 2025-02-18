"use client";
import React, { useState, useRef } from "react";
import { Image } from 'next/image';

const Slider = () => {
  const clients = [
    {
      photo: "/clientP.svg",
      name: "Haris J",
      location: "Miami, FL",
      review:
        "After using Petibles, my dog's energy levels have skyrocketed! It's like he's a puppy again, and his coat has never looked shinier!",
    },
    {
      photo: "/clientP.svg",
      name: "Jessica K",
      location: "Los Angeles, CA",
      review:
        "Petibles has made such a difference in my dog's mobility! She's moving around more freely and is even more playful. Highly recommend it!",
    },
    {
      photo: "/clientP.svg",
      name: "Mark L",
      location: "Chicago, IL",
      review:
        "I've been using Petibles for a few weeks, and I've noticed a huge improvement in my dog's overall health. Her appetite is better, and she’s more active than ever.",
    },
    {
      photo: "/clientP.svg",
      name: "Samantha R",
      location: "Dallas, TX",
      review:
        "Petibles has been a game-changer for my senior dog. He’s more energetic, his joints don't seem to bother him as much, and his coat looks fantastic.",
    },
    {
      photo: "/clientP.svg",
      name: "David W",
      location: "New York, NY",
      review:
        "My dog loves the taste of Petibles! Not only that, but it has helped improve his digestion and he seems much happier and healthier overall.",
    },
    // (other clients...)
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % clients.length;
    setCurrentIndex(newIndex);
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    }
  };

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + clients.length) % clients.length;
    setCurrentIndex(newIndex);
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    }
  };

  return (
    <div className="h-[600px] md:h-screen flex flex-col items-start md:items-center justify-center">
      <h1
        className="text-[#F57322] text-[12px] lg:text-[18px]  ml-4"
        style={{ fontFamily: "Montserrat" }}
      >
        Testimonial
      </h1>
      <h1
        className="text-[24px] lg:text-[40px] mb-24 ml-4"
        style={{ fontFamily: "Inter" }}
      >
        What people <span className="text-[#F57322] ">petible</span> about
      </h1>

      <div className="relative w-full overflow-hidden">
        <div
          ref={sliderRef}
          className="flex transition-all duration-300 scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 p-4 m-2 ml-10 md:mr-8 md:ml-0 rounded-lg shadow-md mx-auto h-[300px] w-[340px] md:h-[350px] md:w-[420px] lg:h-[392px] lg:w-[472px] flex flex-col items-start  "
            >
              <img
                src="/comma.svg"
                alt=""
                className="h-[50px] sm:h-[40px] md:h-[45px] lg:h-[50px]"
              />
              <h1
                className="font-semibold mt-8 sm:text-[18px] md:text-[20px] lg:text-[24px] text-center"
                style={{
                  fontFamily: "Inter",
                }}
              >
                {client.review}
              </h1>

              <div className="flex items-center mt-6 justify-center gap-4">
                <img
                  src={client.photo}
                  alt={client.name}
                  className="w-16 h-16 rounded-full object-cover sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-16 lg:h-16"
                />
                <div className="flex flex-col items-center justify-center gap-2">
                  <h1 className="font-medium sm:text-base md:text-lg lg:text-lg text-center">
                    {client.name}
                  </h1>
                  <h2 className="text-gray-600 sm:text-xs md:text-sm lg:text-sm text-center">
                    {client.location}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
  onClick={handlePrev}
  className="absolute top-1/2 h-[50px] w-[50px] left-4 transform -translate-y-1/2  flex items-center justify-center rounded-full "
>
  <img src="/Laero.svg" alt="" />
</button>
<button
  onClick={handleNext}
  className="absolute top-1/2 h-[50px] w-[50px] right-4 transform -translate-y-1/2   flex items-center justify-center rounded-full "
>
<img src="/Raero.svg" alt="" />

</button>
      </div>
    </div>
  );
};

export default Slider;