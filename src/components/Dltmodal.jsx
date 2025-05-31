import React from "react";

const Dltmodal = ({
  dlt,
  handleCloseDlt,
  handleCloseDltX,
  setDlt,
  taskId,
  boards,
  setBoards,
  activeBoardId,
}) => {
  const handleCloseDltC = () => {
    setDlt(false);
  };
  const handleDeletet = (id) => {
    const activeBoard = boards.find((b) => b.id === activeBoardId);
    if (!activeBoard) return;

    const newColumns = activeBoard.columns.map((column) => {
      if (column.tasks.some((task) => task.id === id)) {
        return {
          ...column,
          tasks: column.tasks.filter((task) => task.id !== id),
        };
      }
      return column;
    });
    const updatedBoards = boards.map((board) => {
      if (board.id === activeBoardId) {
        return {
          ...board,
          columns: newColumns,
        };
      }
      return board;
    });

    setBoards(updatedBoards);
    setDlt(false);
  };
  return (
    <div
      className={`cnb-overlay w-full min-h-screen bg-[#00000099] absolute inset-0 z-50
    flex justify-center items-center ${dlt ? "block" : "hidden"}`}
      onClick={(e) => handleCloseDlt(e)}
    >
      <div
        className="dlb-modal w-[500px] min-h-[260px] bg-[#2C2C37] rounded-[15px] pt-[17px]
        px-[20px] pb-[50px] flex flex-col justify-between mx-[17px] sm:mx-0 md:mx-0 lg:mx-0"
      >
        <div className="flex flex-col gap-[30px]">
          <div className="flex justify-between items-center">
            <p className="text-[white] text-[20px] font-semibold">
              Delete this task?
            </p>
            <button className="cursor-pointer" onClick={handleCloseDltX}>
              <i className="fa-solid fa-xmark text-[white] text-[20px]"></i>
            </button>
          </div>
          <p className="text-[#7B8799]">
            Are you sure you want to delete this task and its subtasks? <br />
            <span className="text-[red]">This action cannot be reversed.</span>
          </p>
          <div className="flex justify-between items-center mt-[13px]">
            <button
              className="bg-[red] text-[white] rounded-[8px] px-[5px] w-[42%] py-[10px] 
            font-semibold cursor-pointer custom-shadow2"
              onClick={() => handleDeletet(taskId)}
            >
              Delete
            </button>
            <button
              className="bg-[#6660C3] text-[white] rounded-[8px] px-[5px] w-[42%] py-[10px] 
            font-semibold cursor-pointer custom-shadow2"
              onClick={handleCloseDltC}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dltmodal;
