import React from "react"
import './Cadastros.css'


function CadastroVendas(){
    return(
        <div className="CardPai">
            <div className="CardFilho">
                <input placeholder="Usuário"/>
            </div>
            <div className="CardFilho">
                 <input placeholder="Produto"/>
            </div>
            <div className="CardFilho">
                 <input placeholder="Preço"/>
            </div>
            <div className="CardFilho">
                 <input placeholder="Desconto"/>
            </div>
            <div className="CardFilho">
                 <input placeholder="Valor Final"/>
            </div>
            <div className="CardFilho">
                <input placeholder="Venda"/>
            </div>
          
        </div>

    )
}

export default CadastroVendas;