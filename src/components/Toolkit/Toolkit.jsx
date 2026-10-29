import { globalStyles } from "../../constants/globalStyles"
import { useContext } from "react"
import { DarkModeContext } from "../../context/DarkModeContext"



export const Toolkit = () => {
    const {darkMode} = useContext(DarkModeContext)
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
            <div className="mt-4 flex flex-col gap-4 max-w-4xl">
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