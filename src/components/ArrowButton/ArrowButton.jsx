import { useContext, useEffect, useState } from "react"
import { DarkModeContext } from "../../context/DarkModeContext"
import arrow from '../../assets/arrow.png'

export const ArrowButton = () => {
    const {darkMode} = useContext(DarkModeContext)

    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return isVisible && (
        <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg text-xl transition duration-300 z-50"
        aria-label="Ir arriba"
      >
        <img src={arrow} width={50} />
      </button>
    )
}