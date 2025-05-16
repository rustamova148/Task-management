import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Cnbmodal from "../components/Cnbmodal";
import Deleteboardmodal from "../components/Deleteboardmodal";
import Addcolumnmodal from "../components/Addcolumnmodal";

const Dashboard = () => {
  const [cnb, setCnb] = useState(false);
  const [dlb, setDlb] = useState(false);
  const [anc, setAnc] = useState(false);
  const [activeBoardId, setActiveBoardId] = useState(null);
  const [activeBoardName, setActiveBoardName] = useState("");
  const [boards, setBoards] = useState([]);
  const [boardName, setBoardName] = useState("");
  const [columnName, setColumnName] = useState("");
  const [boardId, setBoardId] = useState(1);
  const [pointsToggle, setPointsToggle] = useState(false);
  const [prfToggle, setPrfToggle] = useState(false);

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
  const handleCloseCnb = (e) => {
    if (e.target === e.currentTarget) {
      setCnb(false);
    }
  };
  const handleCloseDlb = (e) => {
    if (e.target === e.currentTarget) {
      console.log("false");
      setDlb(false);
    }
  };
  const handleCloseAnc = (e) => {
    if (e.target === e.currentTarget) {
      console.log("false");
      setAnc(false);
    }
  };
  const handleCloseCnbX = () => {
    setCnb(false);
  };

  const handleCloseDlbX = () => {
    setDlb(false);
  };
  const handleCloseAncX = () => {
    setAnc(false);
  };

  const handleBoard = (e) => {
    setBoardName(e.target.value);
  };
  
  const handleColumn = (e) => {
    e.preventDefault();
    setColumnName(e.target.value);
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
        { name: "Todo", tasks: [] },
        { name: "Doing", tasks: [] },
        { name: "Done", tasks: [] },
      ],
    };
    setBoards((prevBoards) => [...prevBoards, newBoard]);
    setBoardName("");
    setBoardId(boardId + 1);
    setCnb(false);
  };
  
  const handleAddColumn = (e) => {
  e.preventDefault();
  const newColumn = {name:columnName, tasks:[]};
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
      />
      <Sidebar
        boards={boards}
        handleShowCnb={handleShowCnb}
        activeBoardId={activeBoardId}
        handleBoardClick={handleBoardClick}
        handleShowAnc={handleShowAnc}
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
        activeBoardName= {activeBoardName}
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
    </div>
  );
};

export default Dashboard;
