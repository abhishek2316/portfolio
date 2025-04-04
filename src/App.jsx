import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Experience from './Components/Experience'
import Header from './Components/Header'
import Main from './Components/Main'
import UnderConstruction from './Components/UnderConstruction'
import Contact from './Components/Contact'

function HomePage() {
  return (
    <>
      <Header />
      <Main />
      <Experience />
      <Contact />
    </>
  )
}

function App() {
  return (
    <div className='bg-[#0c0f11] min-h-screen'>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<UnderConstruction />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App