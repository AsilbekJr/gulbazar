import React from 'react'
import { Box, Container, createTheme, Grid, ThemeProvider, Typography } from '@mui/material';

const Why = () => {
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
    const theme2 = createTheme({
        typography: {
          fontFamily: [
              "Poppins",
              "Playfair Display",
            "Lora",
            '"Helvetica Neue"',
            "Arial",
            "serif",
          ].join(","),
        },
      });
  return (
    <Box sx={{padding:"6.25rem 0"}}>
         <Container>
            <ThemeProvider theme={theme}>
            <Typography variant={'h4'} sx={{textAlign:"center", marginBottom:"2rem"}}>Nima uchun GULBAZAR?</Typography>
            </ThemeProvider>
            <ThemeProvider theme={theme2}>
            <Grid container spacing={4}>
                <Grid item md={4}  sx={{display:"flex",padding:"1rem", alignItems:"center", flexDirection:"column"}}>
                    <img style={{width:"230px"}} src="./img/Why/quality.png"/>
                   <Typography  sx={{textAlign:"center", fontSize:".8rem",}}>Eng yaxshi sifat Biz to'g'ridan-to'g'ri eng yuqori baholangan paxtakorlardan olamiz, shuning uchun biz eng yaxshi sifatli o'simliklarni eng yaxshi narxlarda sotishimiz mumkin.</Typography>
                </Grid>
                <Grid item md={4} sx={{display:"flex",padding:"1rem", alignItems:"center", flexDirection:"column"}}>
                    <img style={{width:"230px"}} src="./img/Why/delivery.png"/>
                   <Typography  sx={{textAlign:"center", fontSize:".8rem",}}>Eshigingizga yetkazib berish Biz sizning o'simliklaringizni O'zbekistonning istalgan joyiga eshigingizga olib kelamiz. Agar siz 100% mamnun bo'lmasangiz, 30 kun ichida bizga xabar bering va biz uni tartibga solamiz.</Typography>
                </Grid>
                <Grid item md={4} sx={{display:"flex",padding:"1rem", alignItems:"center", flexDirection:"column"}}>
                    <img style={{width:"230px"}} src="./img/Why/help.png"/>
                   <Typography  sx={{textAlign:"center", fontSize:".8rem",}}>Eng yaxshi sifat Biz to'g'ridan-to'g'ri eng yuqori baholangan paxtakorlardan olamiz, shuning uchun biz eng yaxshi sifatli o'simliklarni eng yaxshi narxlarda sotishimiz mumkin.</Typography>
                </Grid>
            </Grid>
            </ThemeProvider>
         </Container>
    </Box>
  )
}

export default Why