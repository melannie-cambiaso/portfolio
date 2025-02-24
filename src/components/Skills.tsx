import { Box, Typography } from "@mui/material"
import { teal } from "@mui/material/colors"

export const Skills = () => {
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
        </Box>
    )
}