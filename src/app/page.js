import AboutUs from "@/components/AboutUs";
import AlwaysConnected from "@/components/AlwaysConnected";
import FinancialSection from "@/components/FinancialSection";
import ImageContainer from "@/components/ImageContainer";
import Navbar from "@/components/Navbar";
import QuerySection from "@/components/QuerySection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="home-section w-full h-[auto]">
        {/* //home section  */}

        <div className="w-full  h-[auto]">
          <img
            src={"/eqvisor_bg.webp"}
            alt="eqvisor"
            className="absolute top-0 w-[100%] h-[100vh]"
          />
          <div className="px-8">
            <h1 className=" z-10 relative text-white text-6xl mt-[8%] leading-snug last:leading-0 font-bold w-[50%]">
              A START-UP FOR START-UPS
            </h1>
            <button className="text-black mt-4 bg-white flex gap-4 flex-row py-2 rounded-full items-center justify-between w-[35vh] px-2">
              <span className="ml-4">Get Started</span>
              <span>
                <img
                  width="40"
                  height="40"
                  src="https://img.icons8.com/ios-filled/50/circled-chevron-right.png"
                  alt="circled-chevron-right"
                />
              </span>
            </button>
            <div className="w-[60vh] h-[40vh] relative top-[13vh] text-lg text-white">
              <p className="py-0">
                This is a space to welcome visitors to the site. Grab their
                attention with copy that clearly states what the site is about.
              </p>
            </div>
          </div>
        </div>
        <FinancialSection />
        <ImageContainer />
        <AboutUs />
        <QuerySection/>
        <AlwaysConnected/>
      </div>
    </>
  );
}
