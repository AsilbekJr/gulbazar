import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Xonaki from "./Menu/Xonaki";
import Layout from "./Layout";
import Home from "./Home";
import Gultuvaklar from "./Gultuvaklar";
import MyAllPlants from "./Menu/MyAllPlants";
import { AnimatePresence } from "framer-motion/dist/framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="o'simliklar" element={<MyAllPlants />} />
          <Route path="xonaki" element={<Xonaki />} />
          <Route path="gultuvaklar" element={<Gultuvaklar />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
