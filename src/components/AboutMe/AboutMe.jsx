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
                I'm <span className='text-primary'>Melannie Cambiaso,</span> I'm an experienced mobile developer specializing in React Native development. Dedicated to crafting high-quality mobile applications with a focus on user experience, performance, and code excellence. Detail-oriented, organized, and committed to delivering outstanding results. Strong team player with excellent problem-solving skills and adaptability to new challenges.
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