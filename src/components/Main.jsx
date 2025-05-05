import React from "react";

const Main = ({ activeBoardId, boards, isVisible }) => {

  return (
    <div className="main w-[100%] min-h-[calc(100vh-95px)] p-[15px] overflow-x-scroll">
      {boards
        .filter((b) => b.id === activeBoardId)
        .map((bn) => (
          <div className="min-w-[120%] flex ps-[10px]">
            <div className="w-[60%]">
            {isVisible ? '' : <p className="text-[#6660C3] text-[30px] mb-[10px]
            font-semibold">{bn.board}</p> }
            <div className="flex">
              {bn.columns.map((bnc) => (
                <div className="w-[28%] text-[#828FA2] text-[14px] font-semibold tracking-wider">
                  {bnc.name} ({bnc.tasks.length})
                </div>
              ))}
            </div>
            </div>
            <div className="anc w-[40%]">
               <button className="bg-[#2C2C37] text-[#828FA2] w-[270px] h-[190px] rounded-[10px]
               flex items-center justify-center gap-[7px] font-semibold cursor-pointer profile-btn
               hover:text-[#6660C3] mt-[62px]">
                <i className="fa-solid fa-plus text-[20px]"></i>
                <span className="text-[25px]">New Column</span>
               </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Main;
