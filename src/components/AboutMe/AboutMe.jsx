import { useContext } from 'react'
import photo from '../../assets/avatar2.jpg'
import './aboutme.css'
import { DarkModeContext } from '../../context/DarkModeContext'

const styles = {
    title: {
        fontSize: 20
    }
}

export const AboutMe = () => {
    const {darkMode} = useContext(DarkModeContext)

    return (
        <div className='container' id='aboutme'>
            <img width={300} src={photo} alt="avatar2" className='rounded-full'  />

           <div>
             <h2 style={styles.title} className={`font-monserrat ${darkMode ? "text-white" : ""}`}>
                Hi! <span className='text-primary'>Nice to meet you</span>
            </h2>

            <p className={`mt-2 font-monserrat ${darkMode ? "text-white" : "text-secondary-tint"}`}>
                I'm <span className='text-primary'>Melannie Cambiaso,</span> a Mobile Developer with 6+ years of specialized experience in React Native, building high-performance, scalable cross-platform apps for production environments. I've shipped to millions of users at companies like Globant and Perficient, with a focus on clean architecture, test coverage, and measurable performance improvements.
            </p>

            <p className={`mt-2 font-monserrat ${darkMode ? "text-white" : "text-secondary-tint"}`}>
                Lately I've been migrating apps to React Native 0.83, raising unit test coverage to ~82% with Jest and React Testing Library, and exploring the New Architecture and performance profiling with Flipper.
            </p>

           <button className={`font-monserrat border button ${darkMode ? "text-white border-white": ""}`}>
             <a target='_blank' href="https://melannie-cambiaso.github.io/portfolio/CV_Melannie_Cambiaso.pdf" download="CV_Melannie_Cambiaso.pdf" >
              Download CV
            </a>
           </button>
           </div>
        </div>
    )
}