import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Xonaki from "./Menu/Plants/Xonaki";
import Layout from "./Layout";
import Home from "./Home";
import MyAllPlants from "./Menu/Plants/MyAllPlants";
import { AnimatePresence } from "framer-motion/dist/framer-motion";
import Hovli from "./Menu/Plants/Hovli";
import Yangi from "./Menu/Plants/Yangi";
import Pots from "./Menu/Pots/Pots";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="o'simliklar" element={<MyAllPlants />} />
          <Route path="xonaki" element={<Xonaki />} />
          <Route path="hovli" element={<Hovli />} />
          <Route path="gultuvaklar" element={<Pots />} />
          <Route path="yangi" element={<Yangi />} /> 
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
