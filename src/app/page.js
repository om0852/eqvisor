import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="home-section w-full h-[100vh]"
      style={{
        backgroundImage: `url("https://static.wixstatic.com/media/11062b_9b8a1888d9ab40e3aad9390af2ea539e~mv2.jpg/v1/fill/w_293,h_164,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_9b8a1888d9ab40e3aad9390af2ea539e~mv2.jpg)`,
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      {/* //home section  */}

      <div className="w-full px-8 ">
        <h1 className="text-white text-6xl pt-8 leading-snug last:leading-0 font-bold w-[50%]">
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
      </div>
    </div>
  );
}
