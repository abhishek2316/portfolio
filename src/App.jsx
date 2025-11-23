import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Experience from './Components/Experience'
import Header from './Components/Header'
import Home from './Components/Home'
// import UnderConstruction from './Components/UnderConstruction'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

function HomePage() {
  return (
    <>
      <Header />
      <Home />
      {/* <Experience /> */}
      {/* <Contact /> */}
    </>
  )
}

function App() {
  return (
    <div className="bg-white dark:bg-[#0c0f11] min-h-screen text-gray-900 dark:text-gray-100">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/projects" element={<UnderConstruction />} /> */}
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  )
}

export default App