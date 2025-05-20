import { globalStyles } from "../../constants/globalStyles"
import nfl from '../../assets/projects/nfl.webp'
import evaluaRes from '../../assets/projects/evaluaRes.webp'
import lessen from '../../assets/projects/lessen.png'
import pelambres from '../../assets/projects/pelambres.jpg'
import safefleet from '../../assets/projects/safefleet.png'
import namutek from '../../assets/projects/namutek.png'
import boosmap from '../../assets/projects/boosmap.jpg'
import apple from '../../assets/apple.svg'
import google from '../../assets/google.png'
import { useState } from "react"

export const Projects = () => {

    const [hoveredId, setHoveredId] = useState(null)

    const portfolio = [
        {
            logo: pelambres,
            text: "Contributed to mobile application development for the mining sector by building features with React Native and MobX, improving field operations efficiency. Deploy on AppStore and PlayStore for enterprise environment",
            id: 1
        },
        {
            logo: evaluaRes,
            text: "First UI design created with Adobe XD for an intuitive user interface, alongside leading the development team using React Native.",
            appleUrl: "https://apps.apple.com/cl/app/evaluares/id1605067595",
            googleUrl: "https://play.google.com/store/apps/details?id=com.evaluares&hl=es_CL",
            id: 2
        },
        {
            logo: boosmap,
            text: "Handled legacy app maintenance and led the development of a new React Native application, supporting the release process to both iOS and Android platforms",
            appleUrl: "https://apps.apple.com/cl/app/booster/id1577414103",
            googleUrl: "https://play.google.com/store/apps/details?id=com.boosmap.booster2&hl=es_CL",
            id: 3
        },
        {
            logo: lessen,
            text: "Implemented task management features with React Native to support home maintenance workflows specifically for the real estate sector",
            appleUrl: "https://apps.apple.com/us/app/lessen-pro/id6550924862",
            googleUrl: "https://play.google.com/store/apps/details?id=com.lessen.mobile.vendorsaas&hl=es_CL",
            id: 4
        },
        {
            logo: nfl,
            text: "Boosted performance by 40% by implementing FlashList and integrating React Query from scratch on a React Native NFL streamming app for SmartTVs.",
            appleUrl: "https://apps.apple.com/us/app/nfl/id389781154?platform=appleTV",
            googleUrl: "https://play.google.com/store/apps/details?id=com.gotv.nflgamecenter.us.lite&hl=es_CL",
            id: 5
        },
        {
            logo: safefleet,
            text: "Developed a mobile application from scratch using a hexagonal architecture, focused on managing vehicle inspection workflows. The app was built with React Native, React Navigation, Redux, and other technologies.",
            id: 6
        },
        {
            logo: namutek,
            text: "Redesigned the money transfer experience via text message in Costa Rica, integrating enhanced notifications for both successful receipts and failed transfer alerts.",
            appleUrl: "https://apps.apple.com/hn/app/kash/id1476122795",
            googleUrl: "https://play.google.com/store/apps/details?id=com.namutek.kash&hl=es_CL",
            id: 7
        }
    ]

    const handleClick = (page) => {
        window.open(page, '_blank', 'noopener,noreferrer');
    }

    const toggleHovered = (id) => {
        setHoveredId(id)
    }

    return (
        <div className="flex justify-center flex-col items-center" id="projects">
            <h2 className="font-monserrat" style={globalStyles.title}>
                Explore my <span className="text-primary">
                    Portfolio
                </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 flex flex-grow gap-4">
                {
                    portfolio.map((element) => (
                        <div 
                        onMouseEnter={() => toggleHovered(element.id)}
                        onMouseLeave={() => toggleHovered(null)} 
                        className="flex justify-center rounded-xl relative inline-block">
                            <img src={element.logo} width={300} className="project-image" />
                            <div className={`rounded-xl absolute inset-0 bg-black opacity-50 ${hoveredId === element.id ? "" : "hidden"}`}></div>
                            <div className={`font-monserrat text-white ${hoveredId === element.id ? "" : "hidden"} absolute inset-0 rounded-xl p-5`}>

                                <h2 className="mb-2 text-xs md:text-base">{element.text}</h2>

                                <div className="flex gap-4">
                                    {element.appleUrl ? (
                                        <button className="cursor-pointer" onClick={() => handleClick(element.appleUrl)}>
                                            <img width={100} src={apple} alt="" />
                                        </button>
                                    ) : null}

                                    {element.googleUrl ? (
                                        <button className="cursor-pointer" onClick={() => handleClick(element.googleUrl)}>
                                            <img width={100} src={google} alt="" />
                                        </button>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}