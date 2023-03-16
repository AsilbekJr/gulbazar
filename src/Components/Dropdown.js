import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./Dropdown.css"
const Dropdown = ({ scrollToTop,submenus, items,setHandleMouseEnter,setHoverValue }) => {
  return (
    <>
    <Box
      sx={{
        position: "absolute",
        left: "0",
        top: "70px",
        width: "100vw",
        background: "#fff",
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        
      }}



    >
      <Grid  container  sx={{display:"flex",height:"100%",}}>
        <Grid item md={4} sx={{paddingTop:"4rem"}}>           
               <Typography variant="h4" sx={{color:"#000", textAlign:"center"}}>{items.title}</Typography>       
        </Grid>
        <Grid item md={4} sx={{paddingTop:"4rem"}}>
          <ul>
            {submenus.map((submenu, index) => (
              <li key={index} style={{marginBottom:"1rem",listStyle:"none"}}>
                <Link style={{textDecoration:"none"}} to={submenu.url}> 
                <Button onClick={() => (setHandleMouseEnter(false),setHoverValue([]),scrollToTop())} contained sx={{color:"#000", textTransform:"capitalize"}}>{submenu.title}</Button>
                </Link>
              </li>
            ))}
          </ul>
        </Grid>
        <Grid item md={4} sx={{ height:"100%"}}>
          <Box sx={{width:"100%", height:"100%",paddingTop:"1.3rem"}}>
          <img src={items.img} style={{width:"100%", height:"100%", objectFit:"cover", backgroundPosition:"bottom"}}/>
          </Box>
        </Grid>
      </Grid>
    </Box>
    <Box>
      <Box sx={{position: "absolute",zIndex:"-1",
        left: "0",top:"70px",width:"100%", height:"100vh", background:"linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))"}} onMouseEnter={() => setHandleMouseEnter(false)}/>
    </Box>
  </>
  );
};

export default Dropdown;
