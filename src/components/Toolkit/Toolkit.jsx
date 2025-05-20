import { globalStyles } from "../../constants/globalStyles"
import reactnative from '../../assets/logos/reactnative.png'
import redux from '../../assets/logos/redux.jpg'
import jest from '../../assets/logos/jest.png'
import reacttesting from '../../assets/logos/reacttesting.jpg'
import expo from '../../assets/logos/expo.png'
import reactnavigation from '../../assets/logos/reactnavigation.webp'
import typescript from '../../assets/logos/typescript.png'
import javascript from '../../assets/logos/javascript.png'
import reactquery from '../../assets/logos/reactquery.png'
import git from '../../assets/logos/git.png'
import github from '../../assets/logos/github.jpg'
import swift from '../../assets/logos/swift.png'
import swiftui from '../../assets/logos/swiftui.webp'
import { useContext } from "react"
import { DarkModeContext } from "../../context/DarkModeContext"



export const Toolkit = () => {
    const {darkMode} = useContext(DarkModeContext)
    const logos = [
        reactnative, 
        redux, 
        jest, 
        reacttesting, 
        expo, 
        reactnavigation, 
        typescript,
        javascript,
        reactquery, 
        git, 
        github,
        swift,
        swiftui
    ]
    return (
        <div className="flex justify-center items-center flex-col mt-20" id="toolkit">
            <h2 className={`font-monserrat ${darkMode ? "text-white" : ""} mb-2`} style={globalStyles.title}>My <span className="text-primary">Toolkit</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10" >
                {
                    logos.map((logo) => (
                        <img width={250} src={logo} className={`rounded-xl ${darkMode ? "bg-white" : ""}`} />
                    ))
                }
            </div>
        </div>
    )
}