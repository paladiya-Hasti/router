import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "../Page/Product";
import Sign from "../Page/Sign";
import Login from "../Page/Login";
import Home from "../Page/Home";
import Error from "../Page/Error";

const AllRounter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Product" className="box" element={<Product />} />
        <Route path="/Sign" element={<Sign />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  );
};

export default AllRounter;
