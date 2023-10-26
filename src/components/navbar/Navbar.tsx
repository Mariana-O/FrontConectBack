import React from "react";
import './Navbar.css'

interface Props {
    Nav1?: string;
    Nav2?: string;
    Nav3?: string;
    Nav4?: string;
    Nav5?: string;
};

function Navbar(nav: Props){
    return(
        <div className="navbar">
        <div className="navName">
         {nav.Nav1}
        </div>  
       <div className="nav-links">
        <div className="navfilho">
        <a href="https://github.com/Mariana-O" target="_blank" >
         {nav.Nav2} </a>
        </div>
        <div className="navfilho"><a href="https://github.com/Mariana-O" target="_blank" >
         {nav.Nav3}</a>
        </div>
        <div className="navfilho"> <a href="https://www.linkedin.com/in/mariana-oliveira-389792212/" target="_blank">
         {nav.Nav4}</a>
        </div>
        <div className="navfilho"> <a href="https://www.instagram.com/aphrodisiaca_/" target="_blank">
         {nav.Nav5}</a>
        </div>
        </div>
        </div>

    );

}

export default Navbar;