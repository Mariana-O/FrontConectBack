import React from "react"
import './CadastroProduto.css'
import Navbar from '../navbar/Navbar';
import LoginButton from "../login/LoginLogoButton";



function CadastroProduto(){


    return(
        <div>
            <LoginButton/>
            <Navbar
            Nav1='Home'
            Nav2='Cadastro de Usuarios'
            Nav3='Cadastro de Produtos'
            Nav4='Cadastro de Vendas'/>

            <div className="Cards">
                <div className="CardInput">
                    <input placeholder="Nome"/>
                </div>
                <div className="CardInput">
                    <input placeholder="Descrição"/>
                </div>
                <div className="CardInput">
                    <input placeholder="Preço"/>
                </div>
            </div>
        </div>  

    )
}

export default CadastroProduto;