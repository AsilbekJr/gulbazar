import React, { useContext, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Grid, Typography, Button } from "@mui/material";
import { plants } from "../data";
import Title from "./Title";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { MyFormControl, MyInputItem, MySelector } from "./AllPlants";
// import { useDispatch, useSelector } from "react-redux";
// import { SelectorAllSortedProduct } from "../../redux/sortedProductSlice";
// import { MyContext } from "../../Context/Context";
// import { addToCart } from "../../redux/cartSlice";

const Smartphones = () => {
  let allPlants = plants;
  const [productPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);

  //Selection function
  const [age, setAge] = React.useState("");

  const handleSelectChange = (event) => {
    setAge(event.target.value);
  };

  /* Get current product */

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;

  // //   const sortedProducts = [];
  //   allPlants.forEach(product => {
  //     if(product.type === "Smartfonlar" ){
  //       sortedProducts.push(product)
  //     }
  //   })

  const currentPlant = allPlants.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalProduct = allPlants.length;
  const pageNumber = [];

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
    pageNumber.push(i);
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  // const dispatch = useDispatch()

  return (
    <Box sx={{ padding: "8rem 1rem" }}>
      <Title titleText={"Barcha o'simliklar"} />
      <Box sx={{display: "flex", justifyContent: "flex-end", padding:{xs:"2rem 0", lg:"3rem"}}}>
        <Box sx={{ width:{xs:250, sm:250, md:250, lg:280 }}}>
          <MyFormControl fullWidth>
            <InputLabel sx={{fontSize:{xs:"0.9rem", lg:"1rem"}}} id="demo-simple-select-label">Saralash</InputLabel>
            <Select
            sx={{fontSize:{xs:".8rem", sm:"1rem", md:"1rem", lg:"1rem" }}}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Saralash"
              onChange={handleSelectChange}
            >
              <MyInputItem value={10}>Tavsiya qilamiz</MyInputItem>
              <MyInputItem value={20}>Ko'p sotiladiganlar</MyInputItem>
              <MyInputItem value={30}>Narx (Yuqoridan quyiga qarab)</MyInputItem>
              <MyInputItem value={40}>Narx (Quyidan yuqoriga qarab)</MyInputItem>
              <MyInputItem value={50}>Yangi maxsulotlar</MyInputItem>
            </Select>
          </MyFormControl>
        </Box>
      </Box>
      <Grid container spacing={4}>
        {currentPlant.map((plant) => (
          <Grid item xs={6} sm={6} md={4} lg={3}>
            <Box
              sx={{
                height: "500px",
                background: "#fff",
                border: "1px solid #ECE8DD",
              }}
            >
              <Box sx={{ width: "100%", height: "100%" }}>
                <Box sx={{ width: "100%", height: "60%" }}>
                  <img
                    src={plant.images[0].img}
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
                  <Box sx={{ padding: "20px" }}>
                    <Typography
                      sx={{
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        textAlign: "left",
                      }}
                    >
                      {plant.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: ".9rem",
                        color: "#3D3C42",
                        fontWeight: "500",
                        textAlign: "left",
                      }}
                    >
                      {plant.type}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      marginTop: "auto",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      sx={{
                        marginBottom: "1rem",
                        fontWeight: "500",
                        textAlign: "left",
                        paddingLeft: "20px",
                      }}
                    >
                      {plant.price} so'm
                    </Typography>
                    <Button
                      variant={"outlined"}
                      sx={{
                        color: "#3D3C42",
                        borderRadius: "0",
                        borderColor: "#3D3C42",
                        "&:hover": {
                          borderColor: "#000",
                          background: "#3D3C42",
                          color: "#fff",
                        },
                      }}
                    >
                      Add to cart
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ margin: "2rem", display: "flex", justifyContent: "center" }}>
        {allPlants.length > 12 && (
          <Pagination
            count={pageNumber.length}
            page={currentPage}
            onChange={handleChange}
            onClick={scrollToTop}
          />
        )}
      </Box>
    </Box>
  );
};

export default Smartphones;
