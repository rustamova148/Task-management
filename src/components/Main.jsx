import React from 'react'

const Main = ({activeBoardId,boards}) => {
console.log(activeBoardId);
console.log(boards);
  return (
    <div className='p-[15px]'>
        {boards.filter(b => b.id === activeBoardId).map(bn =>(
            <p>{bn.board}</p>
        ))}
    </div>
  )
}

export default Main