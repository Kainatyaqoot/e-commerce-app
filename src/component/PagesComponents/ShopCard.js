import React from 'react'
import { Card } from "@mui/material"
import { Link } from "react-router-dom"
import "./ShopCard.css"
const ShopCard = (props) => {
 return (
  <div className='text-center'>
   <Link to="/ProductDetailPage" style={{ textDecoration: "none" }}>

    <Card>
     <img className='badeg-img' src={props.img2} />
     <h6 className='feature-iteam'>{props.title}</h6>
     <img className='item-img' src={props.img1} />
     <h3 className='card-name'>{props.name}</h3>
     <p className='card-prices'>{props.price}</p>

    </Card>
   </Link></div>
 )
}

export default ShopCard