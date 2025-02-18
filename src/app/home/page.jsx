'use client'
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import GetButton from "../../Component/GetButton";
import { IoCallOutline } from "react-icons/io5";
import { useRouter } from 'next/router';

const home = () => {

  // const router = useRouter();
  // const handleClick = () => {
  //   if (router.isReady) {
  //     router.push('/form');
  //     console.log("hejw"); // This will be logged after navigating
  //   } else {
  //     console.log('Router is not ready yet!');
  //   }
  // };
  const points = {
    A: "Paws or ears that smell “cheesy.”",
    B: "Occasional loose stools etc.",
    C: "Irregular stool consistency and timing.",
    D: "Less energy.",
  };

  
  return (
    <>

      {/* hero sac */}
      <div className="h-screen">
        <nav className="bg-[#FDE8DB] h-[60px] md:h-[80px] w-full ">
          <div className="flex items-center justify-between mx-5 md:mx-20 pt-3 md:pt-4">
            <div>
              <img src="/logo.svg" className="h-[30px]" />
            </div>

            {/* </div> */}
            <div className="flex flex-row  items-center justify-center gap-3 px-2 md:px-3 py-1 md:py-2  text-white bg-[#F57322] rounded-lg">
              <IoCallOutline className="text-white " />
              <button className="font-Montserrat">Call Us</button>
            </div>
          </div>
        </nav>
        <div className="flex md:flex-row flex-col items-center justify-between m-2 h-[82%]">
          {/* left */}
          <div className=" w-full md:w-[44%] h-[50%] flex flex-col items-center md:items-start justify-center pl-0 md:pl-[8vw]">
            <div className="flex flex-row items-center justify-start pb-4 ">
              <img src="/singleS.svg" alt="" className=" h-[15px] sm:h-[20px]" />
              <h1 className="font-semibold">TrustPilot</h1>
              <img src="/start.svg" alt="" className="ml-2 h-[15px] sm:h-[20px]" />
            </div>
            <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4vw] font-semibold font-Inter">
              <h1>Transform your</h1>
              <h1>
                pet's <span className="text-[#F37220]">health care</span>
              </h1>
              <h1>with petibles</h1>
            </div>

            <div className="flex-col  items-center justify-center">

              <button className="px-6  py-2 bg-[#F37220] rounded-md text-white mt-[50px] flex items-center justify-center "
              //  onClick={handleClick}
               >Get Started
                <FaArrowRightLong className="text-sm ml-2" />
              </button>
              <p className="text-sm mt-2">Over <span className="font-sm font-semibold">5,000,000</span> chews delivered!</p>
            </div>
          </div>
          {/* right */}
          <div className=" w-full md:w-[54%]  h-[50%] flex items-start md:items-center justify-center pt-[0%] md:pt-0 object-contain">
            <img src="/DOG.png" alt="" className=" rounded-md h-[99%] w-[90%] md:h-auto md:w-[85%] object-cover" />


          </div>
        </div>
        <div className="bg-black h-[50px] w-full text-white text-center absolute bottom-0">
          <p className="pt-2 sm:pt-4 text-xs sm:text-md font-Inter">More than <span className="text-[#F37220]">85%</span> of customers say that their dog prefers The Petibles Table to their old supplements</p>
        </div>
      </div>
      {/* page-2 */}

      <div className="h-screen">
        <div className="flex flex-col md:flex-row items-center justify-between h-full">
          {/* Left section */}
          <div className="w-[90%] md:w-[45%] h-[50%] md:h-full flex flex-col items-center md:items-start m-4 pt-10 justify-center pl-0 md:pl-[8vw]">
            <div>
              <h6 className="font-semibold font-Montserrat text-[12px] md:text-[15px] lg:text-[18px] pb-5 text-sm">
                Pet Health
              </h6>
              <h1
                className="text-[24px] md:text-[40px] lg:text-[48px] font-semibold pb-5 "
                style={{ fontFamily: "Inter" }}
              >
                Empower your pet's health and happiness
              </h1>
              <div>
                {Object.keys(points).map((key) => {
                  console.log(points[key]);
                  return (
                    <div
                      key={key} // Fixed key placement
                      className="w-[80%] border-b border-gray-400 border-opacity-30 flex items-center justify-start gap-2 p-2"
                    >
                      <img className="h-[17px]" src="ok.svg" alt="" />
                      <h1
                        className="font-Inter font-semibold text-[12px] md:text-[15px] opacity-75"
                        style={{ fontFamily: "Inter" }}
                      >
                        {points[key]}
                      </h1>
                    </div>
                  );
                })}
              </div>
              <div className="flex-col  items-center justify-center">

                <button className="px-6    py-2 bg-[#F37220] rounded-md text-white mt-[50px] flex items-center justify-center ">Get Started
                  <FaArrowRightLong className="text-sm ml-2" />
                </button>
                <p className="text-sm mt-2">Over <span className="font-sm font-semibold">5,000,000</span> chews delivered!</p>
              </div>
            </div>
          </div>

          {/* Right section */}
          <div className="w-full md:w-[50%] h-[50%] md:h-full flex flex-col items-center justify-center">
            <img
              src="/dog2.png"
              alt=""
              className="rounded-md  h-[50vh] w-[90%] md:h-auto md:w-[85%] object-cover"
            />
            <div className="flex flex-col items-center justify-center md:hidden">
              <button className="p-5 w-[90%] md:w-[80%] h-[20%] bg-[#F37220] rounded-md text-white mt-0 md:mt-8 flex items-center justify-center">
                Get Started
                <FaArrowRightLong className="text-sm ml-2" />
              </button>
              <p className="text-sm mt-2 text-center md:text-left">
                Over <span className="font-bold">5,000,000</span> chews
                delivered!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* page-3 */}
      <div className="h-screen">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between h-full">
          {/* Left section */}
          <div className="w-full md:w-[50%] h-[60%] md:h-full flex flex-col items-center justify-center">
            <img
              src="/dog3.png"
              alt=""
              className="rounded-md  h-[50vh] w-[90%] md:h-auto md:w-[85%] object-cover"
            />
            <div className="flex flex-col items-center justify-center md:hidden">
              <button className="p-5 w-[90%] md:w-[80%] h-[20%] bg-[#F37220] rounded-md text-white mt-0 md:mt-8 flex items-center justify-center">
                Get Started
                <FaArrowRightLong className="text-sm ml-2" />
              </button>
              <p className="text-sm mt-2 text-center md:text-left">
                Over <span className="font-bold">5,000,000</span> chews
                delivered!
              </p>
            </div>
          </div>
          {/* Right section */}
          <div className="w-[90%] md:w-[45%] h-[40%] md:h-full flex flex-col items-center md:items-start m-4 justify-center pl-0 md:pr-[8vw] md:pl-[2vw]">
            <div>
              <h6 className="font-semibold font-Montserrat text-[10px] sm:text-[12px] md:text-[15px] lg:text-[18px] pb-5">
                Effect
              </h6>
              <h1
                className="text-[20px] sm:text-[24px] md:text-[32px] lg:text-[48px] font-semibold pb-5"
                style={{ fontFamily: "Inter" }}
              >
                An imbalanced gut affects your dog's entire body
              </h1>
              <div>
                <p
                  className="text-[10px] sm:text-[12px] md:text-[16px] font-medium"
                  style={{ fontFamily: "Montserrat" }}
                >
                  When a dog's gut is lacking beneficial probiotics, it makes
                  your pup super sensitive to environmental allergens, that can
                  lead to behaviors such as itching and paw licking among other
                  signs of poor gut health.
                </p>
              </div>
              <div className="flex-col hidden md:block items-center justify-center">
                <button className="px-6 py-2 bg-[#F37220] rounded-md text-white mt-[50px] flex items-center justify-center">
                  Get Started
                  <FaArrowRightLong className="text-sm ml-2" />
                </button>
                <p className="text-sm mt-2">
                  Over <span className="font-sm font-bold">5,000,000</span> chews
                  delivered!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* page-4 */}
      <div className="h-screen">
        <div className="flex flex-col md:flex-row items-center justify-between h-full">
          {/* Left section */}
          <div className="w-[90%] md:w-[45%] h-[50%] md:h-full flex flex-col items-center md:items-start m-4 pt-10 justify-center pl-0 md:pl-[8vw]">
            <div>
              <h6 className="font-semibold font-Montserrat text-[12px] md:text-[15px] lg:text-[18px] pb-5 text-sm">
                Best selling products
              </h6>
              <h1
                className="text-[24px] sm:text-[35px  ] md:text-[38px] lg:text-[48px] font-semibold pb-5 "
                style={{ fontFamily: "Inter" }}
              >
                Introducing America’s Best-Selling Probiotic Chew For Dogs
              </h1>
              <div>
                <p
                  className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-medium"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Our best-selling Probiotic Chews are made with a special blend of 3 probiotic strains.
                </p>
                <p
                  className="text-[10px] pt-4 sm:text-[12px] md:text-[14px] lg:text-[16px] font-medium"
                  style={{ fontFamily: "Montserrat" }}
                >
                  The formula supports a healthy gut and immune system – which minimizes the impact of allergens and other contaminants while supporting digestive health. This means less occasional discomfort, loose stools, licking, head shacking, itching and general comfort and wellbeing.
                </p>
              </div>
              <div className="flex-col hidden md:block items-center justify-center">
                <button className="px-6 py-2 bg-[#F37220] rounded-md text-white mt-[50px] flex items-center justify-center">
                  Get Started
                  <FaArrowRightLong className="text-sm ml-2" />
                </button>
                <p className="text-sm mt-2">
                  Over <span className="font-sm font-bold">5,000,000</span> chews
                  delivered!
                </p>
              </div>
            </div>
          </div>

          {/* Right section */}
          <div className="w-full md:w-[50%] h-[50%] md:h-full flex flex-col items-center justify-center">
            <img
              src="/dog4.png"
              alt=""
              className="rounded-md  h-[50vh] w-[90%] md:h-auto md:w-[85%] object-cover"
            />
            <div className="flex flex-col items-center justify-center md:hidden">
              <button className="p-5 w-[90%] md:w-[80%] h-[20%] bg-[#F37220] rounded-md text-white mt-0 md:mt-8 flex items-center justify-center">
                Get Started
                <FaArrowRightLong className="text-sm ml-2" />
              </button>
              <p className="text-sm mt-2 text-center md:text-left">
                Over <span className="font-bold">5,000,000</span> chews
                delivered!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
