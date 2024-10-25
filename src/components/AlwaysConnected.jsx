import React from "react";

const AlwaysConnected = () => {
  const coonectedData = [
    {
      title: "Years of experience",
      count: 5,
      img: "https://img.icons8.com/?size=50&id=24538&format=png&color=000000",
    },
    {
      title: "Satisfied clients",
      count: 8,
      img: "https://img.icons8.com/?size=50&id=45887&format=png&color=000000",
    },
    {
      title: "in funds",
      count: "$150000",
      img: "https://img.icons8.com/?size=50&id=85843&format=png&color=000000",
    },
  ];

  return (
    <div className="w-full h-[auto] py-[15vh] text-black  bg-white overflow-hidden">
      <h1 className="pl-[5vh] md:px-[10vh] uppercase text-2xl font-semibold text-black">
        Always connected
      </h1>
      <div className="w-full flex justify-between flex-col gap-6 md:flex-row   px-[30px] md:px-[10vh] py-10">
        {coonectedData.map((data, index) => (
          <div key={index} className="w-[auto] px-2 grid md:gap-2 last:pr-[10vh]  ">
            <img src={data.img} className="w-[34px] h-[34px] md:w-[45px] md:h-[45px]" />
            <h3 className="text-xl font-semibold">{data.count}</h3>
            <p className="text-lg">{data.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlwaysConnected;
