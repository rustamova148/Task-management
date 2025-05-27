import React from 'react'

const TaskCard = ({columnitem}) => {
console.log(columnitem.tasks);
  return (
    <div>
    {columnitem.tasks.map(task => (
    <div key={task.id}>
      <p>{task.t_name}</p>
      <p>{task.t_desc}</p>
    </div>
    ))}
    </div>
  )
}

export default TaskCard