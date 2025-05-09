import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router";

const Header = ({ boards }) => {
  const navigate = useNavigate();
  const [prfToggle, setPrfToggle] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("Email");
    localStorage.removeItem("Password");
    navigate("/login");
  };

  const handleProfileBox = () => {
    setPrfToggle((prevState) => !prevState);
  };

  return (
    <header className="w-full min-h-[95px] bg-[#2C2C37] flex items-center justify-between px-[15px]">
      <div className="flex items-center gap-[11px]">
        <img src={logo} className="w-[22px] h-[28px]" alt="logo" />
        <p className="text-[white] text-[32px] font-semibold">kanban</p>
      </div>
      <p className="text-[white] text-[28px] font-semibold hidden lg:block">
        Platform Launch
      </p>
      <div className="flex items-center gap-[18px]">
        <div
          className={`flex items-center gap-[18px] ${
            boards.length === 0 ? "hidden" : "block"
          }`}
        >
          <button
            className="ant-btn bg-[#6660C3] h-[45px] text-[white] flex items-center px-[15px]
        lg:px-[10px] justify-center gap-[8px] font-semibold rounded-[8px] cursor-pointer custom-shadow2"
          >
            <i className="fa-solid fa-plus"></i>
            <p className="hidden lg:block">Add New Task</p>
          </button>
          <button className="thp-btn flex items-center justify-center cursor-pointer">
            <i className="fa-solid fa-ellipsis-vertical text-[#6660C3] text-[31px]"></i>
          </button>
        </div>
        <div
          className="profile-btn relative border border-[#6660C3] w-[50px] h-[50px] rounded-[100%] flex justify-center 
        items-center text-[22px] text-[#6660C3] cursor-pointer"
          onClick={handleProfileBox}
        >
          NR
        </div>
        <div
          className={`prfbox w-[250px] h-[180px] bg-[#2C2C37] prf-btn-box border border-[#6660C3]
        rounded-[10px] p-[15px] text-[#6660C3] absolute right-[25px] top-[105px] flex flex-col items-center
        justify-between ${prfToggle ? "block" : "hidden"}`}
          onClick={handleProfileBox}
        >
          <p className="text-[20px]">Username</p>
          <ul className="w-full flex flex-col items-start gap-[10px] text-[18px]">
            <li>Settings</li>
            <li>Info</li>
            <li onClick={handleLogout} className="cursor-pointer">
              Logout
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
