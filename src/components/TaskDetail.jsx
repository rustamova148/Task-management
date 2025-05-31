import React from "react";
import { Listbox } from "@headlessui/react";

const TaskDetail = ({
  td,
  handleCloseTd,
  handleCloseTdX,
  boards,
  activeBoardId,
  selectedColumn,
  setSelectedColumn,
  editableBoard,
  handleCheck,
  handleApply,
  handlePointsBox2,
  pointsToggle2,
  handleShowEt,
  handleShowDlt,
  // handleDeletet
}) => {
// const handleDeletet = () => {

// }
  return (
    <div
      className={`cnb-overlay w-full min-h-screen bg-[#00000099] absolute inset-0 z-50
    flex justify-center items-center ${td ? "block" : "hidden"}`}
      onClick={(e) => handleCloseTd(e)}
    >
      {boards
        .filter((b) => b.id === activeBoardId)
        .map((bn) => (
          <div
            key={bn.id}
            className="cnb-modal w-[500px] min-h-[290px] bg-[#2C2C37] rounded-[15px] pt-[17px]
          px-[20px] pb-[50px] flex flex-col justify-between mx-[17px] sm:mx-0 md:mx-0 lg:mx-0"
          >
            {bn.columns.map((bnc) =>
              bnc.tasks.map((task) => (
                <div key={task.id} className="flex flex-col gap-[25px]">
                  <div className="flex justify-between items-center">
                    <p className="text-[white] text-[20px] font-semibold">
                      {task.t_name}
                    </p>
                    <div className="flex items-center gap-[19px]">
                      <button className="cursor-pointer" onClick={handlePointsBox2}>
                        <i className="fa-solid fa-pen-to-square text-[white] text-[20px]"></i>
                      </button>
                      <div
                      className={`points-box z-40 bg-[#2C2C37] prf-btn-box flex justify-between items-center 
                      border border-[#6660C3] rounded-[10px] absolute right-[450px] top-[160px] w-[130px] 
                      h-[100px] ${pointsToggle2 ? "block" : "hidden"}`}
                      >
                        <ul className="flex flex-col gap-[9px] ms-[10px]">
                          <li
                            className="text-[#778FA2] cursor-pointer"
                            onClick={handleShowEt}
                          >
                            Edit Task
                          </li>
                          <li
                            className="text-[#FF0000] cursor-pointer"
                            onClick={() => handleShowDlt(task.id)}
                          >
                            Delete Task
                          </li>
                        </ul>
                      </div>
                      <button
                        className="cursor-pointer"
                        onClick={handleCloseTdX}
                      >
                        <i className="fa-solid fa-xmark text-[white] text-[20px]"></i>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[7px]">
                    <p className="text-[#7D899C] font-semibold">Description</p>
                    <p className="text-white text-[14px]">{task.t_desc}</p>
                  </div>
                  <div className="flex flex-col gap-[17px]">
                    <p className="text-[#7D899C] font-semibold">
                      Subtasks (
                      {task.stasks.filter((st) => st.checked === true).length}{" "}
                      of {task.stasks.length})
                    </p>
                    <ul className="flex flex-col gap-[8px]">
                      {task.stasks.map((st) => (
                        <li
                          key={st.id}
                          className=" 
                      flex items-center gap-[14px] bg-[#21212C] rounded-[8px] py-[10px] px-[18px]"
                        >
                          <label className="text-white font-bold flex items-center gap-[14px]">
                            <input
                              type="checkbox"
                              name={`sub-${st.id}`}
                              checked={!!st.checked}
                              onChange={() => {
                                handleCheck(task.id, st.id);
                              }}
                              className="accent-[#6660C3] w-[18px] h-[18px] text-[3px] peer"
                            />
                            <span className="peer-checked:text-[#7D899C] peer-checked:line-through">
                              {st.sname}
                            </span>
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <form
                    className="flex items-center justify-between"
                    onSubmit={(e) => handleApply(e, task.id)}
                  >
                    <div className="w-[80%] flex flex-col gap-[10px] relative">
                      <label
                        htmlFor="statusopt"
                        className="text-[white] text-[14px] font-semibold"
                      >
                        Change Status
                      </label>
                      <Listbox
                        value={selectedColumn}
                        onChange={setSelectedColumn}
                      >
                        <Listbox.Button
                          className="w-[85%] border border-[#414552] focus:border-[#6660C3]
                          rounded-lg p-3 text-left outline-none flex items-center justify-between text-[#6660C3]"
                        >
                          <span>{selectedColumn?.name}</span>
                          <i className="fa-solid fa-angle-down text-[#6660C3]"></i>
                        </Listbox.Button>
                        <Listbox.Options className="absolute w-[85%] top-[75px] bg-[#272738] border border-gray-400 shadow-lg outline-none z-50">
                          {editableBoard.columns.map((c) => (
                            <Listbox.Option
                              key={c.id}
                              value={c}
                              className="px-[17px] py-[5px] hover:bg-blue-600 text-[white] text-[14px]"
                            >
                              {c?.name}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Listbox>
                    </div>
                    <button
                      type="submit"
                      className="bg-[#25AC00] text-[white] mt-[32px] px-[15px] py-[10px]
                    rounded-[8px] flex items-center gap-[7px] cursor-pointer custom-shadow2"
                    >
                      <i className="fa-solid fa-check"></i>
                      <span className="font-semibold">Apply</span>
                    </button>
                  </form>
                </div>
              ))
            )}
          </div>
        ))}
    </div>
  );
};

export default TaskDetail;
