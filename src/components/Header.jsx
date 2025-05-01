import React from 'react'
import logo from '../assets/logo.svg'

const Header = ({boards}) => {
  return (
    <header className='w-full min-h-[95px] bg-[#2C2C37] flex items-center justify-between px-[15px]'>
        <div className='flex items-center gap-[11px]'>
        <img src={logo} className='w-[22px] h-[28px]' alt="logo" />
        <p className='text-[white] text-[32px] font-semibold'>kanban</p>
        </div>
        <p className='text-[white] text-[28px] font-semibold hidden lg:block'>Platform Launch</p>
        <div className='flex items-center gap-[18px]'>
        <div className={`flex items-center gap-[18px] ${boards.length === 0 ? 'hidden': 'block'}`}>
        <button className="ant-btn bg-[#6660C3] h-[45px] text-[white] flex items-center px-[10px]
          justify-center gap-[8px] font-semibold rounded-[8px] cursor-pointer custom-shadow2">
          <i className="fa-solid fa-plus"></i>
          <span>Add New Task</span>
        </button>
        <button className='thp-btn flex items-center justify-center cursor-pointer'>
          <i className="fa-solid fa-ellipsis-vertical text-[#6660C3] text-[31px]"></i>
        </button>
        </div>
        <div className='border border-[#6660C3] w-[50px] h-[50px] rounded-[100%] flex justify-center 
        items-center text-[22px] text-[#6660C3] profile-btn cursor-pointer'>
            NR
        </div>
        </div>
    </header>
  )
}

export default Header