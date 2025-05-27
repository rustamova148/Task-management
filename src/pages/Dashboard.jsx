import React, { useState, useEffect } from "react";
import {v4 as uuidv4} from 'uuid';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Cnbmodal from "../components/Cnbmodal";
import Deleteboardmodal from "../components/Deleteboardmodal";
import Addcolumnmodal from "../components/Addcolumnmodal";
import Editboardmodal from "../components/Editboardmodal";
import Infomodal from "../components/Infomodal";
import Addnewtaskmodal from "../components/Addnewtaskmodal";

const Dashboard = () => {
  const [cnb, setCnb] = useState(false);
  const [dlb, setDlb] = useState(false);
  const [anc, setAnc] = useState(false);
  const [eb, setEb] = useState(false);
  const [inf, setInf] = useState(false);
  const [ant, setAnt] = useState(false);
  const [activeBoardId, setActiveBoardId] = useState(null);
  const [activeBoardName, setActiveBoardName] = useState("");
  const [boards, setBoards] = useState([]);
  const [boardName, setBoardName] = useState("");
  const [columnName, setColumnName] = useState("");
  const [columnId, setColumnId] = useState(4);
  const [boardId, setBoardId] = useState(1);
  const [pointsToggle, setPointsToggle] = useState(false);
  const [prfToggle, setPrfToggle] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState("");
  const [taskname, setTaskname] = useState("");
  const [taskdesc, setTaskdesc] = useState("");
  const [subinp, setSubinp] = useState([
    {id: uuidv4(), sname: ""},
    {id: uuidv4(), sname: ""},
  ]);

  const handleAddStask = () => {
  setSubinp(prev => [...prev, {id: uuidv4(), sname: ""}]);
  }

  const handleStChange = (id, value) => {
  const updated = subinp.map(si => 
  si.id === id ? {...si, sname: value} : si
  );
  setSubinp(updated);
  }
  
  const handleDeleteStask = (id) => {
  const h = subinp.filter(s => s.id !== id);
  setSubinp(h);
  }
  
  const handleAddTask = (e) => {
    e.preventDefault();
    const updated = boards.map(b => {
      if(b.id === activeBoardId){
      const updatedColumns = b.columns.map(col => {
        if(col.name === selectedColumn.name){
          return{
            ...col,
            tasks: [...col.tasks, {id: uuidv4(), t_name: taskname, t_desc: taskdesc, stasks: [...subinp]}]
          }
        }
        return col;
      })
        return{
          ...b,
          columns: updatedColumns
          
        }
      }
      return b;
    })
    setBoards(updated);
    setAnt(false);
  }
  console.log(boards);
  // console.log(selectedColumn.name)
  // console.log(taskname)
  // console.log(taskdesc)

  const [editableBoard, setEditableBoard] = useState({
  board: '',
  columns: []
  });

  useEffect(() => {
  const found = boards.find(b => b.board === activeBoardName);
  if (found) {
    setEditableBoard({
      board: found.board,
      columns: [...found.columns]
    });
  }
  }, [activeBoardName, boards]);

  const handleBoardNameChange = (value) => {
    setEditableBoard(prev => ({
      ...prev,
      board: value
    }));
  }

  const handleColumnChange = (id, value) => {
  const updated = [...editableBoard.columns];
  const index = updated.findIndex((col) => col.id === id);
  updated[index].name = value;
  setEditableBoard(prev => ({
    ...prev,
    columns: updated
  }));
  };

  const handleEditedBSubmit = (e) => {
  e.preventDefault();

  const updatedBoards = boards.map(b => {
    if (b.board === activeBoardName) {
      return {
        ...b,
        board: editableBoard.board,
        columns: editableBoard.columns
      };
    }
    return b;
  });

  setBoards(updatedBoards); 
  setEb(false);
  setPointsToggle(false);
  };

  const handleProfileBox = () => {
    setPrfToggle((prevState) => !prevState);
    setPointsToggle(false);
  };

  const handlePointsBox = () => {
    setPointsToggle((prevState) => !prevState);
    setPrfToggle(false);
  }

  const handleShowCnb = () => {
    setCnb(true);
  };
  const handleShowDlb = () => {
    setDlb(true);
  };
  const handleShowAnc = () => {
    setAnc(true);
  };
  const handleShowEb = () => {
    setEb(true);
  }
  const handleShowInf = () => {
    setInf(true);
  }
  const handleShowAnt = () => {
    setAnt(true);
  }
  const handleCloseCnb = (e) => {
    if (e.target === e.currentTarget) {
      setCnb(false);
    }
  };
  const handleCloseDlb = (e) => {
    if (e.target === e.currentTarget) {
      setDlb(false);
    }
  };
  const handleCloseAnc = (e) => {
    if (e.target === e.currentTarget) {
      setAnc(false);
    }
  };
  const handleCloseEb = (e) => {
    if (e.target === e.currentTarget) {
      setEb(false);
    }
  }
  const handleCloseInf = (e) => {
    if (e.target === e.currentTarget) {
      setInf(false);
    }
  }
  const handleCloseAnt = (e) => {
    if (e.target === e.currentTarget) {
      setAnt(false);
    }
  }
  const handleCloseCnbX = () => {
    setCnb(false);
  };

  const handleCloseDlbX = () => {
    setDlb(false);
  };
  const handleCloseAncX = () => {
    setAnc(false);
  };
  const handleCloseEbX = () => {
    setEb(false);
  };
  const handleCloseAntX = () => {
    setAnt(false);
  }
  const handleBoard = (e) => {
    setBoardName(e.target.value);
  };
  const handleColumn = (e) => {
    e.preventDefault();
    setColumnName(e.target.value);
  }

  const handleDeleteColumn = (id) => {
  setEditableBoard(prev => ({
    ...prev,
    columns: prev.columns.filter(c => c.id !== id)
  }));
  }

  const handleBoardClick = (id) => {
    setActiveBoardId(id);
    const active_b = boards.find((b) => b.id === id);
    setActiveBoardName(active_b.board);
  };

  const handleAddBoard = (e) => {
    e.preventDefault();
    const newBoard = {
      id: boardId,
      board: boardName,
      columns: [
        { id: 1, name: "Todo", tasks: [] },
        { id: 2, name: "Doing", tasks: [] },
        { id: 3, name: "Done", tasks: [] },
      ],
    };
    setBoards((prevBoards) => [...prevBoards, newBoard]);
    if(boards.length === 0){
      setActiveBoardId(newBoard.id);
      setActiveBoardName(newBoard.board);
    }
    setBoardName("");
    setBoardId(boardId + 1);
    setCnb(false);
    boards.map(b=> console.log(b.columns));
  };
  
  const handleAddColumn = (e) => {
  e.preventDefault();
  const newColumn = {id:columnId, name:columnName, tasks:[]};
  setColumnId(prev => prev + 1);
  setBoards(prevBoards => prevBoards.map(board => {
    if(board.id === activeBoardId){
      return{
        ...board,
        columns: [...board.columns, newColumn],
      }
    }
    return board;
  }))
  setColumnName("");
  setAnc(false);
  }

  return (
    <div className="bg-[#21212C] min-h-screen relative">
      <Header boards={boards} handleShowDlb={handleShowDlb} pointsToggle={pointsToggle}
      prfToggle={prfToggle} handleProfileBox={handleProfileBox} handlePointsBox={handlePointsBox} 
      handleShowEb={handleShowEb} handleShowInf={handleShowInf} handleShowAnt={handleShowAnt}
      />
      <Sidebar
        handleShowCnb={handleShowCnb}
        activeBoardId={activeBoardId}
        handleBoardClick={handleBoardClick}
        handleShowAnc={handleShowAnc}
        boards={boards}
        editableBoard={editableBoard}
      />
      <Cnbmodal
        cnb={cnb}
        handleCloseCnb={handleCloseCnb}
        handleCloseCnbX={handleCloseCnbX}
        handleBoard={handleBoard}
        handleAddBoard={handleAddBoard}
        boardName={boardName}
      />
      <Deleteboardmodal
        dlb={dlb}
        handleCloseDlb={handleCloseDlb}
        handleCloseDlbX={handleCloseDlbX}
        editableBoard= {editableBoard}
        boards={boards}
        setBoards={setBoards}
        setDlb={setDlb}
        setPointsToggle={setPointsToggle}
      />
      <Addcolumnmodal 
        anc={anc}
        handleCloseAnc={handleCloseAnc}
        handleCloseAncX={handleCloseAncX}
        handleColumn={handleColumn}
        handleAddColumn={handleAddColumn}
        columnName={columnName}
      />
      <Editboardmodal 
      eb={eb}
      handleCloseEb={handleCloseEb}
      handleCloseEbX={handleCloseEbX}
      handleBoardNameChange={handleBoardNameChange}
      editableBoard={editableBoard}
      handleColumnChange={handleColumnChange}
      handleEditedBSubmit={handleEditedBSubmit}
      handleDeleteColumn={handleDeleteColumn}
      />
      <Infomodal inf={inf} handleCloseInf={handleCloseInf} />
      <Addnewtaskmodal ant={ant} subinp={subinp}
      handleCloseAnt={handleCloseAnt} handleCloseAntX={handleCloseAntX}
      editableBoard={editableBoard} selectedColumn={selectedColumn} 
      setSelectedColumn={setSelectedColumn} taskname={taskname} setTaskname={setTaskname}
      taskdesc={taskdesc} setTaskdesc={setTaskdesc} handleAddStask={handleAddStask}
      handleStChange={handleStChange} handleDeleteStask={handleDeleteStask} 
      handleAddTask={handleAddTask}
      />
    </div>
  );
};

export default Dashboard;
