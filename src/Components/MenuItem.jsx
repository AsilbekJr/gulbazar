import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./MenuItem.css"
const MenuItem = ({ items }) => {
  const [handleMouseEnter, setHandleMouseEnter] = useState(false);
  const [hoverValue, setHoverValue] = useState([]);

  const handleHoverValue = (value) => {
    hoverValue.push(value);
  };

  const scrollToTop = () => {
    return window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Box
      sx={{ margin: "0" }}
      onMouseLeave={() => (setHandleMouseEnter(!handleMouseEnter), setHoverValue([]))}
      onMouseEnter={() => setHandleMouseEnter(true)}
    >
      <Link to={items.url} onMouseEnter={() => handleHoverValue(items)} style={{textDecoration:"none"}}>
        <Button
        className="mainItem"
          onClick={() => (setHandleMouseEnter(false), setHoverValue([]), scrollToTop())}
          contained
          sx={{ color: "#000", textTransform: "capitalize", margin: "0", height:"60px", padding:"0 10px" }}
        >
          {items.title}
        </Button>
      </Link>
      {handleMouseEnter && (
        <Box className="submenu">
          {hoverValue.map((value) => (
            <Dropdown scrollToTop={scrollToTop} submenus={value.submenu} items={value} setHandleMouseEnter={setHandleMouseEnter} setHoverValue = {setHoverValue} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default MenuItem;


