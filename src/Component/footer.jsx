"use client";
import { React, useState } from "react";
import { useRouter } from 'next/router';

const FAQ = [
  {
    id: 1,
    question: "What is the Petibles Standard?",
    answer:
      "Our user-friendly dashboard provides a clear overview of your business operations, allowing you to monitor important metrics and track progress in real-time. Streamline your project workflows with powerful task management features. Assign tasks, set deadlines, and improve overall efficiency.",
  },
  {
    id: 2,
    question: "How long will it take for my order to ship?",
    answer:
      "Orders are processed and shipped within 1-2 business days. Shipping times may vary depending on your location, but you can expect delivery within 5-7 business days after shipment. We’ll provide you with tracking information once your order is on its way.",
  },
  {
    id: 3,
    question: "Why should I choose Petibles over similar products?",
    answer:
      "Petibles is formulated with high-quality ingredients designed to improve your pet’s health and wellbeing. Unlike other products, Petibles combines premium nutrition, safety, and effectiveness to deliver the best results. We’re committed to ensuring your pet receives the highest standards in care.",
  },
  {
    id: 4,
    question: "Do you price match?",
    answer:
      "Yes, we do offer a price match guarantee. If you find an identical product for a lower price from a competitor, please contact us, and we'll match the price. We want to ensure you get the best value for your purchase.",
  },
  {
    id: 5,
    question: "How can I reach out with questions about the products?",
    answer:
      "If you have any questions, feel free to reach out to our customer support team. You can contact us via email at support@petibles.com, or you can chat with us directly on our website. We're here to assist you with any queries you may have.",
  },
];

const footer = () => {
  const [selectedItem, setSelectedItem] = useState(FAQ[0].id);

  const router = useRouter();

  const navigateToAbout = () => {
    router.push('/form'); // Navigates to the About page
  };

  const handleAnsShow = (questionId) => {
    setSelectedItem((prev) => (prev === questionId ? null : questionId));
    // console.log(question)
  };

  return (
    <>
      <div className=" md:h-screen flex flex-col items-start md:items-center justify-start py-10 ">
        <p
          className="md:hidden ml-4 text-[12px] text-[#F57322] font-semibold"
          style={{ fontFamily: "Montserrat" }}
        >
          FAQ
        </p>
        <h1
          className="text-[24px] lg:text-[48px] text-center text-[#1D2939] font-semibold ml-4 "
          style={{ fontFamily: "Inter" }}
        >
          Frequently Asked Questions
        </h1>

        <div className="w-full max-w-4xl mt-10">
          {FAQ.map((question, index) => {
            return (
              <div
                key={index}
                className={`border mb-3 m-4 rounded-lg d cursor-pointer ${
                  selectedItem === question.id && "bg-[#F0F0F0]"
                }`}
                onClick={() => handleAnsShow(question.id)} // Toggle the visibility of the answer
              >
                <div className="flex justify-between items-center px-6 py-4">
                  <h2
                    className="text-[14px]  md:text-[20px] lg:text-[24px] font-semibold text-[#1A151A] "
                    style={{ fontFamily: "Inter" }}
                  >
                    {question.question}
                  </h2>
                  <img
                    src={
                      selectedItem === question.id ? "/minus.svg" : "/plus.svg"
                    } // Toggle icon based on selection
                    alt="toggle icon"
                    className="w-6 h-6"
                  />
                </div>

                {selectedItem === question.id && (
                  <div className="px-6 pb-4 text-[12px] md:text-[14px] text-[#1D2939] ">
                    <p>{question.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <footer>
        <div className="bg-[#F3722029] w-full h-[35vh]">
          <div className='h-full flex flex-col items-center justify-center'>
            <img src="logo.svg" alt="" />
            <div className='flex  items-center justify-center gap-2'>
              <img src="insta.svg" alt=""  onClick={navigateToAbout} />
              <img src="fb.svg" alt="" />
              <img src="x.svg" alt="" />
            </div>
            <div className='mt-4 w-[40%] border border-b-black opacity-10  '>

            </div>
            <div className='flex flex-col md:flex-row  mt-4 items-center justify-center text-[#1A151A]' style={{fontFamily:"Montserrat"}}>
              <h1>Copyright ©Petibles. All Rights Reserved.</h1>
              <span className='opacity-40 hidden md:block'>&nbsp;|&nbsp;</span>
              <h1>Privacy Policy</h1>
            </div>
          </div>
          <div></div>
        </div>
      </footer>
    </>
  );
};

export default footer;
