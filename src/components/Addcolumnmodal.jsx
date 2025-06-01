import React from "react";

const Addcolumnmodal = ({ anc, handleCloseAnc, handleCloseAncX, handleColumn, handleAddColumn,
columnName}) => {
  return (
    <div
      className={`cnb-overlay w-full min-h-screen bg-[#00000099] absolute inset-0 z-50
      flex justify-center items-center ${anc ? "block" : "hidden"}`}
      onClick={(e) => handleCloseAnc(e)}
    >
      <div
        className="custom-modal dlb-modal w-[500px] min-h-[260px] bg-[#2C2C37] rounded-[15px] pt-[17px]
        px-[20px] pb-[50px] flex flex-col justify-between mx-[17px] sm:mx-0 md:mx-0 lg:mx-0"
      >
        <div className="flex flex-col gap-[30px] mb-[25px]">
          <div className="flex justify-between items-center">
            <p className="text-[white] text-[20px] font-semibold">
              Create Board Column
            </p>
            <button className="cursor-pointer" onClick={handleCloseAncX}>
              <i className="fa-solid fa-xmark text-[white] text-[20px]"></i>
            </button>
          </div>
        </div>
        <form
          className="flex flex-col gap-[45px]"
          onSubmit={(e) => handleAddColumn(e)}
        >
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="anc" className="text-[white] text-[14px]">
              Column Name
            </label>
            <input
              type="text"
              name="anc"
              id="anc"
              autoComplete="off"
              value={columnName}
              className="border border-[#414552] focus:border-[#6660C3] rounded-[10px] py-[8px] 
              px-[18px] outline-none caret-[#6660C3] text-[#6660C3] w-full"
              onChange={(e) => handleColumn(e)}
            />
          </div>
          <button
            className="bg-[#6660C3] text-[white] rounded-[10px] w-full py-[10px] flex gap-[10px]
            justify-center items-center font-semibold cursor-pointer custom-shadow2"
            type="submit"
          >
            <i className="fa-solid fa-plus"></i>
            <span>Add New Column</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addcolumnmodal;
