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
  const BestSeller = () => {
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
      {id:1, name:"Kentiya Palmasi", type:"Zallar uchun", price:"300 000", img:"http://cdn.shopify.com/s/files/1/0562/5990/3625/products/90-110cm-kentia-palm-howea-forsteriana-21cm-pot-potted-houseplants-562565_grande.jpg?v=1645358330"},
      {id:2, name:"Lizzie", type:"Xonadon uchun", price:"95 000", img:"https://i0.wp.com/www.plantingman.com/wp-content/uploads/2017/12/Busy-Lizzie-Flowering-plant.jpg?resize=900%2C900&ssl=1"},
      {id:3, name:"Atirgulli buket", type:"Buket", price:"330 000", img:"https://florfashions.com/web/wp-content/uploads/2022/06/arreglos5702021-8.png"},
      {id:4, name:"BUYMAKS gultuvaklari", type:"Xonadon uchun", price:"30 000", img:"https://m.media-amazon.com/images/I/71bBlYXTvqS.jpg"},
      {id:5, name:"Keramika kichik gultuvaklar", type:"Ofis uchun", price:"50 000", img:"https://m.media-amazon.com/images/I/31HukflyPdL._AC_.jpg"},
      {id:6, name:"Yukka", type:"Ochiq joylar uchun", price:"150 000", img:"https://balconygardenweb.b-cdn.net/wp-content/uploads/2017/09/2.-Yucca-21.jpg"},
    ];
    return (
      <Box sx={{ padding: {xs:"4rem 1.5rem", sm:"4rem 2rem", md:"5rem 2rem", lg:"6rem 3rem"}, background: "#fff" }}>
        <Grid container spacing={3}>
          <Grid item md={3}>
            <ThemeProvider theme={theme}>
              <Typography variant="h6" sx={{ marginBottom: "2rem" }}>
                Bizdan xarid qilingan top 20 o'simliklar va buketlar.
              </Typography>
            </ThemeProvider>
            <Typography sx={{ fontWeight: "500" }}>
            Bizning eng mashhur o'simliklarimiz, idishlar va aksessuarlarimizni kashf qiling va xarid qiling.
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
                <SwiperSlide style={{ height: "480px", background: "#fff", border:"1px solid #ECE8DD" }}>
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
  
  export default BestSeller;