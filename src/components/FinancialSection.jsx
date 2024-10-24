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
    <div className="w-full h-[auto] top-rounded bg-white top-[-5vh]">
      <div className="flex  pt-[20vh]">
        <div className="w-[50%] sticky top-[20vh] h-[55vh] pl-[50px] flex flex-col justify-between">
          <div className="">
            <h1 className="text-xl font-semibold">FINANCIAL TOOLS</h1>
            <p className="text-[2.7rem] pt-2">Streamline Your Start-up</p>
          </div>
          <div className="">
            <p className="w-[90%] text-xl">
              This is the space to introduce the Services section. Briefly
              describe the types of services offered and highlight any special
              benefits or features.
            </p>
          </div>
        </div>
        <div className="container">
          <ul id="cards" className="text-black">
            {cardData.map((data, index) => (
              <li key={index} className="card" id={`card${index + 1}`}>
                <div className="card-body flex flex-col justify-between py-[20px] px-20 " style={{
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
