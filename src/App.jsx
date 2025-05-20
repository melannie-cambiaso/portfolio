import './App.css'
import { AboutMe } from './components/AboutMe/AboutMe'
import { Header } from './components/Header/Header'
import { Presentation } from './components/Presentation/Presentation'
import { Projects } from './components/Projects/Projects'
import { Toolkit } from './components/Toolkit/Toolkit'


function App() {

  return (
    <div style={{ backgroundColor: "white", display: "flex", padding: 20, flexDirection: "column", gap: 20 }}>

      <Header />
      <Presentation />
      <AboutMe />
      <Projects />
      <Toolkit />

    </div>
  )
}

export default App
