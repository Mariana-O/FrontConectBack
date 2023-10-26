import React from "react";
import './LoginLogoButton.css'
import Logo from "../../img/store.png"
import Login from "../../img/user.png"


function LoginButton(){
 return(
    <div className="headIcons">
    <div className="icon-logo">
        <img src={Logo}/>
    </div>
  <div className="icon-login">
        <img src={Login}/>
  </div>
  </div>

)
}

export default LoginButton;