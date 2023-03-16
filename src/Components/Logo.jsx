import React from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';

const Logo = () => {
  const scrollToTop = () => {
    return window.scrollTo({ top: 0, behavior: 'smooth' })
  }

    const myTheme = useTheme();
  const matches = useMediaQuery(myTheme.breakpoints.down("sm"));
  return (
   <>
   <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent:"center",
              gap: ".5rem",
              cursor: "pointer",
              display: "flex",
              textDecoration: "none",
              textAlign:"left"
            }}
            component={Link}
            to="/"
            onClick={scrollToTop()}
          >
            <img
              src="./img/plants.png"
              style={{ width: matches ? "35px" : "50px" }}
              alt="plants"
            />
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontSize: { xs: "1rem", sm: "2rem" },
                fontWeight: "700",
                letterSpacing: "2px",
                color: "#000",
              }}
            >
              GULBAZAR
            </Typography>
          </Box>
   </>
  )
}

export default Logo