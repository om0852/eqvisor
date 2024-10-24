import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <ul id="footer-cards" className="text-black">
          <li
            className="footer-card w-[100%] rounded-none h-[auto] "
            id={`card$`}
          >
            <div className="footer-card-body flex items-center justify-around py-[40px] px-10 bg-blue-600">
              <h1 className="text-4xl">Ready to get started? </h1>
              <div className="w-[40%]">
                <h2 className="text-xl py-4">
                  This is the space to introduce the Services section. Briefly
                  describe the types of services offered.
                </h2>
                <button className="btn text-black mt-4 bg-white hover:bg-black hover:text-white flex gap-4 flex-row py-2 rounded-full items-center justify-between w-[35vh] px-2 transition-all duration-300 ease-in-out">
                  <p className="ml-4">Contact Us</p>
                  <span className="rounded-full  w-10 h-10 grid place-items-center bg-black hover:bg-white transition-all duration-300 ease-in-out">
                    <p className="text-white font-semibold">&gt;</p>
                  </span>
                </button>
              </div>
            </div>
          </li>
          <li
            className="footer-card"
            id={`card$`}
            style={{
              background: "black",
              color: "white",
              height: "100vh",
              borderRadius: "3vh 3vh 0 0",
              position: "relative",
            }}
          >
            <div
              style={{
                background: "black",
                color: "white",
                borderRadius: "3vh 3vh 0 0",
              }}
              className="footer-card-body flex flex-col justify-between py-[20px] px-20 bg-blue-600"
            >
              <h1 className="text-[6rem] font-bold py-[6vh]">EQVISOR</h1>
              <div>
                <div>
                  <p>JOIN OUR NEWSLETTER</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
