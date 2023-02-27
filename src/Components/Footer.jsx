import { Box, Container, List, ListItem, ListItemButton,useMediaQuery,useTheme } from "@mui/material";
import React from "react";
import { Grid } from "@mui/material";
import { createTheme, ThemeProvider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./Footer.css"
import { Facebook, Instagram, Telegram } from "@mui/icons-material";

const Footer = () => {

    const theme2 = useTheme();
    const matches = useMediaQuery(theme2.breakpoints.down("sm"))
  const theme = createTheme({
    typography: {
      fontFamily: [
          "Poppins",
        "Lora",
        '"Helvetica Neue"',
        "Playfair Display",
        "Arial",
        "serif",
      ].join(","),
    },
  });
  return (
    <Box sx={{ width: "100%", bgcolor: "#313232",padding:"3rem 0" }}>
      <ThemeProvider theme={theme}>
        <Container>
          <Grid
            container
            spacing={ matches ? 0 : 6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Grid item  xs={12} sm={4} md={4} lg={4} sx={{display: matches ? "block" : "none", marginBottom:"2rem"}}>
                 <Typography sx={{padding:"8px 16px", color:"#fff", textAlign:"center", fontSize:"1rem", fontWeight:"700"}}> Bizga a'zo bo'ling</Typography>                      
                 <Typography sx={{padding:"8px 16px", color:"#fff", textAlign:"center", fontSize:".8rem", fontWeight:"500"}}> Bizning bepul video kursimiz va shahar bog'idan ilhom olish uchun ro'yxatdan o'ting</Typography> 
                 <Box>
                 <form style={{display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center", width:"100%", gap:"1rem"}}>
                    <input className="regInput" type="email" placeholder="Elektron pochta..."/>
                    <button className="regButton" type="submit">Ro'yxatdan o'tish</button>
                 </form>
                 </Box>
                 <Box sx={{display: matches ? "none" : "block"}}>
                 <Box sx={{paddingTop:"2rem", display:"flex", justifyContent:"center", gap:"15px"}}>
                 <Telegram sx={{color:"#d5d5d5", fontSize:"2rem"}}/>
                 <Facebook sx={{color:"#d5d5d5", fontSize:"2rem"}}/>
                 <Instagram sx={{color:"#d5d5d5", fontSize:"2rem"}}/>
                 </Box> 
                <Typography sx={{color:"#fff", fontSize:".8rem", marginTop:"1.8rem", textAlign:"center"}}>© 2023 Gulbazar | Bukhara</Typography>                 
                </Box> 
            </Grid>
            <Grid item  sx={{display:"flex", justifyContent:{xs:"start"}}} xs={12} sm={4} md={4} lg={4}>
              <List>
        
                 <Typography sx={{color:"#fff", padding:"8px 16px", fontSize:"1rem", fontWeight:"700"}}> Ma'lumotlar</Typography>
            
                <ListItemButton component={Link} sx={{ fontWeight: "500", color: "#fff" }}>
                 <Typography  to="/" sx={{fontSize:".8rem", fontWeight:"400"}}>Biz haqimizda</Typography> 
                </ListItemButton>
                <ListItemButton component={Link} to="/" sx={{ fontWeight: "500", color: "#fff" }}>
                 <Typography sx={{fontSize:".8rem", fontWeight:"400"}}>O'simlik Parvarishi</Typography> 
                </ListItemButton>
                <ListItemButton component={Link} to="/" sx={{ fontWeight: "500", color: "#fff" }}>
                 <Typography sx={{fontSize:".8rem", fontWeight:"400"}}>Savollarga javoblar</Typography> 
                </ListItemButton>
                <ListItemButton component={Link} to="/" sx={{ fontWeight: "500", color: "#fff" }}>
                 <Typography sx={{fontSize:".8rem", fontWeight:"400"}}>Bog'lanish</Typography> 
                </ListItemButton>
              </List>
            </Grid>
            <Grid item  xs={12} sm={4} md={4} lg={4} sx={{display: matches ? "none" : "block"}}>
                 <Typography sx={{padding:"8px 16px", color:"#fff", textAlign:"center", fontSize:"1rem", fontWeight:"700"}}> Bizga a'zo bo'ling</Typography>                      
                 <Typography sx={{padding:"8px 16px", color:"#fff", textAlign:"center", fontSize:".8rem", fontWeight:"500"}}> Bizning bepul video kursimiz va shahar bog'idan ilhom olish uchun ro'yxatdan o'ting</Typography> 
                 <Box>
                 <form style={{display:"flex", flexDirection:"column", gap:"1rem"}}>
                    <input className="regInput" type="email" placeholder="Elektron pochta..."/>
                    <button className="regButton" type="submit">Ro'yxatdan o'tish</button>
                 </form>
                 </Box> 
                
                 <Box sx={{paddingTop:"2rem", display:"flex", justifyContent:"center", gap:"15px"}}>
                 <Telegram sx={{color:"#d5d5d5", fontSize:"2rem"}}/>
                 <Facebook sx={{color:"#d5d5d5", fontSize:"2rem"}}/>
                 <Instagram sx={{color:"#d5d5d5", fontSize:"2rem"}}/>
                 </Box> 
                <Typography sx={{color:"#fff", fontSize:".8rem", marginTop:"1.8rem", textAlign:"center"}}>© 2023 Gulbazar | Bukhara</Typography>                 
            </Grid>
            <Grid item  sx={{display:"flex", justifyContent:{xs:"start"}}} xs={12} sm={4} md={4} lg={4}>
              <List>
                 <Typography sx={{color:"#fff", padding:"8px 16px", fontSize:"1rem", fontWeight:"700"}}> Shartlar</Typography>
                <ListItemButton component={Link} sx={{ fontWeight: "500", color: "#fff" }}>
                 <Typography  to="/" sx={{fontSize:".8rem", fontWeight:"400"}}>Xizmat ko'rsatish shartlari</Typography> 
                </ListItemButton>
                <ListItemButton component={Link} to="/" sx={{ fontWeight: "500", color: "#fff" }}>
                 <Typography sx={{fontSize:".8rem", fontWeight:"400"}}>Maxfiylik siyosati</Typography> 
                </ListItemButton>
                <ListItemButton component={Link} to="/" sx={{ fontWeight: "500", color: "#fff" }}>
                 <Typography sx={{fontSize:".8rem", fontWeight:"400"}}>Savollarga javoblar</Typography> 
                </ListItemButton>
                <ListItemButton component={Link} to="/" sx={{ fontWeight: "500", color: "#fff" }}>
                 <Typography sx={{fontSize:".8rem", fontWeight:"400"}}>Yetkazish xizmatlari</Typography> 
                </ListItemButton>
              </List>
            </Grid>
              <Box sx={{display: matches ? "block" : "none"}}>
                 <Box sx={{paddingTop:"2rem", display:"flex", justifyContent:"center", gap:"15px"}}>
                 <Telegram sx={{color:"#d5d5d5", fontSize:"2rem"}}/>
                 <Facebook sx={{color:"#d5d5d5", fontSize:"2rem"}}/>
                 <Instagram sx={{color:"#d5d5d5", fontSize:"2rem"}}/>
                 </Box> 
                <Typography sx={{color:"#fff", fontSize:".8rem", marginTop:"1.8rem", textAlign:"center"}}>© 2023 Gulbazar | Bukhara</Typography>                 
                </Box> 
          </Grid>
        </Container>
      </ThemeProvider>
    </Box>
  );
};

export default Footer;
