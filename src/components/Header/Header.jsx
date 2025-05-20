import "./header.css"

const styles = {
    container: {
        display: "flex", 
        width: "100%",
        justifyContent: "center"
    },
    content: {
        display: "flex",
        padding: 10,
        borderRadius: 30,
        backgroundColor: "#171717",
        gap: 20
    },
}

export const Header = () => {

    const scrollTo = (page) => {
        document.getElementById(page)?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <button className="primary font-monserrat bg-primary">
                    Home
                </button>

                <button onClick={() => scrollTo("aboutme")} className="secondary font-monserrat">
                    About Me
                </button>

                <button onClick={() => scrollTo("projects")} className="secondary font-monserrat">
                    Projects
                </button>

                <button onClick={() => scrollTo("toolkit")} className="secondary font-monserrat">
                    Toolkit
                </button>

                <button className="secondary font-monserrat">
                    Contact
                </button>
            </div>
        </div>

    )
} 