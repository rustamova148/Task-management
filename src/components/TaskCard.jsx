import React from 'react'

const TaskCard = ({columnitem}) => {
console.log(columnitem.tasks);
  return (
    <div className='flex flex-col gap-[20px] pt-[20px]'>
    {columnitem.tasks.map(task => (
    <div key={task.id} className='bg-[#2C2C37] w-[85%] min-h-[70px] rounded-[8px] py-[20px]
    px-[15px] cursor-pointer show-btn'>
      <p>{task.t_name}</p>
      <p>{task.t_desc}</p>
    </div>
    ))}
    </div>
  )
}

export default TaskCard