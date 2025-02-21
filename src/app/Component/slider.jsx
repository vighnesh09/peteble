"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    photo: "/clientP.svg",
    name: "Haris J",
    location: "Miami, FL",
    review:
      "After using Petibles, my dog's energy levels have skyrocketed! It's like he's a puppy again and again!",
  },
  {
    photo: "/clientP.svg",
    name: "Danil Mark",
    location: "Orlando, FL",
    review:
      "Petibles has transformed my dog's health. She's more active and playful, and I can see the difference!",
  },
  {
    photo: "/clientP.svg",
    name: "Jemons Mart",
    location: "New York, NY",
    review:
      "I can't believe the change in my dog's vitality since we started giving him Petibles, he's a puppy again!",
  },
  {
    photo: "/clientP.svg",
    name: "Haris J",
    location: "Miami, FL",
    review:
      "After using Petibles, my dog's energy levels have skyrocketed! It's like he's a puppy again!",
  },
  {
    photo: "/clientP.svg",
    name: "Danil Mark",
    location: "Orlando, FL",
    review:
      "Petibles has transformed my dog's health. She's more active and playful, and I can see the difference!",
  },
  {
    photo: "/clientP.svg",
    name: "Haris J",
    location: "Miami, FL",
    review:
      "After using Petibles, my dog's energy levels have skyrocketed! It's like he's a puppy again!",
  },
  {
    photo: "/clientP.svg",
    name: "Danil Mark",
    location: "Orlando, FL",
    review:
      "Petibles has transformed my dog's health. She's more active and playful, and I can see the difference!",
  },

];

const Slider = () => {
  // For desktop we now have 2 pages.
  const totalDesktopPages = 2;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 768 : true
  );
  const sliderRef = useRef(null);

  // For mobile we keep using the full number.
  const totalMobilePages = testimonials.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      isDesktop ? (prevIndex + 1) % totalDesktopPages : (prevIndex + 1) % totalMobilePages
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      isDesktop
        ? (prevIndex - 1 + totalDesktopPages) % totalDesktopPages
        : (prevIndex - 1 + totalMobilePages) % totalMobilePages
    );
  };

  // Listen for window resize to update isDesktop
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide for desktop view only.
  useEffect(() => {
    if (isDesktop) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalDesktopPages);
      }, 7000);
      return () => clearInterval(interval);
    }
  }, [isDesktop]);

  // For desktop, shift by 50% (2 pages) while mobile continues to shift 100%
  const transformValue = isDesktop
    ? `translateX(-${currentIndex * 50}%)`
    : `translateX(-${currentIndex * 100}%)`;

  return (<div className="w-full">    
      <img src="/panjo.svg" alt="" className="hidden md:inline relative left-[90%] top-32"/>
  <div className="flex flex-col items-start md:items-center md:justify-evenly mt-16 md:mt-[-5%] mb-9 px-4 md:h-screen  h-full">
      <div className="flex flex-col items-start md:items-center justify-center">
        <h1
          className="text-[#F57322] text-sm lg:text-lg font-bold mb-2"
          style={{ fontFamily: "Montserrat" }}
        >
          Testimonial
        </h1>
        <h1
          className="text-[1.6rem] lg:text-4xl font-semibold text-center"
          style={{ fontFamily: "Inter" }}
        >
          What people <span className="text-[#F57322]">petible</span> about
        </h1>
      </div>
      {/* Slider container */}
      <div className="relative w-full max-w-8xl mt-6 px-4 overflow-x-hidden md:overflow-hidden">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out gap-4 md:items-start"
          style={{ transform: transformValue }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              // Fixed width so adjacent slides peek in.
              className="flex-shrink-0 min-w-[80%] md:min-w-[20%] pl-3 flex flex-col items-center text-center"
            >
              <div className="bg-white shadow-lg rounded-lg p-4 border h-auto md:h-[21rem] flex flex-col items-start justify-evenly max-w-xs md:max-w-sm">
                <Image
                  src="/comma.svg"
                  alt="quote"
                  width={40}
                  height={40}
                  className="md:h-[7vh] md:w-[7vh]"
                />
                <p className="text-[0.9rem] md:text-[1.5rem] text-start font-medium mt-4">
                  {testimonial.review}
                </p>
                <div className="flex items-center mt-4 md:relative md:bottom-[-10]">
                  <Image
                    src={testimonial.photo}
                    alt={testimonial.name}
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  <div
                    className="ml-3 text-[0.8rem] text-left"
                    style={{ fontFamily: "Inter" }}
                  >
                    <p className="font-semibold md:text-[1.25rem]">{testimonial.name}</p>
                    <p className="text-[0.7rem] md:text[1rem] text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile view buttons remain visible */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2  shadow-lg p-2 bg-[#F0F0F0] rounded-full md:hidden"
        >
          <Image src="/Laero.svg" alt="prev" width={24} height={24} />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2  shadow-lg p-2 bg-[#F0F0F0] rounded-full md:hidden"
        >
          <Image src="/Raero.svg" alt="next" width={24} height={24} />
        </button>
      </div>


      {/* Desktop view dots navigation */}
      <div className="hidden md:flex justify-center mt-4 gap-2">
        <button
          className={`${currentIndex === 0 ? "w-8" : "w-3"} h-3 rounded-full border border-gray-300 ${currentIndex === 0 ? "bg-[#F57322]" : "bg-gray-300"
            }`}
          onClick={() => setCurrentIndex(0)}
        ></button>
        <button
          className={`${currentIndex === 1 ? "w-8" : "w-3"} h-3 rounded-full border border-gray-300 ${currentIndex === 1 ? "bg-[#F57322]" : "bg-gray-300"
            }`}
          onClick={() => setCurrentIndex(1)}
        ></button>
      </div>

    </div>
    </div>

  );
};

export default Slider;
