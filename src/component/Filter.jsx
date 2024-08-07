import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Filter = () => {
    let [Query,setQuery]=useSearchParams()

  return (
    <div>
        
        <button onClick={()=>setQuery({sort:"LTH"})}>LTH</button>
        <button onClick={()=>setQuery({sort:"HTL"})}>HTL</button>
        <button onClick={()=>setQuery({category:"jewelery"})}>jewelery</button>
        <button onClick={()=>setQuery({category:"electronics"})}>electronics</button>
        <button onClick={()=>setQuery("")}>Default</button>
    </div>
  )
}

export default Filter