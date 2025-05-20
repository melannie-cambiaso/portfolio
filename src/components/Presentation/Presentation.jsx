import avatar from '../../assets/avatar1.png'
import { globalStyles } from '../../constants/globalStyles'

export const Presentation = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h2 style={globalStyles.title} className="font-monserrat">
                I'm <span className='text-primary'>Melannie</span>,
            </h2>
            <h2 style={globalStyles.title} className="font-monserrat text-center">
                React Native Developer
            </h2>
            <div className="font-monserrat border rounded-xl p-2">
                Hi!
            </div>
            <img src={avatar} alt="avatar" style={{width: 300}} />
        </div>
    )
}