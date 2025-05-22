import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router'
import Login from './pages/Login'
import Register from './pages/Register'
import ResetPassword from './pages/ResetPassword'
import Dashboard from './pages/Dashboard'

function App() {
const [isLogged, setIsLogged] = useState(false);

const email = localStorage.getItem("Email");
const password = localStorage.getItem("Password");

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" 
          element={
            email && password ? <Navigate to="/dashboard" replace /> 
            : <Navigate to="/login" />} />
          <Route path="/dashboard" element={isLogged ? <Dashboard /> : <Navigate to="/login" replace />} />
          <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
