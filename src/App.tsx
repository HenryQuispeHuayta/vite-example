import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { About } from './pages/About'
import { Home } from './pages/Home'
import Anime from './pages/Anime'
import Todo from './pages/Todo'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/anime" element={<Anime />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App