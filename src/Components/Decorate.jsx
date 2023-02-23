import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import Title from './Title';

const Decorate = () => {
  return (
    <Box>
        <Grid container spacing={6}>
            <Grid item md={6} sx={{height:{xs:"300px", md:"100%", lg:"100%", sm:"400px"}, width:"100%"}}>
                <img src="./img/decorate.jpg" alt='decorate' style={{width:"100%", height:"100%", objectFit:"cover"}} />    
            </Grid>
            <Grid item md={6}>
               <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", width:"100%", height:"100%", padding:"0 2rem"}}>
              <Title titleText={"Uyingizni o'simliklar bilan bezang!"} textAlign={"left"}/>
              <Typography sx={{fontSize:"1rem", marginBottom:"1rem"}}>Kulrang oylarni yashil rangga aylantiring va uyingizni o'simliklar bilan jonlantiring. Suri va Uolles kabi mayda o'simliklar qorong'u burchaklarga yorqin rang qo'shishi mumkin, Pele, Rob va Zey esa kofe stolida yoki peshtaxta ustida o'tirishadi.</Typography>
        <Typography sx={{fontSize:"1rem", marginBottom:"1rem"}}>Darhol o'rmonda urish uchun Nikolau, Ariel yoki Robin kabi katta, yaltiroq barglari bo'lgan katta o'simlikni tanlang.</Typography>
        <Typography sx={{fontSize:"1rem", marginBottom:"1rem"}}>Quyidagi ko'rinishni xarid qiling.</Typography>
               </Box> 
            </Grid>
        </Grid>
    </Box>
  )
}

export default Decorate