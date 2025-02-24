import { Box, Typography } from "@mui/material"
import { teal } from "@mui/material/colors"
import { AboutMeCard } from "./AboutMeCard"
import VerifiedIcon from '@mui/icons-material/Verified';

export const Skills = () => {

    const skills = [
        'React Native',
        'Firebase',
        'Expo',
        'React Navigation',
        'TypeScript',
        'JavaScript (ES6+)',
        'React Query',
        'Redux',
        'Git & GitHub',
        'Jest & React Testing Library',
        'Agile & Scrum',
    ];

    return (
        <Box style={{
            display: "flex",
            textAlign: "center",
            padding: "40px",
            flexDirection: "column",
            gap: 8,

        }}>
            <Typography variant="h3" color={teal.A700}>
                Skills
            </Typography>

            <AboutMeCard style={{
                maxWidth: 600,
                margin: 'auto'
            }}>
                {
                    skills.map((skill) => {
                        return (
                            <Box key={skill} style={{ flexDirection: 'row', display: 'flex', gap: 8 }}>
                                <VerifiedIcon />
                                <Typography variant="body1" key={skill}>
                                    {skill}
                                </Typography>
                            </Box>
                        )
                    })
                }
            </AboutMeCard>
        </Box>
    )
}