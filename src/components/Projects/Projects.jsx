import { globalStyles } from "../../constants/globalStyles"
import './projects.css'
import nfl from '../../assets/nfl.webp'
import evaluaRes from '../../assets/evaluaRes.webp'
import lessen from '../../assets/lessen.png'
import pelambres from '../../assets/pelambres.jpg'
import apple from '../../assets/apple.svg'
import google from '../../assets/google.png'

export const Projects = () => {

    const handleClick = (page) => {
        window.open(page, '_blank', 'noopener,noreferrer');
    }

    const portfolio = [
        {
            logo: pelambres,
            text: "Contributed to mobile application development for the mining sector by building features with React Native and MobX, improving field operations efficiency",
        },
        {
            logo: evaluaRes,
            text: "First UI design created with Adobe XD for an intuitive user interface, alongside leading the development team using React Native.",
            apple: true,
            appleUrl: "https://apps.apple.com/cl/app/evaluares/id1605067595",
            google: true,
            googleUrl: "https://play.google.com/store/apps/details?id=com.evaluares&hl=es_CL"
        },
        {
            logo: lessen,
            text: "Implemented task management features with React Native to support home maintenance workflows specifically for the real estate sector",
            apple: true,
            appleUrl: "https://apps.apple.com/us/app/lessen-pro/id6550924862",
            google: true,
            googleUrl: "https://play.google.com/store/apps/details?id=com.lessen.mobile.vendorsaas&hl=es_CL"
        },
        {
            logo: nfl,
            text: "Boosted performance by 40% by implementing FlashList and integrating React Query from scratch on a React Native NFL app.",
            apple: true,
            appleUrl: "https://apps.apple.com/us/app/nfl/id389781154?platform=appleTV",
            google: false,
            googleUrl: ""
        }, 
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
                        <div className="w-1/2 bg-secondary rounded-xl detail group relative inline-block">
                            <img src={element.logo} width={300} />
                            <div className="rounded-xl absolute inset-0 bg-black opacity-50 group-hover:block hidden"></div>
                            <div className="font-monserrat text-white group-hover:block hidden text inset-0 rounded-xl p-5">

                                <h2 className="mb-2">{element.text}</h2>

                                <div className="flex gap-4">
                                    {element.apple ? (
                                        <button className="cursor-pointer" onClick={() => handleClick(element.appleUrl)}>
                                            <img width={100} src={apple} alt="" />
                                        </button>
                                    ) : null}

                                    {element.google ? (
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