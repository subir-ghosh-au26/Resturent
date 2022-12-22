import React from "react";
import Counter from "./Counter";

function Card(props) {

  const { foodData } = props

  return (
    <div className="card w-25 m-3">
      <img style={{height: "150px"}} src={foodData.imageUrl} className="cardImg" alt="..."/>
      <h5 style={{textAlign: "center"}}>{foodData.title}</h5>
      <p><span style={{float: "left"}}>{foodData.category}</span>
      <span style={{float: "right"}}>₹{foodData.price}</span></p>
      <Counter foodData={foodData}/>
    </div>
  )
}
export default Card;