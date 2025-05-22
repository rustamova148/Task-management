import React from 'react'

const Editboardmodal = ({eb,handleCloseEb,handleCloseEbX,handleBoardNameChange,handleColumnChange,
editableBoard,handleEditedBSubmit}) => {
  return (
    <div
      className={`cnb-overlay w-full min-h-screen bg-[#00000099] absolute inset-0 z-50
      flex justify-center items-center ${eb ? "block" : "hidden"}`}
      onClick={(e) => handleCloseEb(e)}
    >
      <div
        className="dlb-modal w-[500px] min-h-[260px] bg-[#2C2C37] rounded-[15px] pt-[17px]
        px-[20px] pb-[50px] flex flex-col justify-between mx-[17px] sm:mx-0 md:mx-0 lg:mx-0"
      >
        <div className="flex flex-col gap-[30px]">
          <div className="flex justify-between items-center">
            <p className="text-[white] text-[20px] font-semibold">
              Edit board
            </p>
            <button className="cursor-pointer" onClick={handleCloseEbX}>
              <i className="fa-solid fa-xmark text-[white] text-[20px]"></i>
            </button>
          </div>
          <form className="flex flex-col gap-[45px]" 
          onSubmit={e => handleEditedBSubmit(e)}
          >
              <div className="flex flex-col gap-[10px]">
              <label htmlFor="eb" className="text-[white] text-[14px]">
                Board Name
              </label>
              <input
                type="text"
                name="eb"
                id="eb"
                autocomplete="off"
                value={editableBoard.board}
                className="border border-[#414552] focus:border-[#6660C3] rounded-[10px] py-[8px] px-[18px] outline-none
              caret-[#6660C3] placeholder-[#414552] text-[#6660C3] w-full"
                onChange={(e) => {
                console.log("New value", e.target.value);
                handleBoardNameChange(e.target.value)}
                }
              />
              </div>
              <div className="flex flex-col gap-[10px]">
              <label htmlFor="eb" className="text-[white] text-[14px]">
                Board Columns
              </label>
              <div className='flex flex-col gap-[15px]'>
              {editableBoard.columns.map((c,index) => (
                <input
                type="text"
                name="eb"
                id="eb"
                autocomplete="off"
                value={c.name}
                className="border border-[#414552] focus:border-[#6660C3] rounded-[10px] py-[8px] px-[18px] outline-none
              caret-[#6660C3] placeholder-[#414552] text-[#6660C3] w-full"
                onChange={(e) => handleColumnChange(index, e.target.value)}
              />
              ))}
              </div>
              </div>
              <button
                className="bg-[#6660C3] text-[white] rounded-[10px] w-full py-[10px] flex
                justify-center gap-[10px] items-center font-semibold cursor-pointer custom-shadow2"
                type="submit"
              >
                Save Changes
              </button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Editboardmodal