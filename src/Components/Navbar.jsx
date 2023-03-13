import React, { useState } from "react";
import {
  AppBar,
  Badge,
  Box,
  Collapse,
  createTheme,
  Drawer,
  IconButton,
  List,
  ListItem,
  ThemeProvider
} from "@mui/material";
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  Close,
  Menu,
  Search,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import "./Navbar.css";
import { menuItems } from "./menuItems";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Logo from "./Logo";

const Navbar = () => {
  const theme = createTheme({
    typography: {
      fontFamily: [
        "Poppins",
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ].join(","),
    },
  });

  const [openCollapse, setOpenCollapse] = useState(false);

  const [myMenuItem, setMyMenuItem] = useState(0);

  function handleOpenSettings(e) {
    setMyMenuItem(e);
    setOpenCollapse(!openCollapse);
  }
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const button = createTheme({
    button: {
      "&.active": {
        background: "black",
      },
    },
  });
  const list = () => (
    <Box role="presentation"> 
    <Box sx={{display:"flex", justifyContent:"space-between"}}>
    <Logo/>
             {openCollapse  ? <ArrowBackIosNew onClick={() => setOpenCollapse(false)}/>  
                             : <Close onClick={toggleDrawer("left",false)}/>}
      </Box>  
      
      <List sx={{paddingTop:"2rem"}}>
        <ListItem disablePadding sx={{ display: "flex", alignItems: "start" }}>
          <ThemeProvider theme={button}>
            <Box sx={{ display: openCollapse ? "none" : "" }}>
              {menuItems.map((menuItem, index) => (
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => handleOpenSettings(index)}
                    sx={{width:"300px",display: "flex", justifyContent:"space-between"}}
                  >
                    <ListItemText primary={menuItem.title} />
                    <IconButton>
                    <ArrowForwardIos fontSize="small" color="#ccc"/>
                    </IconButton>
                  </ListItemButton>
                </ListItem>
              ))}
            </Box>
          </ThemeProvider>
          <Box sx={{ display: openCollapse ? "" : "none" }}>
            {menuItems[myMenuItem].submenu?.map((menu) => (
              <Collapse
                in={openCollapse}
                timeout=".6s"
                unmountOnExit
                orientation="vertical"
              >
                <List component="div" disablePadding sx={{ display: "flex" }}>
                  <ListItemButton sx={{ pl: 4 }} component={Link} to={menu.url} onClick={toggleDrawer("left", false)}>
                    <ListItemText primary={menu.title} />
                  </ListItemButton>
                </List>
              </Collapse>
            ))}
          </Box>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#fff ",
          color: "#f4f4f4",
          height: "80px",
          display: "flex",
          flexDirection: "row",
          padding: { xs: "0 1.5rem", md: "0 3.5rem" },
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 2px 2px -2px rgba(0,0,0,.2)",

          transition: (theme) =>
            theme.transitions.create("all", {
              duration: theme.transitions.duration.shortest,
            }),
        }}
      >
        <ThemeProvider theme={theme}>
          <IconButton
            arIconButtonia-label="open drawer"
            edge="right"
            sx={{ display: { md: "none" }, color: "#000" }}
            onClick={toggleDrawer("left", true)}
          >
            <Menu />
          </IconButton>
          <Logo />
          <Box
            sx={{
              height: "100%",
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            {menuItems.map((menu, index) => {
              return <MenuItem items={menu} key={index} />;
            })}
          </Box>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Search
              sx={{ fontSize: {xs: "25px", sm:"30px"}, color: "#000", cursor: "pointer" }}
            />
            <Badge badgeContent={4} color="success">
              <ShoppingBagOutlined
                sx={{ fontSize: {xs: "25px", sm:"30px"}, color: "#000", cursor: "pointer" }}
              />
            </Badge>
          </Box>
          <div>
            {
              <React.Fragment>
                <Drawer
                  anchor={"left"}
                  open={state["left"]}
                  onClose={toggleDrawer("left", false)}
                  PaperProps={{
                    style: {
                      width: 350,
                      padding: "2rem",
                    },
                  }}
                >
                  {list("left")}
                </Drawer>
              </React.Fragment>
            }
          </div>
        </ThemeProvider>
      </AppBar>
    </div>
  );
};

export default Navbar;
