import { useContext } from 'react'
import avatar from '../../assets/avatar1.png'
import { globalStyles } from '../../constants/globalStyles'
import { DarkModeContext } from '../../context/DarkModeContext'

export const Presentation = () => {
    const {darkMode} = useContext(DarkModeContext)
    return (
        <div className='flex flex-col items-center justify-center mt-20'>
            <h2 style={globalStyles.title} className={`font-monserrat ${darkMode ? "text-white" : ""}`}>
                I'm <span className='text-primary'>Melannie</span>,
            </h2>
            <h2 style={globalStyles.title} className={`font-monserrat text-center ${darkMode ? "text-white" : ""}`}>
                React Native Developer
            </h2>
            <div className={`font-monserrat border rounded-xl p-2 ${darkMode ? "text-white border-white" : ""}`}>
                Hi!
            </div>
            <img src={avatar} alt="avatar" style={{width: 300}} />
        </div>
    )
}