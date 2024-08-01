import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "../Page/Product";
import Sign from "../Page/Sign";
import Login from "../Page/Login";

const AllRounter = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/Product"   className="box"element={<Product />} />
        <Route path="/Sign" element={<Sign />} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
    </div>
  );
};

export default AllRounter;
