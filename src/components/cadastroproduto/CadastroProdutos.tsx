import React from "react"
import './Cadastros.css'



function CadastroProduto(){
    return(
        <div className="CardHead">
            <div className="CardBody">
                <input placeholder="Nome"/>
            </div>
            <div className="CardBody">
                <input placeholder="Descrição"/>
            </div>
            <div className="CardBody">
                <input placeholder="Preço"/>
            </div>
        </div>

    )
}

export default CadastroProduto;