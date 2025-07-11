import React, { useState } from "react";
import Main from "./Main";

const Sidebar = ({handleShowCnb,boards,activeBoardId,handleBoardClick,handleShowAnc,editableBoard,
selectedColumn, handleShowTd, isDarkMode, handleToggle
}) => {
  
  const [checked, setChecked] = useState(localStorage.getItem("mode") === "dark");
  const [isVisible, setIsVisible] = useState(true);

  const handleCheck = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  const handleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <div className={`${isVisible ? '' : 'flex items-end'} min-h-[calc(100vh-95px)] flex`}>
      {isVisible ? (
        <aside
          className="bg-[#2C2C37] w-[100%] sm:w-[50%] md:w-[43%] lg:w-[25%] min-h-[calc(100vh-95px)] flex 
          flex-col justify-between py-[10px] ps-[19px] z-30 custom-sb"
        >
          <div className="flex flex-col gap-[24px] ms-[-18px]">
          <p className="text-[#828FA2] font-semibold ms-[15px]">ALL BOARDS ({boards.length})</p>
          <button onClick={handleShowCnb}
            className="bg-[white] w-[85%] h-[45px] text-[#6660C3] flex items-center px-[5px]
            justify-center gap-[8px] ms-[15px] font-semibold rounded-[8px] text-[14px] sm:text-[16px] md:text-[16px] 
            lg:text-[16px] cursor-pointer custom-shadow2"
          >
            <i className="fa-solid fa-plus"></i>
            <span>Create New Board</span>
          </button>
          <div className="boards overflow-y-auto max-h-64 custom-scroll2">
            {boards.map(b => (
              b.id === activeBoardId ? (
              <div key={b.id} className={`text-[#828FA2] text-[19px] font-medium flex items-center gap-x-[8px]
              w-[93%] py-[10px] ps-[15px] rounded-r-[50px] mb-[10px] cursor-pointer
              hover:bg-[white] hover:text-[#6660C3] transition duration-400 overflow-hidden
              ${activeBoardId === b.id ? 'bg-[#6660C3] text-[white]' : ''}`}
              onClick={() => handleBoardClick(editableBoard.id)}>
                <i className="fa-solid fa-bolt"></i>
                <p>{editableBoard.board}</p>
              </div>
              ) : (
                <div key={b.id} className={`text-[#828FA2] text-[19px] font-medium flex items-center gap-x-[8px]
              w-[93%] py-[10px] ps-[15px] rounded-r-[50px] mb-[10px] cursor-pointer
              hover:bg-[white] hover:text-[#6660C3] transition duration-400 overflow-hidden
              ${activeBoardId === b.id ? 'bg-[#6660C3] text-[white]' : ''}`}
              onClick={() => handleBoardClick(b.id)}>
                <i className="fa-solid fa-bolt"></i>
                <p>{b.board}</p>
              </div>
              )
            ))}
          </div>
          </div>
          <div className="flex flex-col gap-[18px] mt-[15px]">
            <div
              className="w-[88%] bg-[#21212C] flex justify-between py-[12px] px-[25px]
              rounded-[10px] custom-mode"
            >
              <i className="fa-solid fa-sun text-[#828FA2] text-[20px]"></i>
              <input
                type="checkbox"
                id="mode"
                checked={isDarkMode === "dark"}
                onChange={(e) => {
                  handleCheck(e);
                  handleToggle(e)
                }
              }
              />
              <label
                htmlFor="mode"
                className="relative bg-[#6660C3] w-[45px] h-[20px] rounded-[10px] cursor-pointer"
              >
                <div
                  className={`absolute change-mode w-[20px] h-[20px] rounded-[50%] bg-[white] top-0 
                transition-all duration-500 ${checked ? "left-[25px]" : "left-0"}`}
                ></div>
              </label>
              <i className="fa-solid fa-moon text-[#828FA2] text-[20px]"></i>
            </div>
            <button
              className="bg-[#21212C] w-[88%] px-[20px] py-[10px] rounded-[8px] text-[#828FA2]
              flex items-center gap-[10px] justify-center cursor-pointer hover:bg-[white] 
              hover:text-[#6660C3] transition duration-400 custom-visb"
              onClick={handleVisibility}
            >
              <i className="fa-solid fa-eye-slash"></i>
              <span className="font-medium text-[14px] sm:text-[16px] md:text-[16px] lg:text-[16px]">
              Hide Sidebar
              </span>
            </button>
          </div>
        </aside>
      ) : (
        <button
          className="cursor-pointer bg-[#2C2C37] show-btn text-[white] mb-[30px]
      w-[56px] h-[45px] rounded-r-full hover:bg-[white] transition-all duration-500
      hover:text-[#6660C3] z-50 custom-visb"
          onClick={handleVisibility}
        >
          <i className="fa-solid fa-eye"></i>
        </button>
      )}
      <Main activeBoardId={activeBoardId} boards={boards} isVisible={isVisible} 
      handleShowAnc={handleShowAnc} selectedColum={selectedColumn} 
      handleShowTd={handleShowTd} />
    </div>
  );
}

export default Sidebar;
