import './App.css'
import Theme from './Theme'
import Hero from './pages/Hero'
import Tutorials from './pages/Tutorials'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Theme>
      <div className='App'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Theme>
  )
}

export default App
