import { useContext } from "react"
import { globalStyles } from "../../constants/globalStyles"
import { DarkModeContext } from "../../context/DarkModeContext"

const experience = [
    {
        role: "Mobile Developer",
        company: "Stefanini",
        period: "Aug 2026 - Present",
        highlights: [
            "Implemented the personal data processing consent flow in a production mobile app to comply with Chile's Personal Data Protection Law (Law 21.719), covering consent capture, UI, and state handling.",
            "Integrated consent-related REST endpoints using Redux Saga, managing async flows, side effects, and error/retry handling.",
            "Worked with a BFF layer that orchestrates multiple backend services, defining the contracts the mobile app consumes with backend engineers."
        ]
    },
    {
        role: "Experienced Consultant",
        company: "Amaris Consulting",
        period: "Mar 2026 - Aug 2026",
        highlights: [
            "Migrated 5 core modules (auth, home, purchase history, notifications, profile) to React Native 0.83 in a team of 3, raising unit test coverage to ~82% with Jest and React Testing Library.",
            "Delivered end-to-end profile editing with email OTP verification, shipped without post-release bugs across the first 2 sprints."
        ]
    },
    {
        role: "Senior Frontend Developer",
        company: "amiPass",
        period: "Jul 2025 - Mar 2026",
        highlights: [
            "Architected a greenfield cross-platform app with Expo and React Native, defining the folder structure, navigation, and TypeScript conventions adopted by the full team.",
            "Established state management patterns and component standards, leading GitHub code reviews.",
            "Coordinated with Product, UX, and Backend across the full feature lifecycle, maintaining sprint commitments across 3 production releases."
        ]
    },
    {
        role: "Mobile Analyst",
        company: "Perficient",
        period: "Sep 2023 - May 2025",
        highlights: [
            "Improved rendering performance by 10% (measured with Flipper) through lazy loading, optimized re-renders, and efficient data fetching.",
            "Implemented an offline-first architecture with local persistence, enabling core flows in low-connectivity environments.",
            "Set up observability with Firebase Analytics, Crashlytics, and Sentry, reducing mean time to detect critical errors."
        ]
    },
    {
        role: "Web UI Developer",
        company: "Globant",
        period: "Dec 2021 - Sep 2023",
        highlights: [
            "Boosted NFL app rendering performance by 20% (measured with Flipper) by migrating from FlatList to FlashList and introducing React Query.",
            "Built an accessible UI component library aligned with the design system, used by a distributed team of 6 developers in Chile and Colombia.",
            "Contributed to the GitHub Actions CI/CD pipeline for automated App Store and Google Play releases."
        ]
    },
    {
        role: "React Native Developer",
        company: "Boosmap",
        period: "Feb 2021 - Oct 2021",
        highlights: [
            "Built a delivery management app from zero to production with React Native, TypeScript, and Redux, including real-time tracking and Firebase push notifications.",
            "Integrated the Google Maps SDK for live driver location, custom markers, and route visualization."
        ]
    },
    {
        role: "React Native Developer",
        company: "Universidad Católica del Norte",
        period: "Dec 2019 - Jan 2021",
        highlights: [
            "Developed internal React Native apps for the Business Intelligence Center (CIN), including a reusable component library that cut feature development time from ~5 days to ~3 days."
        ]
    }
]

export const Experience = () => {
    const { darkMode } = useContext(DarkModeContext)

    return (
        <div className="flex justify-center flex-col items-center mt-20" id="experience">
            <h2 className={`font-monserrat ${darkMode ? "text-white" : ""} mb-6`} style={globalStyles.title}>
                My <span className="text-primary">Experience</span>
            </h2>

            <div className="flex flex-col gap-6 max-w-4xl w-full">
                {
                    experience.map(({ role, company, period, highlights }) => (
                        <div key={`${company}-${period}`} className={`font-monserrat border-l-4 border-primary pl-5 ${darkMode ? "text-white" : "text-secondary-tint"}`}>
                            <h3 className="text-lg">
                                {role} <span className="text-primary">· {company}</span>
                            </h3>
                            <p className="text-sm opacity-70 mb-2">{period}</p>
                            <ul className="list-disc pl-5 flex flex-col gap-1 text-sm">
                                {
                                    highlights.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
