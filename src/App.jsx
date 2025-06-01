import './App.css'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router'
import Login from './pages/Login'
import Register from './pages/Register'
import ResetPassword from './pages/ResetPassword'
import Dashboard from './pages/Dashboard'

function App() {
const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("mode"));

useEffect(() => {
  if (localStorage.getItem("mode") === null) {
    setIsDarkMode("dark");
    localStorage.setItem("mode", "dark");
    document.body.className = "dark";
  } else{
    document.body.className = localStorage.getItem("mode");
  }
},[])

const handleToggle = () => {
  if (localStorage.getItem("mode") === "dark") {
    setIsDarkMode("light");
    localStorage.setItem("mode", "light");
    document.body.className = "light";
  } else {
    setIsDarkMode("dark");
    localStorage.setItem("mode", "dark");
    document.body.className = "dark";
  }
}
const [isLogged, setIsLogged] = useState(() => {
    const email = localStorage.getItem("Email");
    const password = localStorage.getItem("Password");
    return email === "test@kanban.com" && password === "12345678Aa";
});

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" 
          element={isLogged ? <Navigate to="/dashboard" replace /> 
            : <Navigate to="/login" />} />
          <Route path="/dashboard" element={isLogged ? <Dashboard isDarkMode={isDarkMode} handleToggle={handleToggle}/> : <Navigate to="/login" replace />} />
          <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
