import React, { useEffect } from "react";
import './Card.css'
import getProducts from "../../services/api";

function Card(){

  useEffect(() => {
    var divId = document.getElementById("mainCard") as HTMLDivElement || null;
    console.log("Div dentro do id", divId)
    getProducts.getProducts(divId);
  },[])
  return(
    <div id="mainCard" className="CardHead">
     </div>

)

}

export default Card;