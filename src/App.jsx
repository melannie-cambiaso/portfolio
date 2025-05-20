import { useContext } from 'react'
import './App.css'
import { AboutMe } from './components/AboutMe/AboutMe'
import { Contact } from './components/Contact/Contact'
import { Header } from './components/Header/Header'
import { Presentation } from './components/Presentation/Presentation'
import { Projects } from './components/Projects/Projects'
import { Toolkit } from './components/Toolkit/Toolkit'
import { DarkModeContext } from './context/DarkModeContext'
import { ToggleDarkMode } from './components/ToggleDarkMode/ToggleDarkMode'

function App() {

  const {darkMode} = useContext(DarkModeContext)

  return (
    <div className={`flex flex-col ${darkMode ? "bg-secondary" : "bg-white"} pt-10 pl-10 pr-10`}>
      <ToggleDarkMode />
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
