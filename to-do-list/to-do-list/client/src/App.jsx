import './App.css'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/Home/index.jsx'
import { SignUpPage } from './pages/SignUp/index.jsx'
import { LoginPage } from './pages/Login/index.jsx';
import { CreateTaskPage } from './pages/CreateTask/index.jsx';
import { HistoryPage } from './pages/History/index.jsx';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-task" element={<CreateTaskPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </div>
  )
}

export default App