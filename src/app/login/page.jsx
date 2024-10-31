import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="w-full h-[100vh] bg-white flex flex-col gap-10 items-center justify-center">
      <div className="w-[60vh] flex flex-col gap-6 h-[70vh] bg-white login-shadow px-[10vh] pt-[5vh] rounded-xl pb-[20vh]">
        <div className="logo flex flex-col items-center justify-center">
          <img src="/logo.png" className="w-20 h-20" />
          <p>Login to Eqvisor</p>
        </div>
        <div className="flex flex-col gap-8">
            <input className="rounded-xl w-full h-[6vh] border-[1px] border-black pl-2 outline-none" type="tel" placeholder="Phone or User ID"/>
            <input className="rounded-xl w-full h-[6vh] border-[1px] border-black pl-2 outline-none" type="password" placeholder="Password"/>
            <button className="w-full rounded-xl bg-blue-400 py-2 text-white">Login</button>
        </div>
        <div className="w-full text-center h-[auto]">
            <Link href={""} className="text-sm text-slate-500 ">Forgot user ID or Password?</Link>
        </div>
      </div>
      <div>Don&apos;t have an account? <Link href={"/signup"} className="text-blue-600">Signup now!</Link></div>
    </div>
  );
};

export default Page;
