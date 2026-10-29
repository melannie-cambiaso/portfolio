import { useState } from "react"
import { DarkModeContext } from "./DarkModeContext";

export const DarkModeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )


}