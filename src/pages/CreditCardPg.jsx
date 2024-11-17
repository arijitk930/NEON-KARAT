import CreditCard from "../components/CreditCard";
import React, { useState } from "react";
import TaxCommunity from "../components/TaxCommunity";

export default function CreditCardPg() {
  return (
    <div>
      <Hero />
      <CreditCard />
      <CardComponent />
      <SecurityFeatures />
      <TaxCommunity />
      <Accordion />
    </div>
  );
}
function Hero() {
  return (
    <div className="min-h-screen  text-black flex flex-col items-center justify-center px-4 py-10 fade-in-scale">
      {/* Card Display */}
      <div className="relative flex justify-center space-x-4 mb-10">
        {/* Left Card */}
        <img className="w-[220px] h-[140px] bg-gradient-to-br from-[#4a00e0] to-[#4504c3] rounded-xl transform -rotate-12 shadow-xl" src="http://res.cloudinary.com/deus3nlcx/image/upload/v1730805041/images/exzqtgn9mtj5dcdia1s4.jpg" alt="" />
        {/* Center Card */}
        <img className="w-[260px] h-[160px] bg-gradient-to-br from-[#4a00e0] to-[#4504c3] rounded-xl shadow-xl z-10" src="http://res.cloudinary.com/deus3nlcx/image/upload/v1730805041/images/qkqjctn9akyqi8tojm3c.jpg"/>
        {/* Right Card */}
        <img src="http://res.cloudinary.com/deus3nlcx/image/upload/v1730805041/images/b3tez3q9kxxmdaws6szi.jpg" className="w-[220px] h-[140px] bg-gradient-to-br from-[#4a00e0] to-[#4504c3] rounded-xl transform rotate-12 shadow-xl"/>
      </div>

      {/* Main Heading */}
      <h1 className="text-[64px]  mb-8 text-center font-primaryBold uppercase  tracking-tight bg-[url('https://cdn.prod.website-files.com/62c48d78ef34931f8a604ef5/62c4904a072d7e734d9f4a1b_gradient.png')] text-transparent bg-clip-text bg-cover bg-center inline-block custom-stroke">
        THE CARD <br /> FOR CREATORS
      </h1>

      {/* Input and Button Section */}
      <div className="flex space-x-4 mb-6">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-md bg-brown-100 text-black placeholder-gray-700 focus:outline-none border border-gray-300 focus:border-brown-900"
        />
        <input
          type="text"
          placeholder="Enter your social handle"
          className="px-4 py-2 rounded-md bg-brown-100 text-black placeholder-gray-700 focus:outline-none border border-gray-300 focus:border-brown-900"
        />
        <button className="button text-black px-6 py-2 rounded-md font-semibold transition-colors">
          APPLY NOW
        </button>
      </div>

      {/* Disclaimer */}
      <p className="text-xs max-w-2xl text-center">
        VanityCard is a financial technology company and not a bank. The
        VanityCard Visa® Business Credit Card is issued by Cross River Bank,
        Member FDIC, pursuant to a license from Visa USA.
      </p>
    </div>
  );
}
function CardComponent() {
  return (
    <section className="bg-blue-gray-800 relative overflow-hidden py-[5rem] px-8 md:px-16">
      <div className="w-3/4 max-w-full mx-auto pt-[5rem] pb-[5rem] pl-[2.55rem] pr-[2.5rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-6 items-center">
          <div className="flex flex-col justify-start items-start text-white space-y-6 md:pr-8">
            <div className="space-y-9">
              <h2 className="uppercase text-[60px] font-bold leading-[1.1] text-left font-primaryBold ">
                A card customized for you
              </h2>
              <p className="text-lg font-bold leading-[1.4] tracking-[.3px] mb-0 text-left">
                Your alloy metal card is laser-etched with your logo.
              </p>
            </div>
            <a className=" text-black text-center uppercase w-full py-2.5 px-6 text-base font-semibold leading-tight transition-all duration-200 flex justify-center items-center md:w-auto lg:w-full cursor-pointer button-cardimg rounded-sm hover:opacity-80">
              Apply Now
            </a>
          </div>
          <div className="flex justify-center md:justify-start">
            <img
              src="https://cdn.prod.website-files.com/64319e85443cd280068e5fff/668e2eb1b9876982c0530cca_VISA%20WHITE%20large.webp"
              loading="lazy"
              alt="card"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SecurityFeatures() {
  return (
    <section className="bg-gray-100 py-12 px-8 md:px-16 w-full">
      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-[50px] leading-tight uppercase mb-10 text-gray-900 font-primaryBold">
          Your Suit
          <br />
          of Armor
        </h2>

        <div className="grid grid-cols-2 gap-x-8 gap-y-8 mt-8">
          {/* Card 1 */}
          <div className="relative border border-black bg-white p-8">
            <div className="absolute -top-10 left-0 transform -translate-x-1/2 flex justify-center items-center">
              {/* Security Icon */}
              <img
                src="https://t4.ftcdn.net/jpg/03/02/56/89/360_F_302568940_mSFYBQRQkH4DTjQOhhV1CUREcYTV4hpg.jpg"
                alt="Security"
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-xl font-extrabold uppercase text-black mb-2 font-primaryBold">
              You are Safe With Us
            </h3>
            <p className="text-gray-700">
              We secure all your data with 256-bit encryption and all
              transactions you make are verified through Visa fraud algorithms.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative border border-black bg-white p-8">
            <div className="absolute -top-10 left-0 transform -translate-x-1/2 flex justify-center items-center">
              {/* Support Icon */}
              <img
                src="https://t3.ftcdn.net/jpg/09/21/81/20/360_F_921812069_Ww2uaj7giOgFoQgu2eWI6AcJfSwLEi2B.jpg"
                alt="Support"
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-xl font-extrabold uppercase text-black mb-2 font-primaryBold">
              Real Support at Your Fingertips
            </h3>
            <p className="text-gray-700">
              If you run into any suspicious activity on your card, our
              concierge team is at your service from 6am to 11pm PT.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-300 py-4">
      <button
        className="flex justify-between items-center w-full text-left text-white group"
        onClick={onClick}
      >
        <span className="text-[32px] text-gray-800 font-lato group-hover:text-black transition-colors duration-300">
          {question}
        </span>
        <span
          className={`flex items-center justify-center w-10 h-10 rounded-full  bg-[url('https://cdn.prod.website-files.com/62c48d78ef34931f8a604ef5/62c4904a072d7e734d9f4a1b_gradient.png')] text-transparent bg-clip-text bg-cover bg-center  text-black text-4xl transition-transform duration-500 ease-in-out group-hover:bg-blue-600 ${
            isOpen ? "rotate-45 scale-110" : "hover:scale-105"
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="mt-4 text-[18px] text-black transition-opacity duration-500 ease-in-out">
          {answer}
        </p>
      </div>
    </div>
  );
}

function Accordion() {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqData = [
    {
      question: "How do I save in taxes by writing off business expenses?",
      answer:
        "Your content-related expenses can all be potentially considered business expenses by the IRS and eligible to write-off in taxes. For example, if you pay your video editor $100, you might be able to save anywhere between $10 and $40 (depending on your tax bracket) off that expense if you write it off. The VanityCard Card makes it easy to track and manage these business expenses. Our dashboard gives a clear view of your spending. Plus, we offer Tax and Bookkeeping services to keep things organized.",
    },
    {
      question: "How does the rewards program work?",
      answer:
        "Earn 1-3 points on every dollar spent, based on custom spend categories that you select when you join. You can redeem your points for billboards, custom merch, podcast studio time, statement credit, and much much more (redemption rates  vary). Or, trade points for statement credit at 100 points = $1.",
    },
    {
      question: "How does VanityCard build my personal credit score?",
      answer:
        "You need a good credit score to get an apartment, car, or mortgage. The VanityCard card helps creators build their credit score. As you pay off your VanityCard card every month, we will help you build your credit history which will increase your credit score over time.",
    },
    {
      question: "How does paying off my VanityCard card work?",
      answer:
        "It’s super simple. At the end of every calendar month, you’ll be responsible for paying off your balance (how much you spent that month). There’s no interest or fees. Our autopay system makes this process seamless, and these on-time payments will build your credit history.",
    },
    {
      question: "Will applying affect my credit score?",
      answer:
        "Nope. Unlike with most other credit card companies, your credit will not be impacted by applying.",
    },
    {
      question: "How often can I change my reward categories?",
      answer:
        "Every six months. You can contact our Concierge team, who will make the change for you.",
    },
    {
      question: "Can I create a custom category?",
      answer:
        "Our current reward categories cover everything from everyday transactions to creator-focused expenses. At this time, however, we do not support custom categories.",
    },
    {
      question: "Do rewards expire?",
      answer: "No. Our rewards do not expire.",
    },
    {
      question: "How do I know if a merchant will be eligible for points?",
      answer:
        "Merchant codes are defined by the Visa/Mastercard network. While we strive to include all relevant merchant codes, in the event that a merchant does not have a code in a particular category, purchases with that merchant may not qualify for rewards in that category.",
    },
    {
      question: "What if I have more questions?",
      answer:
        "Feel free to DM us on Instagram @vanityCard if you have any other questions!",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="px-[2.5rem] py-[8rem] text-white">
        <div className="w-full max-w-[77rem] mr-auto ml-auto">
          <h2 className="text-[40px] font-primaryBold mb-6 text-black bg-[url('https://cdn.prod.website-files.com/62c48d78ef34931f8a604ef5/62c4904a072d7e734d9f4a1b_gradient.png')] text-transparent bg-clip-text bg-cover bg-center inline-block custom-stroke">
            DO YOU HAVE ANY QUESTIONS?
            <br />
            WE HAVE GOT ANSWERS
          </h2>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
