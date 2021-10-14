import React, {useState} from 'react'

const Estado2 = () => {
    const [itens, setItens] = useState(['item1', 'item2'])

   let handleClick = () => setItens('Outro')

    return (
        <>
            <button onClick={handleClick}>btn</button>
            <p>{itens}</p>
        </>
    )
}

export default Estado2
