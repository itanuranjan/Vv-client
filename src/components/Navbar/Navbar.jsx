import React, { useState } from "react";
import "./navbar.css";
import Searchbar from "../Main/Searchbar";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Button,
  Menu,
  MenuList,
  MenuItem,
} from "@mui/material";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Navbar() {
  const [anchorNav, setAnchorNav] = useState(null);

  const openMenu = (event) => {
    setAnchorNav(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorNav(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          color="inherit"
          aria-label="Logo"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <LocalLibraryIcon />
        </IconButton>

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
        >
          VentureVibes
          
        </Typography>

        {/* <Box sx={{display: { xs: "none", md: "flex" }}}>
          <Searchbar/>
        </Box> */}

        

        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Button component={Link} to="/" color="inherit">Home</Button>
          <Button component={Link} to="/about" color="inherit">About</Button>
          <Button component={Link} to="/features" color="inherit">Feature</Button>
          <Button component={Link} to="/login" color="inherit">Login</Button>
        </Box>

        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={openMenu}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            anchorEl={anchorNav}
            open={Boolean(anchorNav)}
            onClose={closeMenu}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuList>
              <MenuItem component={Link} to="/">Home</MenuItem>
              <MenuItem component={Link} to="/features">Feature</MenuItem>
              <MenuItem component={Link} to="/about">About</MenuItem>
              <MenuItem component={Link} to="/login">Login</MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <IconButton
          size="large"
          color="inherit"
          aria-label="Logo"
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <LocalLibraryIcon />
        </IconButton>

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
        >
          VentureVibes
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
