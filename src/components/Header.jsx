import React from "react";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router";

const Header = ({ boards,handleShowDlb,pointsToggle,prfToggle,handlePointsBox,handleProfileBox,
handleShowEb,handleShowInf,handleShowAnt}) => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("Email");
    localStorage.removeItem("Password");
    navigate("/login", {replace: true});
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
          onClick={handleShowAnt}>
            <i className="fa-solid fa-plus"></i>
            <p className="hidden lg:block">Add New Task</p>
          </button>
          <button className="thp-btn flex items-center justify-center cursor-pointer relative"
          onClick={handlePointsBox}>
            <i className="fa-solid fa-ellipsis-vertical text-[#6660C3] text-[31px]"></i>
          </button>
          <div className={`points-box z-40 bg-[#2C2C37] prf-btn-box flex justify-between items-center 
          border border-[#6660C3] rounded-[10px] absolute right-[85px] top-[106px] w-[130px] 
          h-[100px] ${pointsToggle ? "block" : "hidden"}`}>
             <ul className="flex flex-col gap-[9px] ms-[10px]">
              <li className="text-[#778FA2] cursor-pointer" onClick={handleShowEb}>Edit board</li>
              <li className="text-[#FF0000] cursor-pointer" onClick={handleShowDlb}>Delete board</li>
             </ul>
          </div>
        </div>
        <div
          className="profile-btn relative border border-[#6660C3] w-[50px] h-[50px] rounded-[100%] flex justify-center 
        items-center text-[22px] text-[#6660C3] cursor-pointer"
          onClick={handleProfileBox}
        >
          NR
        </div>
        <div
          className={`prfbox z-40 w-[250px] h-[180px] bg-[#2C2C37] prf-btn-box border border-[#6660C3]
        rounded-[10px] p-[15px] text-[#6660C3] absolute right-[25px] top-[105px] flex flex-col items-center
        justify-between ${prfToggle ? "block" : "hidden"}`}
          onClick={handleProfileBox}
        >
          <p className="text-[20px]">Username</p>
          <ul className="w-full flex flex-col items-start gap-[10px] text-[18px]">
            <li className="cursor-pointer hover:text-white flex gap-[14px] items-center
            transition duration-300">
              <i className="fa-solid fa-gear"></i>
              <span>Settings</span>
            </li>
            <li className="cursor-pointer hover:text-white flex gap-[21px] items-center ps-[5px]
            transition duration-300" onClick={handleShowInf}>
              <i className="fa-solid fa-info"></i>
              <span>Info</span>
            </li>
            <li onClick={handleLogout} className="cursor-pointer hover:text-white flex gap-[14px] items-center
            transition duration-300">
              <i className="fa-solid fa-right-from-bracket"></i>
              <span>Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
