export const Header = () => {


    const scrollTo = (page) => {
        document.getElementById(page)?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className="flex justify-center">
            <div className="flex bg-midnight rounded-full gap-4 p-2">
                <button
                className="font-monserrat bg-primary text-white rounded-3xl md:rounded-full p-1">
                    Home
                </button>

                <button 
                    onClick={() => scrollTo("aboutme")} 
                    className="font-monserrat hover:bg-secondary text-white rounded-3xl md:rounded-full p-1">
                    About Me
                </button>

                <button 
                    onClick={() => scrollTo("projects")} 
                    className="font-monserrat hover:bg-secondary text-white rounded-3xl md:rounded-full p-1">
                    Projects
                </button>

                <button 
                    onClick={() => scrollTo("toolkit")} 
                    className="font-monserrat hover:bg-secondary text-white rounded-3xl md:rounded-full p-1">
                    Toolkit
                </button>

                <button 
                    onClick={() => scrollTo("contact")} 
                    className="font-monserrat hover:bg-secondary text-white rounded-3xl md:rounded-full p-1">
                    Contact
                </button>
            </div>
        </div>

    )
} 