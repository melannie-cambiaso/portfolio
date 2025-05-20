import './App.css'
import { AboutMe } from './components/AboutMe/AboutMe'
import { Header } from './components/Header/Header'
import { Presentation } from './components/Presentation/Presentation'
import { Projects } from './components/Projects/Projects'


function App() {

  return (
    <div style={{ backgroundColor: "white", display: "flex", padding: 20, flexDirection: "column", gap: 20 }}>

      <Header />
      <Presentation />
      <AboutMe />
      <Projects />

    </div>
  )
}

export default App
