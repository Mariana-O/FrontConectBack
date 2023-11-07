import React from "react"
import './CadastroUsuarios.css'
import Navbar from '../navbar/Navbar';
import LoginButton from "../login/LoginLogoButton";

function CadastroUsuarios(){
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
                                <input placeholder="Sobrenome"/>
                        </div>
                        <div className="CardInput">
                                <input placeholder="CPF"/>
                        </div>
                        <div className="CardInput">
                                <input placeholder="Email"/>
                        </div>
                </div>
        </div>
   
    )
}

export default CadastroUsuarios;