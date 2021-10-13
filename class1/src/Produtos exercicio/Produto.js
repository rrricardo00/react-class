import React from 'react'

const Produto = (props) => {
    return (
        <div>
            <p>{props.produto.nome}</p>
            <ul>
                {props.produto.propriedades.map( item => <li>{item}</li>)}
            </ul>
        </div>
    )
}

export default Produto
