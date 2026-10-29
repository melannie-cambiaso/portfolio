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
                Mobile Developer
            </h2>
            <p className={`font-monserrat text-center mb-4 ${darkMode ? "text-white" : "text-secondary-tint"}`}>
                React Native · 6+ years shipping production apps to millions of users
            </p>
            <div className={`font-monserrat border rounded-xl p-2 ${darkMode ? "text-white border-white" : ""}`}>
                Santiago, Chile · Open to new opportunities
            </div>
            <img src={avatar} alt="avatar" style={{width: 300}} />
        </div>
    )
}