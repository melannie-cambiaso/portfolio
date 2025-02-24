import { Card } from "@mui/material"
import { teal } from "@mui/material/colors"
import "./aboutMeCard.css"

export const AboutMeCard = ({ children, style = {} }: { children: any, style?: any }) => {
    return (
        <Card style={style} className="about-me-card">
            {children}
        </Card >
    )
}