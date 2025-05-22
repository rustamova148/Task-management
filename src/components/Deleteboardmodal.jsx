import React from "react";

const Deleteboardmodal = ({dlb,handleCloseDlb,handleCloseDlbX,editableBoard,boards,setBoards,
setDlb,setPointsToggle}) => {

const handleDeleteb = (board) => {
const updatdated_b = boards.filter(b => b.board !== board);
setBoards(updatdated_b);
setDlb(false);
setPointsToggle(false);
}

const handleCloseDlbC = () => {
  setDlb(false);
  setPointsToggle(false);
}
  return (
    <div
      className={`cnb-overlay w-full min-h-screen bg-[#00000099] absolute inset-0 z-50
      flex justify-center items-center ${dlb ? "block" : "hidden"}`}
      onClick={(e) => handleCloseDlb(e)}
    >
      <div
        className="dlb-modal w-[500px] min-h-[260px] bg-[#2C2C37] rounded-[15px] pt-[17px]
        px-[20px] pb-[50px] flex flex-col justify-between mx-[17px] sm:mx-0 md:mx-0 lg:mx-0"
      >
        <div className="flex flex-col gap-[30px]">
          <div className="flex justify-between items-center">
            <p className="text-[white] text-[20px] font-semibold">
              Delete this board?
            </p>
            <button className="cursor-pointer" onClick={handleCloseDlbX}>
              <i className="fa-solid fa-xmark text-[white] text-[20px]"></i>
            </button>
          </div>
          <p className="text-[#7B8799]">
            Are you sure you want to delete the 
            <span className="text-[red]"> {`"${editableBoard.board}"`} </span>
            board? This action will remove all columns and tasks and cannot be reversed.
          </p>
          <div className="flex justify-between items-center mt-[13px]">
            <button className="bg-[red] text-[white] rounded-[8px] px-[5px] w-[42%] py-[10px] 
            font-semibold cursor-pointer custom-shadow2" onClick={()=>handleDeleteb(editableBoard.board)}>Delete</button>
            <button className="bg-[#6660C3] text-[white] rounded-[8px] px-[5px] w-[42%] py-[10px] 
            font-semibold cursor-pointer custom-shadow2" onClick={handleCloseDlbC}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deleteboardmodal;
