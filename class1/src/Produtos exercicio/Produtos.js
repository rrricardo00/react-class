import React from 'react'
import Produto from './Produto';
import Titulo from './Titulo'

const Produtos = () => {

    const produtos = [
        { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
        { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
      ];

    return (
        <section>
            <Titulo texto="Produtos"/>
            {produtos.map((produto) =>{
              return  <Produto key={produto.nome} produto={produto}/>
            })}
        </section>
    )
}

export default Produtos
