import React, { useEffect } from "react";
import './Navbar.css'
import {Link} from 'react-router-dom'

interface Props {
    Nav1?: string;
    Nav2?: string;
    Nav3?: string;
    Nav4?: string;
    Nav5?: string;
};

function Navbar(nav: Props){
    useEffect(() => {
    var url = document.location.href.split("/")[4];

     if(url === "usuarios"){
       var divUsuarios = document.getElementById("usuarios") as HTMLElement;
       divUsuarios.classList.add("pointerRemove")
     } else if(url === "produtos"){
        var divProdutos = document.getElementById("produtos") as HTMLElement;
       divProdutos.classList.add("pointerRemove")
     } else if(url === "vendas"){
       var divVendas = document.getElementById("vendas") as HTMLElement;
       divVendas.classList.add("pointerRemove")
     }
},[])

    return(
        <div className="navbar">
            
            <div className="navName">
                <Link to={'/'}>
                {nav.Nav1} 
                </Link>
            </div>
            
            <div className="nav-links">

                <div className="navfilho" id="usuarios">
                    <Link to={'/usuarios'}>
                        {nav.Nav2} 
                    </Link>
                </div>
                <div className="navfilho" id="produtos">
                    <Link to={'/produtos'}>
                        {nav.Nav3} 
                    </Link>
                </div>
                <div className="navfilho" id="vendas">
                    <Link to={'/vendas'}>
                        {nav.Nav4}
                    </Link>
                </div>
            </div>
       </div>
    );

}

export default Navbar;