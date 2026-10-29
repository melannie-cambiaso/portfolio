import { globalStyles } from "../../constants/globalStyles"
import reactnative from '../../assets/logos/reactnative.png'
import redux from '../../assets/logos/redux.jpg'
import jest from '../../assets/logos/jest.png'
import reacttesting from '../../assets/logos/reacttesting.jpg'
import expo from '../../assets/logos/expo.jpg'
import reactnavigation from '../../assets/logos/reactnavigation.webp'
import typescript from '../../assets/logos/typescript.png'
import javascript from '../../assets/logos/javascript.png'
import reactquery from '../../assets/logos/reactquery.png'
import git from '../../assets/logos/git.png'
import github from '../../assets/logos/github.jpg'
import { useContext } from "react"
import { DarkModeContext } from "../../context/DarkModeContext"



export const Toolkit = () => {
    const {darkMode} = useContext(DarkModeContext)
    const logos = [
        reactnative, 
        jest, 
        reactquery, 
        redux, 
        reacttesting, 
        reactnavigation, 
        git, 
        github,
        expo, 
        typescript,
        javascript,
    ]
    const skills = [
        { group: "Core", items: ["React Native", "TypeScript", "JavaScript", "React", "Expo", "Expo Router", "Deep Linking"] },
        { group: "State & Data", items: ["Redux Toolkit", "Redux Saga", "Redux Persist", "React Query", "Zustand", "Context API", "REST APIs", "GraphQL", "BFF (NestJS)"] },
        { group: "Testing & Observability", items: ["Jest", "React Testing Library", "Firebase Analytics", "Crashlytics", "Sentry"] },
        { group: "DevOps", items: ["Git", "GitHub Actions", "Azure DevOps", "Fastlane", "CI/CD", "App Store", "Google Play"] },
        { group: "Methodologies", items: ["Agile", "Scrum", "Kanban"] },
    ]
    return (
        <div className="flex justify-center items-center flex-col mt-20" id="toolkit">
            <h2 className={`font-monserrat ${darkMode ? "text-white" : ""} mb-2`} style={globalStyles.title}>My <span className="text-primary">Toolkit</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10" >
                {
                    logos.map((logo) => (
                        <img key={logo} width={250} src={logo} className={`rounded-xl ${darkMode ? "bg-white" : "bg-red"}`} />
                    ))
                }
            </div>

            <div className="mt-10 flex flex-col gap-4 max-w-4xl">
                {
                    skills.map(({ group, items }) => (
                        <div key={group} className="flex flex-col md:flex-row md:items-center gap-2">
                            <span className="font-monserrat text-primary md:w-56 shrink-0">{group}</span>
                            <div className="flex flex-wrap gap-2">
                                {
                                    items.map((item) => (
                                        <span key={item} className={`font-monserrat text-sm border rounded-full px-3 py-1 ${darkMode ? "text-white border-white" : "text-secondary-tint"}`}>
                                            {item}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}