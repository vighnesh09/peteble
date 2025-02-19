"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Add framer-motion for smooth
//  swipe animations
import { useRouter } from "next/navigation";
// Questions configuration remains the same
const Questions = {
  first: {
    question: "What's your dog's name?",
    about: "We want to get personal! What's your pup's name?",
    input: (value, setValue) => (
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Your Dog's name"
        className="w-full p-3  border font-semibold border-gray-300 placeholder:font-semibold rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
        style={{
          placeholder: { fontFamily: "Montserrat" },
          fontFamily: "Montserrat",
        }}
        required
      />
    ),
  },
  second: {
    question: "What's your dog's vibe??",
    about: "Pick one that matches their personality!",
    input: (value, setValue) => (
      <div className="flex flex-row gap-4 justify-start gap-2">
        {[
          { name: "Couch Poteto", image: "/couch.svg" },
          { name: "Wild Wolf", image: "/couch.svg" },
          { name: "Happy-Go-Lucky", image: "/couch.svg" },
          { name: "Nervous Nelly", image: "/couch.svg" },
        ].map((breed) => (
          <div
            key={breed.name}
            className={`card p-4 border rounded-lg cursor-pointer transition-all duration-300 w-[100%] 
              ${
                value === breed.name
                  ? "border-green-500 bg-green-100"
                  : "border-gray-300"
              }`}
            onClick={() => setValue(breed.name)}
          >
            <img
              src={breed.image}
              alt={breed.name}
              className="w-16 h-16 mx-auto mb-2"
            />
            <h3 className="text-center font-semibold text-sm">{breed.name}</h3>
          </div>
        ))}
      </div>
    ),
  },
  third: {
    question: "How old is your dog (in human years)?",
    about: "Age is just a number... or is it? ",
    input: (value, setValue) => (
      <div className="check-options">
        {["Puppy (0-2)", "Middle-Aged (3-7) ", "Wise Senior (8+)"].map(
          (condition) => (
            <div
              key={condition}
              className="flex  items-center space-x-2 mb-5 mt-5"
            >
              <input
                type="radio"
                id={condition}
                name="healthCondition" // Add name to ensure only one radio can be selected
                className="w-4 h-4 cursor-pointer accent-[#9ACA3B]"
                checked={value === condition} // Changed from includes to direct equality
                onChange={() => setValue(condition)} // Simplified to just set the value
              />
              <label
                htmlFor={condition}
                className="text-[18px] cursor-pointer"
                style={{ fontFamily: "Montserrat" }}
              >
                {condition}
              </label>
            </div>
          )
        )}
      </div>
    ),
  },
  four: {
    question: "What’s your dog’s biggest health concern?",
    about: "What’s ruff for them? Pick as many as apply! ",
    input: (value, setValue) => (
      <div className="check-options">
        {[
          "Nervous or anxious 😬",
          "Tummy troubles (gas, diarrhea, etc.) 💩",
          "Dry, Itchy skin or matty coat 👚",
          "None of these – my dog’s a superstar! 🌟",
        ].map((condition) => (
          <div
            key={condition}
            className="flex  items-center space-x-2 mb-5 mt-5"
          >
            <input
              type="radio"
              id={condition}
              name="healthCondition" // Add name to ensure only one radio can be selected
              className="w-4 h-4 cursor-pointer accent-[#9ACA3B]"
              checked={value === condition} // Changed from includes to direct equality
              onChange={() => setValue(condition)} // Simplified to just set the value
            />
            <label
              htmlFor={condition}
              className="text-[18px] cursor-pointer"
              style={{ fontFamily: "Montserrat" }}
            >
              {condition}
            </label>
          </div>
        ))}
      </div>
    ),
  },
  five: {
    question: "  Does your dog have food preferences or sensitivities?",
    about: "Is your dog a food connoisseur? ",
    input: (value, setValue) => (
      <div className="check-options">
        {[
          "Loves everything, no issues!",
          "Sensitive tummy 🐾  ",
          "Not sure 🤔",
        ].map((condition) => (
          <div
            key={condition}
            className="flex  items-center space-x-2 mb-5 mt-5"
          >
            <input
              type="radio"
              id={condition}
              name="healthCondition" // Add name to ensure only one radio can be selected
              className="w-4 h-4 cursor-pointer accent-[#9ACA3B]"
              checked={value === condition} // Changed from includes to direct equality
              onChange={() => setValue(condition)} // Simplified to just set the value
            />
            <label
              htmlFor={condition}
              className="text-[18px] cursor-pointer"
              style={{ fontFamily: "Montserrat" }}
            >
              {condition}
            </label>
          </div>
        ))}
      </div>
    ),
  },
  six: {
    question: "How does your dog spend their day?",
    about: "Let’s get the full picture of their lifestyle!",
    input: (value, setValue) => (
      <div className="check-options">
        {[
          "Running around all day 🏃‍♂",
          "A mix of lazy and playful 💤",
          "Mostly napping with a bit of fetch 🐕‍🦺",
        ].map((condition) => (
          <div
            key={condition}
            className="flex  items-center space-x-2 mb-5 mt-5"
          >
            <input
              type="radio"
              id={condition}
              name="healthCondition" // Add name to ensure only one radio can be selected
              className="w-4 h-4 cursor-pointer accent-[#9ACA3B]"
              checked={value === condition} // Changed from includes to direct equality
              onChange={() => setValue(condition)} // Simplified to just set the value
            />
            <label
              htmlFor={condition}
              className="text-[18px] cursor-pointer"
              style={{ fontFamily: "Montserrat" }}
            >
              {condition}
            </label>
          </div>
        ))}
      </div>
    ),
  },
  Seven: {
    question: "What does your dog dream about?",
    about: "Tell us about their favorite fantasies!",
    input: (value, setValue) => (
      <div className="flex flex-row gap-4 justify-start ">
        {[
          { name: "Tasty treats!", image: "/couch.svg" },
          { name: "Rolling in the grass", image: "/couch.svg" },
          { name: "Belly rubs on repeat", image: "/couch.svg" },
          { name: "Chasing squirrels", image: "/couch.svg" },
        ].map((breed) => (
          <div
            key={breed.name}
            className={`card p-4 border rounded-lg cursor-pointer transition-all duration-300 w-[100%] 
              ${
                value === breed.name
                  ? "border-green-500 bg-green-100"
                  : "border-gray-300"
              }`}
            onClick={() => setValue(breed.name)}
          >
            <img
              src={breed.image}
              alt={breed.name}
              className="w-16 h-16 mx-auto mb-2"
            />
            <h3 className="text-center font-semibold text-sm">{breed.name}</h3>
          </div>
        ))}
      </div>
    ),
  },
  eight: {
    question: "How would you describe your dog’s coat?",
    about: "Soft and shiny or rough and scratchy? Let’s find out! ",
    input: (value, setValue) => (
      <div className="check-options">
        {[
          "Fluffy and fabulous 💅",
          "A little rough around the edges ",
          "Dry and itchy 😕",
          "Shedding like it’s their job 🐾",
        ].map((condition) => (
          <div
            key={condition}
            className="flex  items-center space-x-2 mb-5 mt-5"
          >
            <input
              type="radio"
              id={condition}
              name="healthCondition" // Add name to ensure only one radio can be selected
              className="w-4 h-4 cursor-pointer accent-[#9ACA3B]"
              checked={value === condition} // Changed from includes to direct equality
              onChange={() => setValue(condition)} // Simplified to just set the value
            />
            <label
              htmlFor={condition}
              className="text-[18px] cursor-pointer"
              style={{ fontFamily: "Montserrat" }}
            >
              {condition}
            </label>
          </div>
        ))}
      </div>
    ),
  },
  nine: {
    question: "If your dog could speak, what would they ask for?",
    about: "The ultimate wish from your fur-baby:",
    input: (value, setValue) => (
      <div className="flex flex-row gap-4 justify-start ">
        {[
          {
            name: "Help me chill out, I’m always anxious!",
            image: "/couch.svg",
          },
          { name: "My belly needs a little TLC.", image: "/couch.svg" },
          { name: "My skin’s been itchy, fix it!", image: "/couch.svg" },
          { name: "I just want to feel my best!", image: "/couch.svg" },
        ].map((breed) => (
          <div
            key={breed.name}
            className={`card p-4 border rounded-lg cursor-pointer transition-all duration-300 w-[100%] 
              ${
                value === breed.name
                  ? "border-green-500 bg-green-100"
                  : "border-gray-300"
              }`}
            onClick={() => setValue(breed.name)}
          >
            <img
              src={breed.image}
              alt={breed.name}
              className="w-16 h-16 mx-auto mb-2"
            />
            <h3 className="text-center font-semibold text-sm">{breed.name}</h3>
          </div>
        ))}
      </div>
    ),
  },
  ten: {
    question: "Ready to transform your dog's health?",
    about: "Let’s find out the best supplement to help your pup thrive!",
    input: (value, setValue) => (
      <div className="flex items-center justify-center mb-10">
        <img src="/tenLoad.svg" alt="" />
      </div>
    ),
  },
  eleven: {
    question: "Your Perfect Match!",
    about: "Based on your answers, here is jammy's recommended supplement care plan.",
    input: (value, setValue) => (
      <div className="flex flex-row gap-4 justify-start ">
        {[
          {
            name: "Mellow Chews",
            about: "For the anxious soul 🌿",
            image: "/food.png",
            bgColor: "bg-[#DBF5C8]",
          },
          {
            name: "Gut Relief Chews.",
            about: "For digestive peace 🍖",
            image: "/food.png",
            bgColor: "bg-[#E7F7FB]",
          },
          {
            name: "Simply Soft Skin Chews",
            about: "For a silky-smooth coat ✨",
            image: "/food.png",
            bgColor: "bg-[#F8F0D0]",
          },
        ].map((breed) => (
          <div
            key={breed.name}
            className={`card p-4 border rounded-lg cursor-pointer transition-all duration-300 w-[100%] ${breed.bgColor}
              ${value.includes(breed.name) ? "border-green-500" : "border-gray-300"}`}
            onClick={() => {
              const newValue = value.includes(breed.name)
                ? value.filter((item) => item !== breed.name)
                : [...value, breed.name];
              setValue(newValue);
            }}
          >
            <img
              src={breed.image}
              alt={breed.name}
              className="w-32 h-32 mx-auto mb-2"
            />
            <h3
              className="text-center font-semibold text-sm"
              style={{ fontFamily: "Inter" }}
            >
              {breed.name}
            </h3>
            <p
              className="text-center font-semibold text-xs"
              style={{ fontFamily: "Montserrat" }}
            >
              {breed.about}
            </p>
          </div>
        ))}
      </div>
    ),
  },
  twelve: {
    question: "",
    about: "",
    input: (value, setValue) => (
      <div className="flex flex-col  gap-4 items-center justify-start ">
        <img src="/smile.svg" alt="" className="object-cover" />
        <h1
          className="text-[30px] font-semibold w-[60%]"
          style={{ fontFamily: "Inter" }}
        >
          Thank you for choosing Gut Relief Chews, and Simply Soft Skin Chew.
          Checkout or continue shopping
        </h1>
      </div>
    ),
  },
};

