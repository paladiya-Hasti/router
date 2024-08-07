import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Filter from "../component/Filter";

const Product = () => {
  let [Query, setQuery] = useSearchParams();
  let [products, setproducts] = useState([]);
  let [list, setlist] = useState([]);

  let getproduct = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    setproducts(res.data);
  };
  const sortby = (orderby) => {
    let data = [...products];
    if (orderby == "LTH") {
      data = data.sort((a, b) => a.price - b.price);
      setlist(data);
    } else {
      data = data.sort((a, b) => b.price - a.price);
      setlist(data);
    }
  };
  let filterbycategory=(category)=>{
    let data=[...products]
    data=data.filter((ele)=>ele.category== category)
    setlist(data)
  }
  useEffect(() => {
    getproduct();
  }, []);
  useEffect(() => {
    let sort = Query.get("sort");
    let category = Query.get("category");

    if (sort) {
      sortby(sort);
    }
    if(category){
      filterbycategory(category)
    }
    if(sort == null && category == null){
      setlist(products)
    }
  }, [Query]);
  return (
    <div id="products">
      <div>
        <Filter />
      </div>
      {list.map((ele) => (
        <Link to={`/product/${ele.id}`}>
          <div className="product">
            <h5>{ele.title}</h5>
            <img src={ele.image} alt="" />
            <h6>PRICE : {ele.price}</h6>
            <h3>category : {ele.category}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Product;
