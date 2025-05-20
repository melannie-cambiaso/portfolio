import avatar from '../../assets/avatar1.png'
import { globalStyles } from '../../constants/globalStyles'

const styles = {
    container: {
        display: "flex", 
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    button: {
        padding: 5
    },
}

export const Presentation = () => {
    return (
        <div style={styles.container}>
            <h2 style={globalStyles.title} className="font-monserrat">
                I'm <span className='text-primary'>Melannie</span>,
            </h2>
            <h2 style={globalStyles.title} className="font-monserrat">
                React Native Developer
            </h2>
            <div style={styles.button} className="font-monserrat border rounded-xl">
                Hi!
            </div>
            <img src={avatar} alt="avatar" style={{width: 300}} />
        </div>
    )
}