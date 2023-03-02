import React from "react";
import { Route, Routes } from "react-router-dom";
import Xonaki from "./Components/Menu/Xonaki";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Gultuvaklar from "./Components/Gultuvaklar";
import AllPlants from "./Components/AllPlants";
function App() {
  return (
  <div style={{minHeight:"100vh"}}>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="osimliklar"  element={<AllPlants />}/>
          <Route path="xonaki"  element={<Xonaki />}/>
          <Route path="gultuvaklar"  element={<Gultuvaklar />}/>
        </Route>
      </Routes>
  </div>
  );
}
export default App;
