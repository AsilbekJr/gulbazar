import {  Container,Button, createTheme, Grid, Typography, useMediaQuery, useTheme,Box, ThemeProvider } from '@mui/material'
import React from 'react'

const Banner = () => {
    const myTheme = useTheme();
  const matches = useMediaQuery(myTheme.breakpoints.down('sm'))
  const myStyle={
    border:"1px solid #323232",
    "&:hover":{
      background: "#000",
      color:"white"
    },
    background:"#f9f6f0",
    color:"#323232",
    boxShadow: "none",
    padding:"10px 50px",
    fontWeight:"600",
    borderRadius:"0",
    fontSize:"1rem",
    textTransform: "capitalize",
  }
    const theme = createTheme({
        typography: {
          fontFamily: [
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
    <Box sx={{paddingTop:"40px", background:"#f9f6f0", minHeight:"100vh", width:"100%"}} >
    <Grid  container sx={{height:"100%", paddingLeft:{sm:"1rem",md:"3rem"}, display:"flex", flexDirection:{xs:"column-reverse",sm:"row", md:"row"}}}>
      <Grid item  sm={6} sx={{height:{xs:"300px", sm:"600px"},marginTop:{md:"1.5rem", lg:"2rem"}, padding:" 1.5rem 1.7rem", display:"flex", flexDirection:"column", justifyContent:"center"}}>      
    <ThemeProvider theme={theme}>
              <Typography sx={{fontWeight:"600", color:"#323232",fontSize:{xs:"2.2rem", sm:"2.5rem", md:"3rem", lg:"3.5rem"}, marginBottom:"1.5rem", lineHeight:"2.6rem"}}>Oson xarid qiling</Typography>
    </ThemeProvider>
              <Typography sx={{marginBottom:"1.2rem", color:"#323232"}}>
                Gulbazar siz uchun eng yaxshi o'simliklarni topib beradi, ularni eshigingizga etkazib beradi va ularga g'amxo'rlik qilishga yordam beradi.
              </Typography>
              <Box>
                <Button sx={myStyle} style={{width:matches ? "100%" : ""}} variant="contained" >Xaridni boshlash</Button>
              </Box>
      </Grid>
      <Grid item  sm={6} sx={{ height:{xs:"300px", sm:"600px"}}}>
         <img src={ matches ? " https://img.staticmb.com/mbcontent//images/uploads/2022/5/indoor-succulent-plants.jpg" : 'https://media.houseandgarden.co.uk/photos/618944690a583de660124d52/master/pass/1-house-29mar17-Nick-Pope_b.jpg'} style={{width:"100%", height: matches ? "300px" : "100%", objectFit: "cover"}}/>
      </Grid>
    </Grid>
  </Box>
  )
}

export default Banner