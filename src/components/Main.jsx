import React from "react";

const Main = ({ activeBoardId, boards, isVisible, handleShowAnc }) => {

  return (
    <div className="main w-[100%] ms-[-45px] lg:ms-0 min-h-[calc(100vh-95px)] p-[15px] overflow-x-scroll
    custom-scroll z-10">
      {boards
        .filter((b) => b.id === activeBoardId)
        .map((bn) => (
          <div key={bn.id} className="min-w-[280%] lg:min-w-[130%] flex ps-[10px]">
            <div className="min-w-[70%] ms-[-17px] lg:ms-0">
            <div className="flex gap-[30px] mb-[15px]">
              {isVisible ? '' : <p className="text-[#6660C3] text-[30px] mb-[10px]
              font-semibold">{bn.board}</p>}
              <button className="bg-[#2C2C37] text-[#828FA2] w-[140px] h-[50px] rounded-[10px] flex
              items-center justify-center gap-[7px] font-semibold cursor-pointer profile-btn 
              hover:text-[#6660C3]" onClick={handleShowAnc}>
                <i className="fa-solid fa-plus"></i>
                <span>New Column</span>
              </button>
            </div>
            <div className="flex justify-between">
              {bn.columns.map((bnc) => (
                <div key={bnc.id} className="w-[80%] text-[#828FA2] text-[14px] font-semibold tracking-wider">
                  {bnc.name} ({bnc.tasks.length})
                </div>
              ))}
            </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Main;
