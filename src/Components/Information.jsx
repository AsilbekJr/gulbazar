import React from "react";
import { Grid, Box, List,ListItem, ListItemText,Typography } from "@mui/material";
import {CallMade, CallOutlined, ContactSupportOutlined, Email, Telegram} from '@mui/icons-material';
import Title from "./Title";
const Information = () => {
  return (
    <Box sx={{padding:{xs:"3rem 2rem", sm:"3rem 2rem", md:"3rem 4rem", lg:"3rem 5rem"}}}>
      <Grid container spacing={3} sx={{gap:{xs:"2rem", sm:"1rem", md:"0", lg:"0"}}}>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Box sx={{ display: "flex"}}>
            <Box>
             <img src="./img/Icon/support.png" style={{width:"45px"}}/> {/* #90D987 */}
            </Box>
            <Box>
               <Typography sx={{fontSize:".9rem", fontWeight:"600", padding:"0px 16px"}}>YORDAM</Typography>
               <List>
                 <ListItem sx={{fontSize:".8rem"}}>
                    <ListItemText primaryTypographyProps={{fontSize: '13px', fontWeight:"500", color:"#524A4E"}} primary="Bog'lanish kerakmi?"/>
                 </ListItem>
                 <ListItem>
                    <CallOutlined sx={{marginRight:"10px", color:"#524A4E"}}/>
                    <ListItemText primaryTypographyProps={{fontSize: '13px', fontWeight:"500", color:"#524A4E"}} primary="+99899 123 45 67"/>
                 </ListItem>
                 <ListItem sx={{fontSize:".8rem"}}>
                 <Email sx={{marginRight:"10px", color:"#524A4E"}}/>
                    <ListItemText primaryTypographyProps={{fontSize: '13px', fontWeight:"500", color:"#524A4E"}} primary="Email: gulbazar@gmail.com"/>
                 </ListItem>
                 <ListItem sx={{fontSize:".8rem"}}>
                 <Telegram sx={{marginRight:"10px", color:"#524A4E"}}/>
                    <ListItemText primaryTypographyProps={{fontSize: '13px', fontWeight:"500", color:"#524A4E"}} primary="Telegram: @gulbazaruz"/>
                 </ListItem>
               </List>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Box sx={{ display: "flex" }}>
            <Box>
            <img src="./img/Icon/shop.png" style={{width:"45px"}}/>
            </Box>
            <Box sx={{padding:"0 16px"}}>
            <Typography sx={{fontSize:".9rem", fontWeight:"600", padding:"0 16px 16px 0"}}>XAVSIZ TO'LOV</Typography>
                <Typography sx={{fontSize: '13px', fontWeight:"500",color:"#524A4E"}}>Xavfsiz to'lov - bizning tizimlarimiz bank darajasidagi xavfsizlik bilan himoyalangan. Sizning to'lovingiz biz bilan xavfsiz.</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
        <Box sx={{ display: "flex" }}>
            <Box>
            <img src="./img/Icon/delivery-truck.png" style={{width:"45px"}}/>
            </Box>
            <Box sx={{padding:"0 16px"}}>
            <Typography sx={{fontSize:".9rem", fontWeight:"600", padding:"0 16px 16px 0"}}>SIFAT</Typography>
                <Typography sx={{fontSize: '13px', fontWeight:"500",color:"#524A4E"}}>Sizga eng yaxshi sifatli o'simliklarni yetkazib berish uchun 40 dan ortiq mutaxassislar bilan bevosita ishlaymiz.</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
        <Box sx={{ display: "flex" }}>
            <Box>
            <img src="./img/Icon/like.png" style={{width:"45px"}}/>
            </Box>
            <Box sx={{padding:"0 16px"}}>
            <Typography sx={{fontSize:".9rem", fontWeight:"600", padding:"0 16px 16px 0"}}>VADA BERAMIZ</Typography>
                <Typography sx={{fontSize: '13px', fontWeight:"500",color:"#524A4E"}}>Agar sizga maslahat kerak bo'lsa, shunchaki bog'laning - biz sizga kerak ekan, biz sizning shaxsiy zavod gurusi bo'lamiz. Agar biror narsa bo'lsa, etkazib berilgandan keyin 30 kun ichida bizga xabar bering - biz uni tartibga solamiz.</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Information;
