import { useForm } from "@formspree/react";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

export const Contact = () => {
    const [state, handleSubmit] = useForm("mvgaybpp");
    const {darkMode} = useContext(DarkModeContext)

    if (state.succeeded) {
        return (
            <h2 className="font-monse" >
                Thanks for contacting!
            </h2>
        )
    }

    return (
        <form onSubmit={handleSubmit} className={`font-monserrat p-6 ${darkMode ? "bg-secondary" : "bg-white"} rounded-lg shadow-md space-y-4 mt-20`} id="contact">
            <h2 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>Contáctame</h2>

            <div>
                <label htmlFor="name" className={`block text-sm font-medium ${darkMode ? "text-white" : "text-gray-700"}`}>
                    Nombre
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>

            <div>
                <label htmlFor="message" className={`block text-sm font-medium ${darkMode ? "text-white" : "text-gray-700"}`}>
                    Mensaje
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-tint text-white py-2 rounded-md transition "
            >
                Enviar
            </button>
        </form>

    )
}