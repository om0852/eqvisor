import React from "react";

const ServiceCard = ({index, title, description}) => {
  return (
    <div
      className={` h-[50vh] ${
        index % 2 == 0 ? "bg-purple-300" : "bg-slate-300"
      } text-black flex flex-col justify-between p-[5vh] rounded-2xl`}
    >
      <div className="text-4xl font-semibold">0{index}</div>
      <div>
        <h1 className="text-4xl font-semibold">{title}</h1>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
