import { Card, Typography } from "@mui/material";
import { Header } from "../components/Header";
import photo from "../assets/photo.jpg";

export const Main = () => {
  return (
    <>
      <Header />

      <div
        style={{
          display: "flex",
          textAlign: "center",
          padding: "40px",
        }}
      >
        <div
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
          <div>
            <Typography color={"#fff"} variant="h3">
              👋Hi! I'm Melannie.
            </Typography>
            <Typography variant="h4" color={"#6c6c6d"}>
              Web and Mobile Developer from Santiago, Chile. I'm currently
              working at Globant as Web UI Developer
            </Typography>
          </div>

          <div>
            <img className="photo" width={"50%"} src={photo} />
          </div>
        </div>
      </div>
    </>
  );
};
