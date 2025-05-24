import React from "react";

const Addnewtaskmodal = ({ ant, handleCloseAnt, handleCloseAntX }) => {
  return (
    <div
      className={`cnb-overlay w-full min-h-screen bg-[#00000099] absolute inset-0 z-50
    flex justify-center items-center ${ant ? "block" : "hidden"}`}
      onClick={(e) => handleCloseAnt(e)}
    >
      <div
        className="dlb-modal w-[500px] min-h-[260px] bg-[#2C2C37] rounded-[15px] pt-[17px]
    px-[20px] pb-[50px] flex flex-col justify-between mx-[17px] sm:mx-0 md:mx-0 lg:mx-0"
      >
        <div className="flex flex-col gap-[30px] mb-[25px]">
          <div className="flex justify-between items-center">
            <p className="text-[white] text-[20px] font-semibold">
              Add New Task
            </p>
            <button className="cursor-pointer" onClick={handleCloseAntX}>
              <i className="fa-solid fa-xmark text-[white] text-[20px]"></i>
            </button>
          </div>
        </div>
        <form
          className="flex flex-col gap-[16px]"
          //   onSubmit={(e) => handleAddColumn(e)}
        >
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="ant" className="text-[white] text-[14px]">
              Task Name
            </label>
            <input
              type="text"
              name="ant"
              id="ant"
              autoComplete="off"
              placeholder="e.g.Take coffee break"
              //   value={columnName}
              className="border border-[#414552] focus:border-[#6660C3] rounded-[10px] py-[8px] 
              px-[18px] outline-none caret-[#6660C3] text-[#6660C3] w-full placeholder-[#414552]"
              //   onChange={(e) => handleColumn(e)}
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="ant2" className="text-[white] text-[14px]">
              Description
            </label>
            <textarea
              type="text"
              name="ant2"
              id="ant2"
              autoComplete="off"
              placeholder="e.g.It's always good to take break. This 15 minute break will recharge the batteries a little"
              // value={boardName}
              className="border border-[#414552] focus:border-[#6660C3] rounded-[10px] pt-[20px] pb-[50px] px-[18px] outline-none
              caret-[#6660C3] placeholder-[#414552] text-[#6660C3] w-full overflow-hidden resize-none"
              // onChange={(e) => handleBoard(e)}
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="ant3" className="text-[white] text-[14px]">
              Subtasks
            </label>
            <div className="flex items-center gap-[15px]">
              <input
                type="text"
                // name={`column-${c.id}`}
                // id={`column-${c.id}`}
                autoComplete="off"
                // value={c.name}
                className="border border-[#414552] focus:border-[#6660C3] rounded-[10px] py-[8px] px-[18px] outline-none
              caret-[#6660C3] placeholder-[#414552] text-[#6660C3] w-full"
                // onChange={(e) => {
                //   console.log("Changing:", c.id, e.target.value);
                //   handleColumnChange(c.id, e.target.value)
                // }}
              />
              <button
                type="button"
                className="cursor-pointer"
                // onClick={() => handleDeleteColumn(c.id)}
              >
                <i className="fa-solid fa-xmark text-[white] text-[20px]"></i>
              </button>
            </div>
            <button
              className="bg-[white] text-[#6660C3] rounded-[10px] w-full py-[10px] flex mt-[27px]
              gap-[10px] justify-center items-center font-semibold cursor-pointer custom-shadow2"
              type="button"
            >
              <i className="fa-solid fa-plus"></i>
              <span>Add New Subtask</span>
            </button>
          </div>
          <button
            className="bg-[#6660C3] text-[white] rounded-[10px] w-full py-[10px] flex gap-[10px]
            justify-center items-center font-semibold cursor-pointer custom-shadow2"
            type="submit"
          >
            <i className="fa-solid fa-plus"></i>
            <span>Add New Task</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addnewtaskmodal;
