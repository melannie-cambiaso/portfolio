import { Box, Button, Typography } from "@mui/material";
import { Header } from "../components/Header";
import photo from "../assets/photo.jpg";
import { AboutMe } from "./AboutMe";

export const Main = () => {
  return (
    <>
      <Header />

      <Box
        style={{
          display: "flex",
          textAlign: "center",
          padding: "40px",
        }}
      >
        <Box
          id="card-container"
          style={{
            backgroundColor: "#000",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
            display: "flex",
          }}
        >
          <Box>
            <Typography color={"#fff"} variant="h3">
              👋Hi! I'm Melannie.
            </Typography>
            <Typography variant="h4" color={"#6c6c6d"}>
              React Native Developer from Santiago, Chile. I'm currently working
              at Perficient as Mobile Analyst
            </Typography>

            <Button href="docs/CV_Melannie_Cambiaso.pdf" download="CV_Melannie_Cambiaso.pdf" variant="outlined" color="secondary">
              Download CV
            </Button>
          </Box>


          <Box>
            <img className="photo" width={"50%"} src={photo} alt="" />
          </Box>
        </Box>
      </Box>
      <AboutMe />

    </>
  );
};
