import {
  Grid,
  Typography,
  Box,
  ThemeProvider,
  createTheme,
  Button,
} from "@mui/material";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";

import "./styles.css";

// import required modules
import { Navigation, Pagination } from "swiper";
const Looks = () => {
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
  let arr = [
    {id:1, name:"Rob", type:"Xonadon uchun", price:"90 000", img:"https://res.cloudinary.com/patch-gardens/image/upload/c_fill,f_auto,h_840,q_auto:good,w_840/v1526658099/products/rubber-plant-f432b4.jpg"},
    {id:2, name:"Uy Palmasi", type:"Zallar uchun", price:"110 000", img:"https://res.cloudinary.com/patch-gardens/image/upload/c_fill,f_auto,h_840,q_auto:good,w_840/v1644934203/imeik3aflpe0b3o0rtgr.jpg"},
    {id:1, name:"Pul daraxti", type:"Ofis uchun", price:"88 000", img:"https://b3n8a3n8.rocketcdn.me/wp-content/uploads/2022/12/pachira-aquatica-money-tree-01-1140x1710.jpg.webp"},
    {id:1, name:"BUYMAKS gultuvaklari", type:"Xonadon uchun", price:"30 000", img:"https://m.media-amazon.com/images/I/71bBlYXTvqS.jpg"},
    {id:1, name:"Keramika kichik gultuvaklar", type:"Ofis uchun", price:"50 000", img:"https://m.media-amazon.com/images/I/31HukflyPdL._AC_.jpg"},
    {id:1, name:"Yukka", type:"Ochiq joylar uchun", price:"150 000", img:"https://balconygardenweb.b-cdn.net/wp-content/uploads/2017/09/2.-Yucca-21.jpg"},
  ];
  return (
    <Box sx={{ padding: "6rem 3rem", background: "#fff" }}>
      <Grid container spacing={3}>
        <Grid item md={3}>
          <ThemeProvider theme={theme}>
            <Typography variant="h6" sx={{ marginBottom: "2rem" }}>
              O'zingizga xoxlagan ko'rinishni tanlang.
            </Typography>
          </ThemeProvider>
          <Typography sx={{ fontWeight: "500" }}>
            Biz sizning uyingizni o'simliklar va idishlar bilan jonlantirishni
            osonlashtirdik.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={9}>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            breakpoints={{
              200: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              550: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              900: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {arr.map((item) => (
              <SwiperSlide style={{ height: "450px", background: "#fff", border:"1px solid #ECE8DD" }}>
                <Box sx={{ width: "100%", height: "100%" }}>
                  <Box sx={{ width: "100%", height: "60%" }}>
                    <img
                      src={item.img}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      height: "40%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box sx={{padding:"20px"}}>
                      <Typography sx={{fontSize:"1.1rem", fontWeight:"600", textAlign:"left"}}>{item.name}</Typography>
                      <Typography sx={{fontSize:".9rem",color:"#3D3C42", fontWeight:"500", textAlign:"left"}}>{item.type}</Typography>
                    </Box>
                <Box sx={{marginTop:"auto", display:"flex", flexDirection:"column"}}>
                <Typography sx={{marginBottom:"1rem",fontWeight:"500", textAlign:"left", paddingLeft:"20px"}}>{item.price} so'm</Typography>
                  <Button variant={"outlined"} sx={{color:"#3D3C42",borderRadius:"0",borderColor:"#3D3C42","&:hover":{borderColor:"#000", background:"#3D3C42", color:"#fff"}}}>Add to cart</Button>
                  </Box>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Looks;
