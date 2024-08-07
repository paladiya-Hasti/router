import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
    let {id}=useParams()
    console.log(id);
    
    let [product,setproduct]=useState({})

    const getsingleproduct=async(id)=>{
        let res=await axios.get(`https://fakestoreapi.com/products/${id}`)
        setproduct(res.data)
    }
    useEffect(()=>{
       getsingleproduct(id)
    },[])
  return (
    <div>
      <h5>{product.title}</h5>
        <img src={product.image} />
        <p>price : {product.price}</p>
    </div>
  )
}

export default SingleProduct