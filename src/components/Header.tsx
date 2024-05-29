import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { teal } from "@mui/material/colors";
import { LinkedIn } from "@mui/icons-material";
import { Box } from "@mui/material";

const linkedinUrl = "https://www.linkedin.com/in/melannie-cambiaso/";

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Box style={{ flexGrow: 1 }}>
          <Typography variant="h6" color="inherit">
            Melannie Cambiaso
          </Typography>
          <Box
            style={{
              borderBottom: "5px solid",
              borderBottomColor: teal.A700,
              padding: "0 0 4px",
              width: "30px",
            }}
          />
        </Box>

        <IconButton
          onClick={() => window.open(linkedinUrl, "_blank")}
          color="inherit"
        >
          <LinkedIn />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
