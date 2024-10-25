"use client";
import React, { useState } from "react";

const Footer = () => {
  const [formStatus, setFormStatus] = useState({ email: false, sub: false });

  const handleSubmit = (event) => {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const sub = formData.get("sub");
    console.log(email, sub);

    if (!email) {
      setFormStatus((prev) => ({ email: true, sub: prev.sub }));
    }
    if (!sub) {
      setFormStatus((prev) => ({ email: prev.email, sub: true }));
    }
    if (email) {
      setFormStatus((prev) => ({ email: false, sub: prev.sub }));
    }
    if (sub) {
      setFormStatus((prev) => ({ email: prev.email, sub: false }));
    }
  };

  const data = [
    {
      section: "QUICK LINKS",
      links: ["Home", "About", "Solutions", "Contact"],
    },
    {
      section: "SOCIAL",
      links: ["Linkedin", "Github", "Instagram"],
    },
    {
      section: "CONTACT",
      links: ["eqvisor@gmail.com", "9307154076", "Address"],
    },
    {
      section: "POLICY",
      links: [
        "Terms & Conditions",
        "Privacy Policy",
        "Accessibility Statement",
      ],
    },
  ];

  return (
    <>
      <div className="footer-container max-w-full bg-purple-400">
        <ul id="footer-cards" className="text-black w-full">
          <li
            className="footer-card w-[100%] rounded-none h-[auto] "
            id={`card12`}
          >
            <div className="footer-card-body flex md:flex-row flex-col items-start justify-around py-[40px] px-10 bg-blue-500">
              <h1 className="text-xl md:text-4xl">Ready to get started? </h1>
              <div className="w-[100%]">
                <h2 className="text-xl py-4">
                  This is the space to introduce the Services section. Briefly
                  describe the types of services offered.
                </h2>
                <button className="btn text-black mt-4 bg-white hover:bg-black hover:text-white flex gap-4 flex-row py-2 rounded-full items-center justify-between w-[25vh] md:w-[35vh] px-2 transition-all duration-300 ease-in-out">
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
              width:"100%",
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
              className="footer-card-body flex flex-col justify-between py-[20px] px-10 bg-blue-600"
            >
              <h1 className=" text-3xl md:text-[6rem] font-bold py-[6vh]">EQVISOR</h1>
              <div className="md:flex flex-row justify-start gap-0">
                <div>
                  <p>JOIN OUR NEWSLETTER</p>
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-2 py-6 w-[35vh] md:w-[55vh]"
                  >
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="eqvisor@gmail.com"
                      className="outline-none bg-transparent border-b-2"
                    />
                    <p>
                      {formStatus.email ? (
                        <div className="flex items-center gap-2 text-red-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="20"
                            height="20"
                            viewBox="0,0,256,256"
                          >
                            <g
                              fill="#f70a0a"
                              fillRule="nonzero"
                              stroke="none"
                              strokeWidth="1"
                              strokeLinecap="butt"
                              strokeLinejoin="miter"
                              strokeMiterlimit="10"
                              strokeDasharray=""
                              strokeDashoffset="0"
                              fontFamily="none"
                              fontWeight="none"
                              fontSize="none"
                              textAnchor="none"
                              style={{ mixBlendMode: " normal" }}
                            >
                              <g transform="scale(8.53333,8.53333)">
                                <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12zM16,21h-2v-7h2zM15,11.5c-0.828,0 -1.5,-0.672 -1.5,-1.5c0,-0.828 0.672,-1.5 1.5,-1.5c0.828,0 1.5,0.672 1.5,1.5c0,0.828 -0.672,1.5 -1.5,1.5z"></path>
                              </g>
                            </g>
                          </svg>{" "}
                          <p> Invalid Email</p>
                        </div>
                      ) : (
                        ""
                      )}
                    </p>
                    <div className="flex md:flex-row flex-col gap-4 md:gap-0 md:justify-evenly md:items-center py-4">
                      <span>
                        <span className="flex flex-row items-start">
                          <input
                            className="mr-2 mt-1 outline-none bg-transparent border-[1px] border-white"
                            type="checkbox"
                            id="sub"
                            name="sub"
                          />
                          <label htmlFor="sub">
                            <p> Yes, subscribe me to your newsletter</p>
                          </label>
                        </span>
                        {formStatus.sub ? (
                          <div className="flex items-center gap-2 text-red-500 ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="20"
                              height="20"
                              viewBox="0,0,256,256"
                            >
                              <g
                                fill="#f70a0a"
                                fillRule="nonzero"
                                stroke="none"
                                strokeWidth="1"
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                strokeMiterlimit="10"
                                strokeDasharray=""
                                strokeDashoffset="0"
                                fontFamily="none"
                                fontWeight="none"
                                fontSize="none"
                                textAnchor="none"
                                style={{ mixBlendMode: " normal" }}
                              >
                                <g transform="scale(8.53333,8.53333)">
                                  <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12zM16,21h-2v-7h2zM15,11.5c-0.828,0 -1.5,-0.672 -1.5,-1.5c0,-0.828 0.672,-1.5 1.5,-1.5c0.828,0 1.5,0.672 1.5,1.5c0,0.828 -0.672,1.5 -1.5,1.5z"></path>
                                </g>
                              </g>
                            </svg>{" "}
                            <p> Check the box to continue</p>
                          </div>
                        ) : (
                          ""
                        )}
                      </span>
                      <button className="py-2 px-6 max-sm:w-[20vh] hover:bg-purple-400 bg-white text-black rounded-full">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                <div className="flex px-[1vh] md:px-[15vh] flex-col gap-5 md:gap-0 md:flex-row justify-between w-full">
                  {data.map((data1, index) => (
                    <div key={index}>
                      <p>{data1.section}</p>
                      <ul>
                        {data1?.links?.map((link, index2) => (
                          <li className="text-md" key={index2}>{link}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
        <div className="px-4 py-6">© 2024 by EQvisor</div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
