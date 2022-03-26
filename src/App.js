import './App.css'
import Theme from './Theme'
import Hero from './components/Hero'
import Details from './components/Details'
import Contact from './components/Contact'

function App() {
  return (
    <Theme>
      <div className='App'>
        <Hero />
        <Details />
        <Contact />
      </div>
    </Theme>
  )
}

export default App
