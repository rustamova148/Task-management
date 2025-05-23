import React from 'react'

const Infomodal = ({handleCloseInf,inf}) => {
  return (
    <div className={`cnb-overlay w-full min-h-screen bg-[#00000099] absolute inset-0 z-50
    flex justify-center items-center ${inf ? "block" : "hidden"} overflow-hidden`}
    onClick={(e) => handleCloseInf(e)}
    >
        <div className="dlb-modal w-[80%] max-h-screen bg-[#2C2C37] pt-[17px] text-[#828FA2]
        overflow-y-auto scrollbar-none px-[20px] pb-[25px] flex flex-col gap-[15px] mx-[17px] 
        sm:mx-0 md:mx-0 lg:mx-0 sm:w-[50%] md:w-[50%] lg:w-[35%]"
        >
            <h1 className='text-[27px] text-[#6660C3] font-semibold'>Kanban Task Management</h1>
            <p>
            Kanban Task Management is a React website that allows you to manage your tasks using the Kanban methodology.
            </p>
            <p>
            When you first enter the site, you will need to log in or create an account. Once you are logged in, you will see a list of your boards. You can create a new board by clicking the <span className=' text-[#6660C3]'>"Create New Board"</span> button.
            </p>
            <p>
            Each board has three columns by default: Todo, Doing, and Done. You can change the names of these columns or add new columns by clicking the <span className=' text-[#6660C3]'>"Edit Board"</span> button.
            </p>
            <p>
            To create a new task, click the <span className=' text-[#6660C3]'>"Create New Task"</span> button in the upper right corner of the screen. In the new task window, you can enter the name of the task, a description, and subtasks. You can also choose which column the task should be in.
            </p>
            <p>
            To view a task in more detail, click on it. This will open a window where you can see the task's description, subtasks, and status. You can also complete subtasks and move the task to other columns by clicking the corresponding buttons.
            </p>
            <p>
            To edit or delete a task, click the corresponding buttons in the task's detail window.
            </p>
            <div>
                <p className='text-[#26B100]'>Features:</p>
                <ul className='list-disc ps-8'>
                    <li className='mt-4'>Login and user management</li>
                    <li>Create, edit, and delete boards</li>
                    <li>Create, edit, and delete tasks</li>
                    <li>View task details, complete subtasks, and move tasks to other columns</li>
                    <li>Use React and Vite</li>
                    <li>Tailwind CSS and custom CSS design</li>
                </ul>
            </div>
            <div>
                <p className='text-[#26B100]'>Limitations:</p>
                <ul className='list-disc ps-8'>
                    <li className='mt-4'>Since the site does not have a backend, all tasks or boards created will be lost when the site is renewed.</li>
                </ul>
            </div>
            <div>
                <p className='text-[#26B100]'>Benefits:</p>
                <ul className='list-disc ps-8'>
                    <li className='mt-4'>Kanban Task Management is a simple and easy-to-use way to manage your tasks.</li>
                    <li>The React make it easy to develop and maintain the site.</li>
                    <li>The Tailwind CSS and custom CSS design make the site look modern and professional.</li>
                </ul>
            </div>
            <div>
                <p className='text-[#26B100]'>Who can use Kanban Task Management?</p>
                <p className='mt-4'>
                    Kanban Task Management can be used by anyone who needs to manage their tasks, such as individuals, teams, and businesses. It is especially well-suited for projects that have multiple stages, such as software development, product development, and marketing campaigns.
                </p>
            </div>
            <div>
                <p className='text-[#26B100]'>How to get started with Kanban Task Management:</p>
                <ol className='list-decimal ps-8'>
                    <li className='mt-4'>Create an account or log in to the site.</li>
                    <li>Create a new board for your project.</li>
                    <li>Create new tasks and add them to the board.</li>
                    <li>View task details, complete subtasks, and move tasks to other columns as needed.</li>
                </ol>
            </div>
        </div>
    </div>
  )
}

export default Infomodal