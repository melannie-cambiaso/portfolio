import './App.css'
import { AboutMe } from './components/AboutMe/AboutMe'
import { Contact } from './components/Contact/Contact'
import { Header } from './components/Header/Header'
import { Presentation } from './components/Presentation/Presentation'
import { Projects } from './components/Projects/Projects'
import { Toolkit } from './components/Toolkit/Toolkit'

// style={{ backgroundColor: "white", display: "flex", padding: 20, flexDirection: "column", gap: 20 }}

function App() {

  return (
    <div className='flex flex-col bg-white p-20 gap-20'>

      <Header />
      <Presentation />
      <AboutMe />
      <Projects />
      <Toolkit />
      <Contact />

    </div>
  )
}

export default App
