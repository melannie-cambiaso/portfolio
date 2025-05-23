import { useContext } from "react"
import { DarkModeContext } from "../../context/DarkModeContext"

export const ToggleDarkMode = () => {
    const { darkMode, setDarkMode } = useContext(DarkModeContext)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div className="mb-2">
        <h2 className={`font-monserrat ${darkMode ? "text-white" : ""}`}>Dark Mode</h2>
        <button
            onClick={toggleDarkMode}
            className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 ${darkMode ? "bg-primary" : "bg-gray-300"
                }`}
        >
            <span
                className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ${darkMode ? "translate-x-6" : "translate-x-1"
                    }`}
            />
        </button>
        </div>
    )
}