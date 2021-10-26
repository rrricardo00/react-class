import React from 'react'
import useFetch from './useFetch'
import UseLocalStorage from './UseLocalStorage'


const CustomHook = () => {

    const [produto, setProduto] = UseLocalStorage('produto', '')
    const {request, data, loading, erro} = useFetch()

    const handleClick = ({target}) => setProduto(target.innerText)

    React.useEffect(() =>{
       const {response, json} =  request('https://pokeapi.co/api/v2/pokemon/pikachu')
    }, [])

    if(erro) return <p>{erro}</p>
    if(loading) return <p>Carregando...</p>
    if (data)
    return (
        <div>

            <p>Produto preferido: {produto}</p>
            <button onClick={handleClick}>Notebook 2</button>
            <button onClick={handleClick}>Smartphone 2</button>
            <ul>
            {data.moves.map((item, index) => <li key={index}>{item.move.name}</li>)}
            </ul>
        </div>
    )
    else return null
}

export default CustomHook
