import React from "react"
import './CadastroVendas.css'


function CadastroVendas(){
    return(
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

    )
}

export default CadastroVendas;