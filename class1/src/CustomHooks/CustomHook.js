import React from 'react'
import useFetch from './useFetch'
import UseLocalStorage from './UseLocalStorage'


const CustomHook = () => {

    const [produto, setProduto] = UseLocalStorage('produto', '')
    const {request, data} = useFetch()

    const handleClick = ({target}) => setProduto(target.innerText)

    React.useEffect(() =>{
        request('https://pokeapi.co/api/v2/pokemon/pikachu')
    }, [])

    if (data === null) return null

    console.log(data.moves[0].move.name)

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
}

export default CustomHook
