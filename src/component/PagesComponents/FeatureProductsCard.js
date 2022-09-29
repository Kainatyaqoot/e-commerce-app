import React from 'react'
import "./FeatureProductsCard.css"
import Card from '@mui/material/Card';
import { Button } from "@mui/material";
import { Link } from "react-router-dom"
const FeatureProductsCard = (props) => {
 return (
  <Link to="/ProductDetailPage" style={{ textDecoration: "none" }}>
   <Card>


    < >
     <img className='badeg-img' src={props.img2} />
     <h6 className='feature-iteam'>{props.title}</h6>
     <img className='item-img' src={props.img1} />
     <div className='card-details'>
      <h3 className='card-name'>{props.name}</h3>
      <del className='card-prices-sale'>{props.discount}</del>
      <p className='card-prices'>{props.price}</p>
     </div>
    </>
   </Card></Link>

 )
}

export default FeatureProductsCard;