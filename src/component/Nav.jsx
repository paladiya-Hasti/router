import React from 'react'
import { Link } from 'react-router-dom'


export const Nav = () => {
  return (
   <div className='nav'>     
  
      <Link  className="side"to="/">HOME</Link>
      <Link className='side' to="/Product">PRODUCT</Link>
      <Link className='side' to ="/Sign">SIGNUP</Link>
      <Link className='side' to="/Login">LOGIN</Link>
      {/* <Link className='side' to="/Singleproduct">Singleproduct</Link> */}
   </div>
    
  )
}
