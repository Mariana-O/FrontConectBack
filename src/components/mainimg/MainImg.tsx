import React from "react";
import "./MainImg.css"
import MainImage from "../../img/mainImg.png"

function MainImg(){
    return(
    <div className="mainImg">
       <img src={MainImage}alt=""/>
    </div>
        );

}

export default MainImg;