const FORM = () => {
  const router = useRouter();

  // State management for all questions
  const [dogName, setDogName] = useState("");
  const [dogVibe, setDogVibe] = useState("");
  const [dogAge, setDogAge] = useState("");
  const [healthConcern, setHealthConcern] = useState("");
  const [foodPreference, setFoodPreference] = useState("");
  const [dailyActivity, setDailyActivity] = useState("");
  const [dogDream, setDogDream] = useState("");
  const [coatCondition, setCoatCondition] = useState("");
  const [dogWish, setDogWish] = useState("");
  const [step, setStep] = useState(11);
  const [responses, setResponses] = useState({});
  const [swipeDirection, setSwipeDirection] = useState(0);
  const [selectedSupplements, setSelectedSupplements] = useState([]);

  const totalSteps = 10;
  const progressWidth = step >= 10 ? 100 : (step / totalSteps) * 100;

  // Track touch events for swipe functionality
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  // Remove the separate function and direct call
  // Instead, use useEffect to handle the timeout

  useEffect(() => {
    let timeoutId;
    if (step === 10) {
      timeoutId = setTimeout(() => {
        setStep(step + 1);
      }, 4000);
    }

    // Cleanup function to clear timeout when component unmounts or step changes
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [step]);
  // console.log(step)

  // Handle touch start
  const onTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  // Handle touch move
  const onTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  // Handle touch end and determine swipe direction
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && step < totalSteps) {
      handleNext();
      setSwipeDirection(1);
    }
    if (isRightSwipe && step > 1) {
      handleBack();
      setSwipeDirection(-1);
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Handle next step
  const handleNext = (e) => {
    if (e) e.preventDefault();

    setResponses((prev) => {
      const updatedResponses = { ...prev };
      switch (step) {
        case 1:
          updatedResponses.name = dogName;
          break;
        case 2:
          updatedResponses.vibe = dogVibe;
          break;
        case 3:
          updatedResponses.age = dogAge;
          break;
        case 4:
          updatedResponses.healthConcern = healthConcern;
          break;
        case 5:
          updatedResponses.foodPreference = foodPreference;
          break;
        case 6:
          updatedResponses.dailyActivity = dailyActivity;
          break;
        case 7:
          updatedResponses.dogDream = dogDream;
          break;
        case 8:
          updatedResponses.coatCondition = coatCondition;
          break;
        case 9:
          updatedResponses.dogWish = dogWish;
          break;
      }
      return updatedResponses;
    });

    if (step < totalSteps) setStep(step + 1);
  };

  // Handle previous step
  const handleBack = () => {
    if (step > 1) setStep(step - 1);
    if (step === 1) {
      router.push("/");
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    setTimeout(() => {
      setStep(step + 1);
    }, 4000);
    e.preventDefault();

    const formData = {
      name: dogName,
      vibe: dogVibe,
      age: dogAge,
      healthConcern: healthConcern,
      foodPreference: foodPreference,
      dailyActivity: dailyActivity,
      dogDream: dogDream,
      coatCondition: coatCondition,
      dogWish: dogWish,
      selectedSupplements: selectedSupplements,
      timestamp: new Date().toISOString(),
    };

    console.log("Complete form data:", formData);
  };

  const getCurrentValue = () => {
    switch (step) {
      case 1:
        return dogName;
      case 2:
        return dogVibe;
      case 3:
        return dogAge;
      case 4:
        return healthConcern;
      case 5:
        return foodPreference;
      case 6:
        return dailyActivity;
      case 7:
        return dogDream;
      case 8:
        return coatCondition;
      case 9:
        return dogWish;
      case 11:
        return selectedSupplements;
      default:
        return "";
    }
  };

  const getCurrentSetter = () => {
    switch (step) {
      case 1:
        return setDogName;
      case 2:
        return setDogVibe;
      case 3:
        return setDogAge;
      case 4:
        return setHealthConcern;
      case 5:
        return setFoodPreference;
      case 6:
        return setDailyActivity;
      case 7:
        return setDogDream;
      case 8:
        return setCoatCondition;
      case 9:
        return setDogWish;
      case 11:
        return setSelectedSupplements;
      default:
        return () => {};
    }
  };

  const currentQuestionKey = Object.keys(Questions)[step - 1];
  const { question, about, input } = Questions[currentQuestionKey] || {};

  return (
    <div
      className="flex flex-col items-center justify-center mt-14 px-4"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <img src="/logo.svg" alt="" />
      {step !== 12 ? (
        <h1
          className="text-[32px] font-bold text-center text-black"
          style={{ fontFamily: "Inter" }}
        >
          Find Your Dog's Perfect Supplement!
        </h1>
      ) : null}

      <div className="w-full max-w-[50%] mt-6 ">
        {/* Progress Bar */}
        <div className=" flex  items-center justify-center">
          <div className="w-[95%]  bg-gray-200 h-[12px] rounded-full  relative flex flex-col items-start justify-start">
            <motion.div
              className="bg-[#9ACA3B] h-[12px] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressWidth}%` }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2">
              {[...Array(totalSteps)].map((_, i) => (
                <div key={i}>
                  <img src="/polyon.svg" className="h-[12px]" alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <div className='flex items-start justify-center'> */}

        <button
          onClick={handleBack}
          className="px-1 py-1 ml-[1%] bg-opacity-5 text-white pt-10 rounded-full"
          // disabled={step === 1}
        >
          <img src="/back.svg" alt="" className="h-[20px]" />
        </button>
        {/* </div> */}

        <div className="question-container min-h-[250px] w-full flex flex-col items-center justify-center">
          <div className="w-full max-w-[95%] flex flex-col items-start ">
            <h2
              className="text-[24px] font-semibold text-black font-inter text-center"
              style={{ fontFamily: "Inter" }}
            >
              {step !== 12 && step !== 11 && step} &nbsp;
              {question}
            </h2>
            <p
              className="text-gray-600 mb-8 text-center"
              style={{ fontFamily: "Montserrat" }}
            >
              {about}
            </p>
            <div className={`w-full flex items-start ${step===10 ? "justify-center" :"justify-start"} `}>
              {input && input(getCurrentValue(), getCurrentSetter())}
            </div>
          </div>
        </div>
        {/* Navigation Buttons */}
        <div
          className="flex justify-between mt-4 w-full text-[18px]"
          style={{ fontFamily: "Inter" }}
        >
          {step === totalSteps || step === 10 || step === 12 ? null : (
            <button
              onClick={step === 11 ? handleSubmit : handleNext}
              disabled={
                step !== 10 &&
                step !== 11 &&
                ((step === 1 && dogName === "") ||
                  (step === 2 && dogVibe === "") ||
                  (step === 3 && dogAge === "") ||
                  (step === 4 && healthConcern === "") ||
                  (step === 5 && foodPreference === "") ||
                  (step === 6 && dailyActivity === "") ||
                  (step === 7 && dogDream === "") ||
                  (step === 8 && coatCondition === "") ||
                  (step === 9 && dogWish === "") ||
                  (step === 11 && selectedSupplements.length === 0))
              }
              className={`px-4 py-2 w-full  rounded-lg ${
                (step !== 10 && step !== 11 && getCurrentValue() === "") ||
                (step === 11 && selectedSupplements.length === 0)
                  ? "cursor-not-allowed font-bold text-[#98A2B3] bg-[#F2F4F7]"
                  : "bg-orange-500 hover:bg-orange-600 text-white"
              }`}
            >
              {step === 11 ? "Select Your Care Package →" : "Next →"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FORM;
