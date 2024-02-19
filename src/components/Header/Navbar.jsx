import React, { useState, MouseEvent } from "react";
import "./Navbar.css";
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

const pages=['Home', 'Features', 'About', 'Login'];

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

        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Feature</Button>
          <Button color="inherit">Login</Button>
        </Box>
        {/* {pages.map((page)=>(
          <Button color="inherit"> {page}</Button>
        ))} */}

    

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
              <MenuItem>Home</MenuItem>
              <MenuItem>Feature</MenuItem>
              <MenuItem>About</MenuItem>
              <MenuItem>Login</MenuItem>
            </MenuList>
          {/* {pages.map((page)=>(
          <MenuItem>{page}</MenuItem>
        ))} */}
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
