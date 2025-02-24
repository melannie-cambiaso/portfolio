import { Box, Card, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";
import { AboutMeCard } from "../components/AboutMeCard";
import SchoolIcon from '@mui/icons-material/School';
import SnippetFolderIcon from '@mui/icons-material/SnippetFolder';

export const AboutMe = () => {
    return (
        <Box
            style={{
                display: "flex",
                textAlign: "center",
                padding: "40px",
                flexDirection: "column",
                gap: 8,

            }}>
            <Typography variant="h3" color={teal.A700}>
                About Me
            </Typography>

            <Box style={{
                flexDirection: 'row',
                display: 'flex',
                justifyContent: 'center',
                gap: 8
            }}>
                <AboutMeCard>
                    <SchoolIcon />
                    <Typography variant="h6">
                        Experience
                    </Typography>

                    <Typography variant="body1">
                        5+ years
                    </Typography>
                </AboutMeCard>

                <AboutMeCard>
                    <SnippetFolderIcon />
                    <Typography variant="h6">
                        Projects
                    </Typography>

                    <Typography variant="body1">
                        7+ Completed Projects
                    </Typography>
                </AboutMeCard>

            </Box>
            <Box style={{
                maxWidth: 600,
                margin: 'auto',
            }}>
                <Typography variant="body1" color={"#6c6c6d"}>
                    Experienced mobile developer specializing in React Native development. Dedicated to crafting high-quality mobile applications with a focus on user experience, performance, and code excellence. Detail-oriented, organized, and committed to delivering outstanding results. Strong team player with excellent problem-solving skills and adaptability to new challenges.
                </Typography>
            </Box>
        </Box >
    )
}