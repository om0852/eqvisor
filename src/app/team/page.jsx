import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import TeamContainer from "./_components/TeamContainer";
import Misson from "./_components/Misson";

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="home-section w-full h-[auto] bg-white text-black">
        <AboutUs />
        <div className=" pl-5 md:pl-20 h-[auto] text-black">
            <h1 className="py-2 text-xl font-semibold">OUR PEOPLE</h1>
            <h1 className="pb-4 text-4xl">The Minds Behind Eqvisor</h1>
        <TeamContainer/>
        </div>
        <Misson/>
        <Footer/>
      </div>
    </>
  );
};

export default Page;
