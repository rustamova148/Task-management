import { Listbox } from "@headlessui/react";
import React from "react";

const Addnewtaskmodal = ({ ant, handleCloseAnt, handleCloseAntX, editableBoard, selectedColumn,
setSelectedColumn, taskname, setTaskname, taskdesc, setTaskdesc, handleAddStask, handleStChange,
handleDeleteStask, subinp, handleAddTask
}) => {
  return (
    <div
    className={`cnb-overlay w-full min-h-screen bg-[#00000099] absolute inset-0 z-50
    flex justify-center items-center ${ant ? "block" : "hidden"} overflow-hidden`}
    onClick={(e) => handleCloseAnt(e)}
    >
      <div
      className="dlb-modal w-[500px] max-h-screen overflow-y-auto bg-[#2C2C37] rounded-[15px] scrollbar-none 
      pt-[17px] px-[20px] pb-[50px] flex flex-col justify-between mx-[17px] sm:mx-0 md:mx-0 lg:mx-0"
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
          onSubmit={(e) => handleAddTask(e)}
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
              value={taskname}
              className="border border-[#414552] focus:border-[#6660C3] rounded-[10px] py-[8px] 
              px-[18px] outline-none caret-[#6660C3] text-[#6660C3] w-full placeholder-[#414552]"
              onChange={e => setTaskname(e.target.value)}
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
              value={taskdesc}
              className="border border-[#414552] focus:border-[#6660C3] rounded-[10px] pt-[20px] pb-[50px] px-[18px] outline-none
              caret-[#6660C3] placeholder-[#414552] text-[#6660C3] w-full overflow-hidden resize-none"
              onChange={e => setTaskdesc(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="ant3" className="text-[white] text-[14px]">
              Subtasks
            </label>
            {subinp.map((si) => (
            <div key={si.id} className="flex items-center gap-[15px]">
              <input
                type="text"
                name={`stask-${si.id}`}
                id={`stask-${si.id}`}
                autoComplete="off"
                value={si?.sname}
                className="border border-[#414552] focus:border-[#6660C3] rounded-[10px] py-[8px] px-[18px] outline-none
              caret-[#6660C3] placeholder-[#414552] text-[#6660C3] w-full"
                onChange={(e) => {
                  console.log("Changing:", si.id, e.target.value);
                  handleStChange(si.id, e.target.value)
                }}
              />
              <button
                type="button"
                className="cursor-pointer"
                onClick={() => handleDeleteStask(si.id)}
              >
                <i className="fa-solid fa-xmark text-[#6660C3] text-[20px]"></i>
              </button>
            </div>
            ))}
            <button
              className="bg-[white] text-[#6660C3] rounded-[10px] w-full py-[10px] flex mt-[27px]
              gap-[10px] justify-center items-center font-semibold cursor-pointer custom-shadow2"
              type="button" onClick={handleAddStask}
            >
              <i className="fa-solid fa-plus"></i>
              <span>Add New Subtask</span>
            </button>
          </div>
          <div className="flex flex-col gap-[10px] relative">
            <label htmlFor="statusopt" className="text-[white] text-[14px]">
              Add Status
            </label>
            <Listbox value={selectedColumn} onChange={setSelectedColumn}>
              <Listbox.Button className="w-full border border-[#414552] focus:border-[#6660C3]
              rounded-lg p-3 text-left outline-none flex items-center justify-between text-[#6660C3]">
               <span>{selectedColumn?.name}</span>
               <i className="fa-solid fa-angle-down text-[#6660C3]"></i>
              </Listbox.Button>
              <Listbox.Options className="absolute w-full bottom-[42px] bg-[#272738] border border-gray-400 shadow-lg outline-none z-50">
                {editableBoard.columns.map(c => (
                <Listbox.Option key={c.id} value={c} className="px-[17px] py-[5px] hover:bg-blue-600 text-[white] text-[14px]">
                 {c?.name}
                </Listbox.Option>
                ))}
              </Listbox.Options>
            </Listbox>
          </div>
          <button
            className="bg-[#6660C3] text-[white] rounded-[10px] w-full py-[10px] flex gap-[10px]
            justify-center items-center mt-[25px] font-semibold cursor-pointer custom-shadow2"
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
