import React from "react";
import Navbar from "./Components/Navbar";
import Banner from './Components/Banner';
import { Route, Routes } from "react-router-dom";
import Xonaki from "./Components/Menu/Xonaki";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
function App() {
  return (
  <>
     <Navbar/>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="xonaki"  element={<Xonaki />}/>
        </Route>
      </Routes>
  </>
  );
}
export default App;
