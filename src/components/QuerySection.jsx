import React from "react";

const QuerySection = () => {
  const servicesData = [
    {
      index: "01",
      question: "Customer-Centric Focus",
      answer:
        "This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features.",
    },
    {
      index: "02",
      question: "Commitment to Security",
      answer:
        "This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features.",
    },
    {
      index: "03",
      question: "Transparent and Fair Practices",
      answer:
        "This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features.",
    },
  ];

  return (
    <div className="w-full bg-stone-300 h-auto py-[40px] text-black md:py-[10vh] px-[30px] md:px-[10vh] overflow-hidden">
      <div className="py-[10vh] h-[30vh] md:h-[70vh] text-black">
        <h1 className="uppercase text-xl md:text-2xl">Why Eqvisor?</h1>
        <p className="w-[80%] text-3xl md:text-5xl">Your Satisfaction is our priority</p>
      </div>
      <div className="w-full sm:py-[2vh] md:h-[50vh] text-black">
        <p className="w-[100%] md:max-w-[50%] text-xl md:text-2xl">
          This is the space to introduce the Services section. Briefly describe
          the types of services offered and highlight any special benefits or
          features.
        </p>
      </div>

      <div className="w-full md:max-w-[50%] ">
        {servicesData.map((data, index) => (
          <div key={index} className="flex flex-col gap-3 md:gap-4 py-[5vh]">
            <div className="w-full flex gap-4 text-xl md:text-3xl text-blue-700">
              <span>{data.index}</span>
              <span>{data.question}</span>
            </div>
            <p className="text-xl">{data.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuerySection;
