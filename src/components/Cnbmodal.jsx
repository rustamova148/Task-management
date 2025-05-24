import React from 'react'

const Cnbmodal = ({cnb, handleCloseCnb, handleCloseCnbX, handleBoard,handleAddBoard, boardName}) => {
  return (
    <div
        className={`cnb-overlay w-full min-h-screen bg-[#00000099] absolute inset-0 z-50
      flex justify-center items-center ${cnb ? "block" : "hidden"}`}
        onClick={(e) => handleCloseCnb(e)}
      >
        <div
          className="cnb-modal w-[500px] h-[290px] bg-[#2C2C37] rounded-[15px] pt-[17px]
        px-[20px] pb-[50px] flex flex-col justify-between mx-[17px] sm:mx-0 md:mx-0 lg:mx-0"
        >
          <div className="flex flex-col gap-[30px]">
            <div className="flex justify-between items-center">
              <p className="text-[white] text-[20px] font-semibold">
                Create New Board
              </p>
              <button className="cursor-pointer" onClick={handleCloseCnbX}>
                <i className="fa-solid fa-xmark text-[white] text-[20px]"></i>
              </button>
            </div>
            <form className="flex flex-col gap-[45px]" onSubmit={e => handleAddBoard(e)}>
              <div className="flex flex-col gap-[10px]">
              <label htmlFor="cnb" className="text-[white] text-[14px]">
                Board Name
              </label>
              <input
                type="text"
                name="cnb"
                id="cnb"
                autoComplete="off"
                placeholder="e.g. Web Design"
                value={boardName}
                className="border border-[#414552] focus:border-[#6660C3] rounded-[10px] py-[8px] px-[18px] outline-none
              caret-[#6660C3] placeholder-[#414552] text-[#6660C3] w-full"
                onChange={(e) => handleBoard(e)}
              />
              </div>
              <button
                className="bg-[#6660C3] text-[white] rounded-[10px] w-full py-[10px] flex
                justify-center gap-[10px] items-center font-semibold cursor-pointer custom-shadow2"
                type="submit"
              >
                <i className="fa-solid fa-plus"></i>
                <span>Create New Board</span>
              </button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Cnbmodal