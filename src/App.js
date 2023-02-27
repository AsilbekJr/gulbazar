import React from "react";
import Navbar from "./Components/Navbar";
import Banner from './Components/Banner';
import { Route, Routes } from "react-router-dom";
import Xonaki from "./Components/Menu/Xonaki";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Gultuvaklar from "./Components/Gultuvaklar";
function App() {
  return (
  <div style={{minHeight:"100vh"}}>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="xonaki"  element={<Xonaki />}/>
          <Route path="gultuvaklar"  element={<Gultuvaklar />}/>
        </Route>
      </Routes>
  </div>
  );
}
export default App;
