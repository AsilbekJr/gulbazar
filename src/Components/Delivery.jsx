import React from 'react'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Title from './Title';

const Delivery = () => {
    
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ bgcolor:"#f5efdf", padding:"6rem, 0", height:{xs:"250px",md:"200px"},width:"100%", padding:"20px"}}>
        <Box sx={{width:"100%", height:"100%",justifyContent:"center", display:"flex", alignItems:"center", flexDirection:{xs:"column", sm:"column",md:"column", lg:"row"}, gap:"1.1rem"}}>
        <Box>
            <Box sx={{width:{xs:"140px",md:"160px"}}}>
           <img src='./img/delivery.png' style={{width:"100%", objectFit:"contain"}}/>
            </Box>
        </Box>
        <Box>
            <Title fontSize={matches ? "1.4rem" : "2rem"} titleText={"Bepul yetkazib berish xizmati"}/>
        </Box>
        </Box>
    </Box>
  )
}

export default Delivery