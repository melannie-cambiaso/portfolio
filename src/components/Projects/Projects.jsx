import { globalStyles } from "../../constants/globalStyles"
import './projects.css'
import nfl from '../../assets/projects/nfl.webp'
import evaluaRes from '../../assets/projects/evaluaRes.webp'
import lessen from '../../assets/projects/lessen.png'
import pelambres from '../../assets/projects/pelambres.jpg'
import safefleet from '../../assets/projects/safefleet.png'
import namutek from '../../assets/projects/namutek.png'
import boosmap from '../../assets/projects/boosmap.jpg'
import apple from '../../assets/apple.svg'
import google from '../../assets/google.png'

export const Projects = () => {

    const handleClick = (page) => {
        window.open(page, '_blank', 'noopener,noreferrer');
    }

    const portfolio = [
        {
            logo: pelambres,
            text: "Contributed to mobile application development for the mining sector by building features with React Native and MobX, improving field operations efficiency. Deploy on AppStore and PlayStore for enterprise environment",
        },
        {
            logo: evaluaRes,
            text: "First UI design created with Adobe XD for an intuitive user interface, alongside leading the development team using React Native.",
            appleUrl: "https://apps.apple.com/cl/app/evaluares/id1605067595",
            googleUrl: "https://play.google.com/store/apps/details?id=com.evaluares&hl=es_CL"
        },
        {
            logo: boosmap,
            text: "Handled legacy app maintenance and led the development of a new React Native application, supporting the release process to both iOS and Android platforms",
            appleUrl: "https://apps.apple.com/cl/app/booster/id1577414103",
            googleUrl: "https://play.google.com/store/apps/details?id=com.boosmap.booster2&hl=es_CL"
        },
        {
            logo: lessen,
            text: "Implemented task management features with React Native to support home maintenance workflows specifically for the real estate sector",
            appleUrl: "https://apps.apple.com/us/app/lessen-pro/id6550924862",
            googleUrl: "https://play.google.com/store/apps/details?id=com.lessen.mobile.vendorsaas&hl=es_CL"
        },
        {
            logo: nfl,
            text: "Boosted performance by 40% by implementing FlashList and integrating React Query from scratch on a React Native NFL streamming app for SmartTVs.",
            appleUrl: "https://apps.apple.com/us/app/nfl/id389781154?platform=appleTV",
            googleUrl: "https://play.google.com/store/apps/details?id=com.gotv.nflgamecenter.us.lite&hl=es_CL"
        }, 
        {
            logo: safefleet,
            text: "Developed a mobile application from scratch using a hexagonal architecture, focused on managing vehicle inspection workflows. The app was built with React Native, React Navigation, Redux, and other technologies."
        },
        {
            logo: namutek,
            text: "Redesigned the money transfer experience via text message in Costa Rica, integrating enhanced notifications for both successful receipts and failed transfer alerts.",
            appleUrl: "https://apps.apple.com/hn/app/kash/id1476122795",
            googleUrl: "https://play.google.com/store/apps/details?id=com.namutek.kash&hl=es_CL"
        }
    ]

    return (
        <div className="projects" id="projects">
            <h2 className="font-monserrat" style={globalStyles.title}>
                Explore my <span className="text-primary">
                    Portfolio
                </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 flex flex-grow gap-4 details">
                {
                    portfolio.map((element) => (
                        <div className="rounded-xl detail group relative inline-block">
                            <img src={element.logo} width={300} />
                            <div className="rounded-xl absolute inset-0 bg-black opacity-50 group-hover:block hidden"></div>
                            <div className="font-monserrat text-white group-hover:block hidden text inset-0 rounded-xl p-5">

                                <h2 className="mb-2">{element.text}</h2>

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