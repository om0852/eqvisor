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
    <div className="w-full h-[auto] py-[15vh]  bg-white">
      <h1 className="px-[10vh] uppercase text-2xl font-semibold">
        Always connected
      </h1>
      <div className="w-full flex justify-between grid-rows-1 px-[10vh] py-10">
        {coonectedData.map((data, index) => (
          <div key={index} className="w-[auto] px-2 grid gap-2 last:pr-[10vh]  ">
            <img src={data.img} />
            <h3 className="text-xl font-semibold">{data.count}</h3>
            <p className="text-lg">{data.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlwaysConnected;
