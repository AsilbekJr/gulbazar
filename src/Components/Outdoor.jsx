import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material';
import Title from './Title';

const Outdoor = () => {
  return (
    <Box>
        <Grid container spacing={6}>  
            <Grid item md={6} sx={{width:"100%"}}>
                <Box sx={{padding:{xs:"0",md:"30px", lg:"40px"},height:{xs:"300px", md:"480px", lg:"500px", sm:"400px"}}}>
                <img src="https://www.oregonlive.com/resizer/lmlO3DGJ0bkP-zp2IFmZ9C7PKn0=/1280x0/filters:focal(1649x956:1659x946)/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/6OMPXY5Q5FHXXNM6E27YYYEXP4.jpg" alt='decorate' style={{width:"100%", height:"100%", objectFit:"cover"}} />    
                </Box>
            </Grid>
            <Grid item md={6}>
               <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", width:"100%", height:"100%", padding:{xs:"0 20px", lg:"0 2rem"}}}>
              <Title titleText={"Uyingiz tashqarisini turli ranglar bilan bezating."} textAlign={"left"}/>
              <Typography sx={{fontSize:"1rem", marginBottom:"1rem"}}>Sovuq oylarda siz hali ham tashqi makoningizga juda ko'p rang olib kelishingiz mumkin. Evergreen o'simliklar butun yil davomida sizning makoningizni yoritadi yoki bir zumda ko'tarilish uchun qishki gullarni tanlang.</Typography>
               </Box> 
            </Grid>
        </Grid>
        <Grid container spacing={6} sx={{display:"flex", flexDirection:{xs:"column-reverse",md:"row",lg:"row"}}}>
            <Grid item md={6} sx={{padding:"0 2rem"}}>
               <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", width:"100%", height:"100%", padding:{xs:"0 20px", lg:"0 2rem"}}}>
              <Title titleText={"Yaqinlaringizni baxtli kuni bilan tabriklang"} textAlign={"left"}/>
              <Typography sx={{fontSize:"1rem", marginBottom:"1rem"}}>Turli xil bayramlar, tug'ilgan kun va nikoh oqshomi uchun buketlarni tez va sifatli yetkazib beramiz.</Typography>
               </Box> 
            </Grid>
            <Grid item md={6}>
                <Box sx={{padding:{xs:"0",md:"30px", lg:"40px"},height:{xs:"300px", md:"480px", lg:"500px", sm:"400px"}}}>
                <img src="https://flowersnfruits-image.s3.ap-south-1.amazonaws.com/uploads/product-pics/1675408856_ftr(1).png" alt='decorate' style={{width:"100%", height:"100%", objectFit:"cover"}} />    
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Outdoor;