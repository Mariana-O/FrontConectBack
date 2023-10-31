import React from "react"
import './CadastroUsuario.css'

function CadastroUsuario(){
    return(
        <div className="CardPai">
            <div className="CardFilho">
              <input placeholder="Nome"/> 
            </div>
            <div className="CardFilho">
                <input placeholder="Sobrenome"/>
            </div>
            <div className="CardFilho">
                <input placeholder="CPF"/>
            </div>
            <div className="CardFilho">
                <input placeholder="Email"/>
            </div>
        </div>
    )
}

export default CadastroUsuario;