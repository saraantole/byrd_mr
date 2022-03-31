import Theme from './Theme'
import Home from './pages/Home/Home.page'
import Tutorials from './pages/Tutorials/Tutorials.page'
import Contact from './pages/Contact/Contact.page'
import Navbar from './components/Navbar/Navbar.component'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Theme>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </Theme>
  )
}

export default App
