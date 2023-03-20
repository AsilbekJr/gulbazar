import { Typography, createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import {careHomePlants } from "../../../data";

const HomePlantCare = () => {
  const theme = createTheme({
    typography: {
      fontFamily: [
        "Montserrat",
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
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#e8f8fa",
          padding: {
            xs: "8rem 1.4rem 4rem 1.4rem",
            sm: "8rem 2ren",
            md: "8rem 0 0 2.5rem",
            lg: "8rem 0 0 2.5rem",
          },
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "2rem", sm: "2.2rem", md: "2.8rem", lg: "3rem" },
              lineHeight: { xs: "35px", sm: "45px", md: "55px", lg: "65px" },
              width: { sm: "100%", md: "80%" },
            }}
          >
            Xona o'simliklarini parvarish qilish bo'yicha maslahatlari.
          </Typography>
          <Typography
            sx={{
              paddingTop: "1rem",
              width: { sm: "100%", md: "80%" },
              fontSize: { xs: "1rem", sm: "1rem", md: "1rem", lg: "1.1rem" },
            }}
          >
           Sizning kollektsiyangizda qanday o'simliklar bo'lishidan qat'i nazar, ularning barchasi bir xil asosiy ehtiyojlarga ega. Mana, ularni qanday qilib eng yaxshi holatda saqlash kerak.
          </Typography>
        </Box>
        <Box
          sx={{
            alignItems: "bottom",
            display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
          }}
        >
          <img
            style={{ width: "150px" }}
            src="https://cdn.sanity.io/images/y346iw48/production/41a5bd08b7e6724c329d188001bf13278660d31d-252x448.png?auto=format"
          />
        </Box>
      </Box>
      <Box
        sx={{
          padding: {
            xs: "4rem 1rem 4rem 1rem",
            sm: "4rem 1rem",
            md: "4rem 2rem",
            lg: "4rem 2.5rem",
          },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: { sm: "100%", md: "60%" }, padding: "1rem .8rem" }}>
          {careHomePlants &&
            careHomePlants.map((item) => (
              <Box sx={{display: "flex",
              flexDirection: "column",
              alignItems: "center",}}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    paddingTop: "3rem",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "1.8rem",
                        sm: "1.9rem",
                        md: "2.4rem",
                        lg: "2.6rem",
                      },
                      lineHeight: {
                        xs: "35px",
                        sm: "45px",
                        md: "55px",
                        lg: "65px",
                      },
                    }}
                  >
                    {item.title}
                  </Typography>
                  {item.para &&
                    item.para.map((paraItem) => (
                      <Typography
                        sx={{
                          paddingTop: "1rem",
                          fontSize: {
                            xs: ".9rem",
                            sm: ".9rem",
                            md: ".9rem",
                            lg: "1rem",
                          },
                        }}
                      >
                        {paraItem.text}
                      </Typography>
                    ))}
                </Box>
                <Box
                  sx={{ width: { sm: "100%", md: "100%" }, padding: " 2rem 0rem" }}
                >
                  <img
                    style={{ width: "100%", objectFit:"cover" }}
                    src={item.img}
                  />
                </Box>
              </Box>
            ))}
          <Typography
            sx={{
              fontSize: {
                xs: ".8rem",
                sm: ".9rem",
                md: ".9rem",
                lg: "1rem",
              },
              marginTop: "4rem",
              fontStyle: "italic",
              textAlign: "end",
            }}
          >
            {" "}
            O'simliklar bo'yicha mutaxassis:{" "}
            <span style={{ fontWeight: "bold" }}>Lobar Rustamova</span>{" "}
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default HomePlantCare;
