import React from 'react'

const EffectProduto = ({ dados }) => {

    React.useEffect(() => {
        localStorage.setItem('nome', dados.nome)
        localStorage.setItem('preco', dados.preco)

        return () => {
            localStorage.clear();
        }
    }, [dados])


   

    return (
        <div>

            <h1>{dados.nome}</h1>
            <h3>R$ {dados.preco}</h3>

        </div>
    )
}

export default EffectProduto
