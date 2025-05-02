import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router'
import Login from './pages/Login'
import Register from './pages/Register'
import ResetPassword from './pages/ResetPassword'
import Dashboard from './pages/Dashboard'

function App() {
const email = localStorage.getItem("Email");
const password = localStorage.getItem("Password");

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" 
          element={
            email && password ? <Navigate to="/dashboard" /> 
            : <Navigate to="/login" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
