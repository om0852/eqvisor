import React from "react";

const FinancialSection = () => {
  const cardData = [
    {
      title: "Crowdfunding",
      description: "description",
    },
    {
      title: "EQ-Funds",
      description: "description",
    },
    {
      title: "EQ-Auctions",
      description: "description",
    },
    {
      title: "Investment Manager",
      description: "description",
    },
  ];

  return (
    <div className="w-full h-[auto] text-black top-rounded bg-white md:top-[-5vh] pb-[20vh]">
      <div className="flex flex-col md:flex-row pt-[20vh]">
        <div className="w-[70%] sticky top-10 md:w-[50%] h-[auto] md:pb-20 md:h-[55vh] pl-[20px] md:pl-[50px] flex flex-col justify-start gap-6 md:gap-0 md:justify-between">
          <div className="w-full">
            <h1 className="text-xl font-semibold">FINANCIAL TOOLS</h1>
            <p className=" text-xl md:text-[2.7rem] pt-2">Streamline Your Start-up</p>
          </div>
          <div className=" h-[20vh] ">
            <p className="w-[100%]  md:text-md md:text-xl">
              This is the space to introduce the Services section. Briefly
              describe the types of services offered and highlight any special
              benefits or features.
            </p>
          </div>
        </div>
        <div className="container" >
          <ul id="cards" className="text-black">
            {cardData.map((data, index) => (
              <li key={index} className="card" id={`card${index + 1}`}>
                <div className="card-body flex flex-col justify-between md:py-[20px] px-20 " style={{
                    background:(index%2==0)?"rgb(23,23,23)":"rgb(56,74,211)",
                    color:(index%2==0)?"white":"black"
                }}>
                  <h1 className="text-4xl">0{index + 1}</h1>
                  <div>
                    <h2 className="text-4xl font-semibold py-4">{data.title}</h2>
                    <p className="text-3xl">{data.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FinancialSection;