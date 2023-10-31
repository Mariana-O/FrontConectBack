import React from "react";
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
    return(
        <div className="navbar">
            <div className="navName">
                <Link to={'/'}>
                {nav.Nav1} 
                </Link>
            </div>
            
            <div className="nav-links">
                <div className="navfilho">
                    <Link to={'/usuarios'}>
                        {nav.Nav2} 
                    </Link>
                </div>
                <div className="navfilho"> 
                    <Link to={'/produtos'}>
                        {nav.Nav3} 
                    </Link>
                </div>
                <div className="navfilho">  
                    <Link to={'/vendas'}>
                        {nav.Nav4}
                    </Link>
                </div>
            </div>
       </div>
    );

}

export default Navbar;