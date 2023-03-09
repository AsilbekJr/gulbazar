import React, { useContext, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Grid, Typography, Button } from "@mui/material";
// import { plants } from "../data";
import Title from "../Title";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { MyFormControl, MyInputItem } from "../AllPlantsStyle";
import { useDispatch, useSelector } from "react-redux";
import { sortProduct } from "../../Rexux/sortProductSlice";
import { motion } from "framer-motion/dist/framer-motion";

// let arr = [{name:"Atirgul", price:"200 000"},{name:"Lola", price:"300 000"},{name:"Kaktus", price:"100 000"},{name:"Rayhon", price:"500 000"},
// ]

// let res = arr.map(({name, price}) => ({name, price: +price.split(" ").join("")}));

// res.sort(function(a,b){
//    return a.price - b.price
// })

// console.log(res)

const MyAllPlants = () => {
  const allPlants = useSelector((state) => state.sortProduct);
  const [productPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  //Selection function
  const [value, setValue] = React.useState("");
  const dispatch = useDispatch();
  const handleSelectChange = (event) => {
    setValue(event.target.value);
    dispatch(sortProduct(event.target.value));
  };

  /* Get current product */

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;

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

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth,transition: {duration:0.1} }}
    >
      <Box
        sx={{
          padding: {
            xs: "8rem 1rem",
            sm: "8rem 1rem",
            md: "8rem 2rem",
            lg: "8rem 2.5rem",
          },
        }}
      >
        <Title titleText={"Barcha o'simliklar"} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            padding: { xs: "2rem 0", lg: "3rem" },
          }}
        >
          <Box sx={{ width: { xs: 250, sm: 250, md: 250, lg: 280 } }}>
            <MyFormControl fullWidth>
              <InputLabel
                sx={{ fontSize: { xs: "0.9rem", lg: "1rem" } }}
                id="demo-simple-select-label"
              >
                Saralash
              </InputLabel>
              <Select
                sx={{
                  fontSize: { xs: ".8rem", sm: "1rem", md: "1rem", lg: "1rem" },
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                label="Saralash"
                onChange={handleSelectChange}
              >
                <MyInputItem value={"up"}>
                  Narx (Yuqoridan quyiga qarab)
                </MyInputItem>
                <MyInputItem value={"down"}>
                  Narx (Quyidan yuqoriga qarab)
                </MyInputItem>
              </Select>
            </MyFormControl>
          </Box>
        </Box>
        <Grid container spacing={4}>
          {currentPlant.map((plant) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box
                sx={{
                  height: { xs: "400px", sm: "350px", md: "400", lg: "500px" },
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
                    <Box
                      sx={{
                        padding: {
                          xs: "5px",
                          sm: "10px",
                          md: "15px",
                          lg: "20px",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "0.8rem",
                            sm: "0.9rem",
                            md: "1rem",
                            lg: "1.1rem",
                          },
                          fontWeight: "600",
                          textAlign: "left",
                        }}
                      >
                        {plant.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "0.8rem",
                            sm: "0.8rem",
                            md: "0.8rem",
                            lg: ".9rem",
                          },
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
                          marginBottom: {
                            xs: ".5rem",
                            sm: ".7rem",
                            md: ".9rem",
                            lg: "1rem",
                          },
                          fontWeight: "500",
                          textAlign: "left",
                          paddingLeft: {
                            xs: "5px",
                            sm: "10px",
                            md: "15px",
                            lg: "20px",
                          },
                          fontSize: {
                            xs: "0.8rem",
                            sm: "0.9rem",
                            md: "1rem",
                            lg: "1.1rem",
                          },
                        }}
                      >
                        {plant.textPrice} so'm
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
    </motion.div>
  );
};

export default MyAllPlants;
