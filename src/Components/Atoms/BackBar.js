import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
export default function ButtonAppBar(props) {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Link
            to={props.to}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
