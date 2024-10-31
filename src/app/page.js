import AboutUs from "@/components/AboutUs";
import AlwaysConnected from "@/components/AlwaysConnected";
import FinancialSection from "@/components/FinancialSection";
import Footer from "@/components/Footer";
import HomeContainer from "@/components/HomeContainer";
import ImageContainer from "@/components/ImageContainer";
import Navbar from "@/components/Navbar";
import QuerySection from "@/components/QuerySection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="home-section w-full h-[auto]">
        {/* //home section  */}
        <Navbar/>
        <HomeContainer />
        <FinancialSection />
        <ImageContainer />
        <AboutUs />
        <QuerySection />
        <AlwaysConnected />
        <Footer />
      </div>
    </>
  );
}
