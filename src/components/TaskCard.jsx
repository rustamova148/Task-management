import React from 'react'

const TaskCard = ({columnitem,handleShowTd}) => {
console.log(columnitem.tasks);
  return (
    <div className='flex flex-col gap-[20px] pt-[20px]'>
    {columnitem.tasks.map(task => (
    <div key={task.id} className='bg-[#2C2C37] custom-modal w-[85%] min-h-[70px] rounded-[8px] py-[20px]
    px-[15px] cursor-pointer show-btn' onClick={() => handleShowTd(task.id)}>
      <p className='text-white text-[17px] font-bold hover:text-[#6660C3] transition
      duration-300'>{task.t_name}</p>
      <p className='font-bold'>
        {task.stasks.filter(st => st.checked === true).length} of {task.stasks.length} subtask
      </p>
    </div>
    ))}
    </div>
  )
}

export default TaskCard