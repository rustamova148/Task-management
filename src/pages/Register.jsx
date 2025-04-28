import React, { useState } from "react";
import regimg from "../assets/register-image.svg";
import logo from "../assets/logo.svg";
import { Link } from "react-router";

const Register = () => {
const [visibilityp, setVisibilityp] = useState(true);

const handleVisibility = (e) => {
e.preventDefault();
  if(visibilityp){
    setVisibilityp(false);
  }else{
    setVisibilityp(true);
  }
}
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#21212C]">
      <div
        className="reg-container flex justify-center lg:justify-between items-center
       w-[100%] lg:w-[85%] my-[20px]"
      >
        <div
          className="reg-box border bg-[#2C2C37] border-none w-[85%] sm:w-[70%] md:w-[60%] lg:w-[45%] min-h-[750px] 
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
          <p
            className="text-[white] font-medium text-[16px] lg:text-[20px] mb-[5px]"
          >
            Adventure starts here
          </p>
          <p className="text-[#6660C3] text-[14px] md:text-[16px] lg:text-[16px]">
            Make your app management easy and fun!
          </p>
          <form className="w-[95%] flex flex-col gap-[25px] mt-[30px] relative">
            <input type="text" placeholder="Fullname" className="border-2 border-[#6660C3] 
            rounded-[10px] py-[15px] px-[10px] outline-none text-[#6660C3]" />
            <input type="email" placeholder="Email" autocomplete="off" className="border-2 border-[#6660C3] 
            rounded-[10px] py-[15px] px-[10px] outline-none text-[#6660C3]" />
            <input type={visibilityp ? "password" : "text"} placeholder="Password" className="border-2 border-[#6660C3] 
            rounded-[10px] py-[15px] px-[10px] outline-none text-[#6660C3]" />
            <button className="absolute right-[20px] top-[183px] cursor-pointer"
            onClick={(e) => handleVisibility(e)}>
            <i className={`fa-solid text-[#6660C3] ${visibilityp ? 'fa-eye' : 'fa-eye-slash'}`}></i>
            </button>
          </form>
          <button className="bg-[#6660C3] w-[98%] rounded-[8px] py-[10px] px-[20px]
          mt-[70px] text-[white] cursor-pointer custom-shadow" style={{fontWeight: "600"}}>Sign Up</button>
          <div className="mt-[58px] flex items-center justify-center gap-[15px]">
            <span className="text-[white]">Already have an account?</span>
            <Link to='/login'>
              <span className="text-[#6660C3]">Sign in instead</span>
            </Link>
          </div>
          <div className="flex items-center justify-between gap-[15px] mt-[30px]">
            <div className="w-[43%] h-[1px] bg-[grey]"></div>
            <span className="text-[white]">or</span>
            <div className="w-[43%] h-[1px] bg-[grey]"></div>
          </div>
          <div className="flex items-center justify-center gap-[20px] mt-[40px]">
            <div className="w-[30px] h-[30px] bg-[#21212C] rounded-[5px] cursor-pointer custom-shadow flex items-center justify-center">
              <i className="fa-brands fa-google text-[#6660C3]"></i>
            </div>
            <div className="w-[30px] h-[30px] bg-[#21212C] rounded-[5px] cursor-pointer custom-shadow flex items-center justify-center">
              <i className="fa-brands fa-facebook-f text-[#6660C3]"></i>
            </div>
            <div className="w-[30px] h-[30px] bg-[#21212C] rounded-[5px] cursor-pointer custom-shadow flex items-center justify-center">
              <i className="fa-brands fa-twitter text-[#6660C3]"></i>
            </div>
          </div>
        </div>
        <div className="login-image hidden lg:block">
          <img src={regimg} width={470} height={800} alt="regimg" />
        </div>
      </div>
    </div>
  );
};

export default Register;