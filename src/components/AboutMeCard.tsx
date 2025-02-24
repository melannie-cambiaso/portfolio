import { Card } from "@mui/material"
import { teal } from "@mui/material/colors"
import "./aboutMeCard.css"

export const AboutMeCard = ({ children }: { children: any }) => {
    return (
        <Card className="about-me-card">
            {children}
        </Card >
    )
}