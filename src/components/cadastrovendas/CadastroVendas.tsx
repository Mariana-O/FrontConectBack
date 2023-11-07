import React from "react"
import './CadastroVendas.css'
import Navbar from '../navbar/Navbar';
import LoginButton from "../login/LoginLogoButton";


function CadastroVendas(){
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
                    <input placeholder="Usuário"/>
                </div>
                <div className="CardInput">
                     <input placeholder="Produto"/>
                </div>
                <div className="CardInput">
                    <input placeholder="Preço"/>
                </div>
                <div className="CardInput">
                     <input placeholder="Desconto"/>
                </div>
                <div className="CardInput">
                    <input placeholder="Valor Final"/>
                </div>
            </div>
        </div>

    )
}

export default CadastroVendas;