import React from "react";
import forpass from "../assets/forgot-password.svg";
import logo from "../assets/logo.svg";
import { Link } from "react-router";

const ResetPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#21212C]">
      <div
        className="reg-container flex justify-center lg:justify-between items-center
       w-[100%] lg:w-[85%] my-[20px]"
      >
        <div
          className="reg-box border bg-[#2C2C37] border-none min-h-[400px] w-[80%] sm:w-[70%] md:w-[60%] lg:w-[40%]
        rounded-[6px] py-[35px] px-[25px] lg:px-[20px]"
        >
          <div className="logo flex items-center gap-[10px] h-[30px] mb-[30px]">
            <img src={logo} className="w-[25px] h-[30px]" alt="logo" />
            <span
              className="text-[white] font-semibold text-[20px] lg:text-[30px]"
            >
              kanban
            </span>
          </div>
          <div className='flex items-center gap-[17px]'>
          <span
            className="text-[white] font-medium text-[20px] mb-[13px]"
          >
            Forgot Password?
          </span>
          <i className="fa-solid fa-lock text-[#6660C3] mb-[8px]"></i>
          </div>
          <p className="text-[white] text-[14px] md:text-[15px] lg:text-[15px]">
          Enter your email and we'll send you instructions to reset your password
          </p>
          <form className="w-[95%] flex flex-col gap-[25px] mt-[30px] relative">
            <input type="email" placeholder="Email" autocomplete="off" className="border-2 border-[#6660C3] 
            rounded-[10px] py-[15px] px-[10px] outline-none text-[#6660C3]" />
          </form>
          <button className="bg-[#6660C3] w-[98%] rounded-[8px] py-[10px] px-[20px]
          mt-[40px] text-[white] font-semibold cursor-pointer custom-shadow">
            Send Reset Link
          </button>
          <div className="mt-[40px] flex items-center justify-center gap-[10px]">
            <i className="fa-solid fa-angle-left text-[#6660C3] text-[18px]"></i>
            <Link to='/login'>
              <span className="text-[#6660C3] font-semibold text-[17px]">Back to login</span>
            </Link>
          </div>
        </div>
        <div className="login-image hidden lg:block">
          <img src={forpass} width={500} height={800} alt="forpass" />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;