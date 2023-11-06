import React from "react"
import './CadastroProduto.css'



function CadastroProduto(){
    return(
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

    )
}

export default CadastroProduto;