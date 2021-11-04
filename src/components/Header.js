import React from "react";
import Paper from "@mui/material/Paper";

function Header() {
  return (
    <Paper style={{ padding: "5px", display: "flex" }} square elevation={3}>
      <img
        alt="logo"
        src="https://image.pngaaa.com/400/1342400-middle.png"
        style={{ width: "40px", marginLeft: "5px", marginRight: "10px" }}
      ></img>
      <h1 style={{ margin: "0" }}>Smart notes</h1>
    </Paper>
  );
}

export default Header;
