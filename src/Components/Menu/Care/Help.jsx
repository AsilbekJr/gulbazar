import { Typography, createTheme, ThemeProvider, Grid } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import {careHomePlants } from "../../../data";
import Title from "../../Title";

const Help = () => {
  const theme = createTheme({
    typography: {
      fontFamily: [
        "Montserrat",
        "Lora",
        '"Helvetica Neue"',
        "Playfair Display",
        "Poppins",
        "Arial",
        "serif",
      ].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "#f9f6f0",
          padding: {
            xs: "8rem 1.4rem 4rem 1.4rem",
            sm: "8rem 2ren",
            md: "8rem 0 0 2.5rem",
            lg: "8rem 0 0 2.5rem",
          },
        }}
      >
       <Title titleText={"Sizga qanday yordam bera olamiz?"}/>
       <Box sx={{display:"flex", justifyContent:"center"}}>
      <Typography sx={{textAlign:"center", width:"50%"}}>Biz sizga eng zarur va to'g'ri maslahatlar berishga tayyormiz. Biz bilan bo'g'laning, bizdan konsultatsiyalar oling va o'z o'simliklaringizga g'amxo'rlik qiling.</Typography>     
       </Box>
       <Box sx={{padding:"4rem 0", display:"flex", flexDirection:"column", alignItems:"center"}}>
        <Box sx={{display:"flex", gap:{xs:"1rem", md:"2rem"}, margin:{xs:"1rem  0rem", md:"1rem"}}}>
        <Box sx={{width:{xs:"200px", sm:"270px", md:"350px", lg:"400px"}, maxWidth:"400px",textAlign:"center", padding:"40px 15px 50px 15px",display:"flex", flexDirection:"column",alignItems:"center", backgroundColor:"#fff"}}>
          <Box sx={{width:"50px" }} ><img style={{width:"100%"}}  src="./img/Icon/map.png"/></Box>  
           <Typography sx={{fontWeight:"800",fontSize:{xs:".8rem", sm:".8rem", md:"1rem", lg:"1.1rem"}, textTransform:"uppercase", padding:"1rem 0"}}>Bosh Ofisimiz</Typography>
           <Typography sx={{fontSize:{xs:".8rem", sm:".8rem", md:"1rem", lg:"1.1rem"}}}>Buxoro viloyati, G'ijduvon tumani, Beruniy mahalla, 43-xonadon</Typography>
        </Box>
        <Box sx={{width:{xs:"200px", sm:"270px", md:"350px", lg:"400px"}, maxWidth:"400px",textAlign:"center", padding:"40px 15px 50px 15px",display:"flex", flexDirection:"column",alignItems:"center", backgroundColor:"#fff"}}>
           <Box sx={{width:"50px" }} ><img style={{width:"100%"}} src="./img/Icon/telephone.png" /></Box> 
           <Typography sx={{fontWeight:"800",fontSize:{xs:".8rem", sm:".8rem", md:"1rem", lg:"1.1rem"}, textTransform:"uppercase", padding:"1rem 0"}}>Telefon</Typography>
           <Typography sx={{fontSize:{xs:".8rem", sm:".8rem", md:"1rem", lg:"1.1rem"}}}>+99899 123 45 67</Typography>
        </Box>
        </Box>
        <Box sx={{display:"flex", gap:{xs:"1rem", md:"2rem"}, margin:{xs:"0rem", md:"1rem"}}}>

        <Box sx={{width:{xs:"200px", sm:"270px", md:"350px", lg:"400px"}, maxWidth:"400px",textAlign:"center", padding:"40px 15px 50px 15px",display:"flex", flexDirection:"column",alignItems:"center",backgroundColor:"#fff"}}>
           <Box sx={{width:"50px" }} ><img style={{width:"100%"}} src="./img/Icon/telegram.png" /></Box> 
           <Typography sx={{fontWeight:"800",fontSize:{xs:".8rem", sm:".8rem", md:"1rem", lg:"1.1rem"}, textTransform:"uppercase", padding:"1rem 0"}}>Telegram</Typography>
           <Typography sx={{fontSize:{xs:".8rem", sm:".8rem", md:"1rem", lg:"1.1rem"}}}>@gulbazaruz</Typography>
        </Box>
        <Box sx={{width:{xs:"200px", sm:"270px", md:"350px", lg:"400px"}, maxWidth:"400px",textAlign:"center", padding:"40px 15px 50px 15px", display:"flex", flexDirection:"column",alignItems:"center", backgroundColor:"#fff"}}>
          <Box sx={{width:"50px" }} ><img style={{width:"100%"}} src="./img/Icon/email.png" /></Box>  
            <Typography sx={{fontWeight:"800",fontSize:{xs:".8rem", sm:".8rem", md:"1rem", lg:"1.1rem"}, textTransform:"uppercase", padding:"1rem 0"}}>Elektron pochta</Typography>
           <Typography sx={{fontSize:{xs:".8rem", sm:".8rem", md:"1rem", lg:"1.1rem"}}}>gulbazar@gmail.com</Typography>
        </Box>
        </Box>
       </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Help;
