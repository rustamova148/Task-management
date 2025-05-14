import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Cnbmodal from "../components/Cnbmodal";
import Deleteboardmodal from "../components/Deleteboardmodal";

const Dashboard = () => {
  const [cnb, setCnb] = useState(false);
  const [dlb, setDlb] = useState(false);
  const [activeBoardId, setActiveBoardId] = useState(null);
  const [activeBoardName, setActiveBoardName] = useState("");
  const [boards, setBoards] = useState([]);
  const [boardName, setBoardName] = useState("");
  const [boardId, setBoardId] = useState(1);

  const handleShowCnb = () => {
    setCnb(true);
  };
  const handleShowDlb = () => {
    setDlb(true);
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
  const handleCloseCnbX = () => {
    setCnb(false);
  };

  const handleCloseDlbX = () => {
    setDlb(false);
  };

  const handleBoard = (e) => {
    setBoardName(e.target.value);
  };

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

  return (
    <div className="bg-[#21212C] min-h-screen relative">
      <Header boards={boards} handleShowDlb={handleShowDlb} />
      <Sidebar
        handleShowCnb={handleShowCnb}
        boards={boards}
        activeBoardId={activeBoardId}
        handleBoardClick={handleBoardClick}
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
      />
    </div>
  );
};

export default Dashboard;
