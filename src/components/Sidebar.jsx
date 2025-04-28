import React, { useState } from "react";

const Sidebar = () => {
  const [checked, setChecked] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  const handleCheck = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  const handleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };
  return (
    <aside className={`${isVisible ? '' : 'flex items-end'} h-[calc(100vh-95px)]`}>
      {isVisible ? (
        <div
          className="bg-[#2C2C37] w-[60%] sm:w-[40%] lg:w-[20%] h-[calc(100vh-95px)] flex flex-col 
          justify-between py-[10px] ps-[19px]"
        >
          <p className="text-[#828FA2] font-semibold">ALL BOARDS (0)</p>
          <button
            className="bg-[white] w-[88%] h-[45px] text-[#6660C3] flex items-center
        justify-center gap-[8px] font-semibold rounded-[8px] cursor-pointer custom-shadow2"
          >
            <i className="fa-solid fa-plus"></i>
            <span>Create New Board</span>
          </button>
          <div className="flex flex-col gap-[18px]">
            <div
              className="w-[88%] bg-[#21212C] flex justify-between py-[12px] px-[25px]
              rounded-[10px]"
            >
              <i className="fa-solid fa-sun text-[#828FA2] text-[20px]"></i>
              <input
                type="checkbox"
                id="mode"
                checked={checked}
                onChange={handleCheck}
              />
              <label
                htmlFor="mode"
                className="relative bg-[#6660C3] w-[45px] h-[20px] rounded-[10px] cursor-pointer"
              >
                <div
                  className={`absolute change-mode w-[20px] h-[20px] rounded-[50%] bg-[white] top-0 
                transition-all duration-500 
                ${checked ? "left-[25px]" : "left-0"}`}
                ></div>
              </label>
              <i className="fa-solid fa-moon text-[#828FA2] text-[20px]"></i>
            </div>
            <button
              className="bg-[#21212C] w-[88%] px-[20px] py-[10px] rounded-[8px] text-[#828FA2]
        flex items-center gap-[10px] justify-center cursor-pointer hover:bg-[white] 
        hover:text-[#6660C3] transition duration-400"
              onClick={handleVisibility}
            >
              <i className="fa-solid fa-eye-slash"></i>
              <span className="font-medium">Hide Sidebar</span>
            </button>
          </div>
        </div>
      ) : (
        <button
          className="cursor-pointer bg-[#2C2C37] show-btn text-[white] mb-[30px]
      w-[56px] h-[45px] rounded-r-full hover:bg-[white] transition-all duration-500
      hover:text-[#6660C3]"
          onClick={handleVisibility}
        >
          <i className="fa-solid fa-eye"></i>
        </button>
      )}
    </aside>
  );
};

export default Sidebar;
