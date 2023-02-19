import React from "react";
import Navbar from "./Components/Navbar";
import Banner from './Components/Banner';
import { Route, Router, Routes } from "react-router-dom";
import Xonaki from "./Components/Menu/Xonaki";
function App() {
  return (
  <>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="xonaki"  element={<Xonaki />}/>
      </Routes>
  </>
  );
}
export default App;
