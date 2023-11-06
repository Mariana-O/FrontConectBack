import React from "react"
import './CadastroUsuarios.css'

function CadastroUsuarios(){
    return(
       
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
   
    )
}

export default CadastroUsuarios;