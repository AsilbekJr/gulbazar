import React from "react";
import { createTheme, ThemeProvider,Typography } from "@mui/material";

const Title = ({titleText, textAlign, fontSize}) => {
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

  return (
    <>
      <ThemeProvider theme={theme}>
        <Typography
          sx={{ textAlign: textAlign ? {textAlign} : "center", fontWeight:"600", color:"#323232", marginBottom: "2rem",fontSize: fontSize ? fontSize : {xs:"2rem", sm:"2.2rem", md:"2.8rem", lg:"3rem"}, lineHeight:{lg:"4rem"}}}
        >
          {titleText}
        </Typography>
      </ThemeProvider>
    </>
  );
};

export default Title;
