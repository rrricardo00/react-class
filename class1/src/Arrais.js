import React from 'react'

const Arrais = () => {
    const produtos = ['valor1', 'valor2', 'valor3', 'valor4']
    return (
        <div>
            <ul>
                {
                    produtos.map((item, index) =>{
                       return <li key={item[index]}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Arrais
