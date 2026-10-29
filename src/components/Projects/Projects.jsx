import { globalStyles } from "../../constants/globalStyles"
import nfl from '../../assets/projects/nfl.webp'
import evaluaRes from '../../assets/projects/evaluaRes.webp'
import lessen from '../../assets/projects/lessen.png'
import pelambres from '../../assets/projects/pelambres.jpg'
import safefleet from '../../assets/projects/safefleet.png'
import aramco from '../../assets/projects/aramco.jpg'
import namutek from '../../assets/projects/namutek.png'
import boosmap from '../../assets/projects/boosmap.jpg'
import apple from '../../assets/apple.svg'
import google from '../../assets/google.png'
import { useContext } from "react"
import { DarkModeContext } from "../../context/DarkModeContext"

export const Projects = () => {

    const {darkMode} = useContext(DarkModeContext)

    const portfolio = [
        {
            logo: aramco,
            text: "Migrated 5 core modules (auth, home, purchase history, notifications, profile) of the Aramco Estaciones fuel-payment and loyalty app to React Native 0.83, raising unit test coverage to ~82% with Jest and React Testing Library. Also delivered the end-to-end profile editing feature, including email OTP verification.",
            appleUrl: "https://apps.apple.com/cl/app/aramco-estaciones/id6748840023",
            googleUrl: "https://play.google.com/store/apps/details?id=com.esmax.app",
            id: 8,
            title: "Aramco Estaciones",
            stack: "React Native 0.83 · Jest · RTL"
        },
        {
            logo: pelambres,
            text: "Contributed to mobile application development for the mining sector by building features with React Native and MobX, improving field operations efficiency. Deploy on AppStore and PlayStore for enterprise environment",
            id: 1,
            title: "Pelambres",
            stack: "React Native · MobX"
        },
        {
            logo: evaluaRes,
            text: "First UI design created with Adobe XD for an intuitive user interface, alongside leading the development team using React Native.",
            appleUrl: "https://apps.apple.com/cl/app/evaluares/id1605067595",
            googleUrl: "https://play.google.com/store/apps/details?id=com.evaluares&hl=es_CL",
            id: 2,
            title: "EvaluaRes",
            stack: "React Native · Adobe XD"
        },
        {
            logo: boosmap,
            text: "Built a delivery management app from zero to production on the App Store and Google Play, covering the order lifecycle, real-time driver tracking with Google Maps, and push notifications via Firebase",
            appleUrl: "https://apps.apple.com/cl/app/booster/id1577414103",
            googleUrl: "https://play.google.com/store/apps/details?id=com.boosmap.booster2&hl=es_CL",
            id: 3,
            title: "Booster (Boosmap)",
            stack: "React Native · TypeScript · Redux · Firebase"
        },
        {
            logo: lessen,
            text: "Implemented task management features with React Native to support home maintenance workflows specifically for the real estate sector",
            appleUrl: "https://apps.apple.com/us/app/lessen-pro/id6550924862",
            googleUrl: "https://play.google.com/store/apps/details?id=com.lessen.mobile.vendorsaas&hl=es_CL",
            id: 4,
            title: "Lessen Pro",
            stack: "React Native"
        },
        {
            logo: nfl,
            text: "Boosted rendering performance by 20% (measured with Flipper) by migrating from FlatList to FlashList and introducing React Query for data caching and background refetching on the NFL streaming app. Also built an accessible UI component library with a distributed team in Chile and Colombia.",
            appleUrl: "https://apps.apple.com/us/app/nfl/id389781154?platform=appleTV",
            googleUrl: "https://play.google.com/store/apps/details?id=com.gotv.nflgamecenter.us.lite&hl=es_CL",
            id: 5,
            title: "NFL",
            stack: "React Native · FlashList · React Query"
        },
        {
            logo: safefleet,
            text: "Developed a mobile application from scratch using a hexagonal architecture, focused on managing vehicle inspection workflows. The app was built with React Native, React Navigation, Redux, and other technologies.",
            id: 6,
            title: "SafeFleet",
            stack: "React Native · Redux · Hexagonal architecture"
        },
        {
            logo: namutek,
            text: "Redesigned the money transfer experience via text message in Costa Rica, integrating enhanced notifications for both successful receipts and failed transfer alerts.",
            appleUrl: "https://apps.apple.com/hn/app/kash/id1476122795",
            googleUrl: "https://play.google.com/store/apps/details?id=com.namutek.kash&hl=es_CL",
            id: 7,
            title: "Kash (Namutek)",
            stack: "Mobile · Notifications"
        }
    ]

    const handleClick = (page) => {
        window.open(page, '_blank', 'noopener,noreferrer');
    }

    return (
        <div className="flex justify-center flex-col items-center mt-20 w-full" id="projects">
            <h2 className={`font-monserrat ${darkMode ? "text-white" : ""} mb-6`} style={globalStyles.title}>
                Explore my <span className="text-primary">
                    Portfolio
                </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
                {
                    portfolio.map((element) => (
                        <div
                            key={element.id}
                            className={`font-monserrat flex flex-col gap-4 rounded-xl border p-5 min-w-0 ${darkMode ? "border-white/30 text-white" : "border-gray-200 text-secondary-tint shadow-sm"}`}>
                            <div className="flex items-center gap-4">
                                <img src={element.logo} alt={element.title} className="w-16 h-16 rounded-xl object-cover shrink-0" />
                                <div className="min-w-0">
                                    <h3 className="text-lg break-words">{element.title}</h3>
                                    <p className="text-xs text-primary break-words">{element.stack}</p>
                                </div>
                            </div>

                            <p className="text-sm break-words grow">{element.text}</p>

                            {(element.appleUrl || element.googleUrl) ? (
                                <div className="flex flex-wrap gap-4">
                                    {element.appleUrl ? (
                                        <button onClick={() => handleClick(element.appleUrl)}>
                                            <img width={100} src={apple} alt="Download on the App Store" />
                                        </button>
                                    ) : null}

                                    {element.googleUrl ? (
                                        <button onClick={() => handleClick(element.googleUrl)}>
                                            <img width={100} src={google} alt="Get it on Google Play" />
                                        </button>
                                    ) : null}
                                </div>
                            ) : null}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
