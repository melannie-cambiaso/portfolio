import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { teal } from "@mui/material/colors";

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        ></IconButton>
        <div>
          <Typography variant="h6" color="inherit" component="div">
            Melannie Cambiaso
          </Typography>
          <div
            style={{
              borderBottom: "5px solid",
              borderBottomColor: teal.A700,
              padding: "0 0 4px",
              width: "30px",
            }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};
