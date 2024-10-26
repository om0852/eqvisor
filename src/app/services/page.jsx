import React from "react";
import ServiceCard from "./_components/ServiceCard";
import Footer from "@/components/Footer";

const Page = () => {
  const services = [
    {
      index: 1,
      title: "Personal",
      description:
        "This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features.",
    },
    {
      index: 2,
      title: "Insurance",
      description:
        "This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features.",
    },
    {
      index: 3,
      title: "Business",
      description:
        "This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features.",
    },
    {
      index: 4,
      title: "Enterprise",
      description:
        "This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features.",
    },
  ];

  return (
    <>
      <div className="w-full h-auto pt-[20vh] px-[10vh]">
        <div>
          <h1 className="font-semibold text-xl">EXPLORE LUMINU SOLUTIONS</h1>
          <p className="text-5xl w-[90%]">
            This is the space to introduce the Services section. Briefly
            describe the types of services offered and highlight any special
            benefits or features.
          </p>
        </div>
        <div className="pt-[20vh]">
          <h1 className="font-semibold text-xl">CHOOSE YOUR TRACK</h1>
          <p className="text-4xl">Customized plans for every industry sector</p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 py-10">
          {services.map((data, index) => (
            // <></>
            <ServiceCard
              key={index}
              index={data.index}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
        <div>
          <h1 className="text-5xl font-thin">We&apos;re good with numbers</h1>
          <div className="flex flex-row justify-between items-center py-5">
            <div>
              <h1 className="text-6xl font-bold">50,000</h1>
              <p className="text-xl">This is a space to share more</p>
            </div>
            <div>
              <h1 className="text-6xl font-bold">3.4 Million</h1>
              <p className="text-xl">This is a space to share more</p>
            </div>
            <div>
              <h1 className="text-6xl font-bold">100,000</h1>
              <p className="text-xl">This is a space to share more</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
