import React, {useState} from 'react'

const ModoEstrito = () => {

    const [contar, setContar] = useState(1);
    const [itens, setItens] = useState(['item 1']);

    const handleClick = () => { setContar(contar+1); setItens([...itens, 'item ' + (contar+1)])}
    

    return (
        <div>
           <button onClick={handleClick}>Adicionar</button>
           <p>{contar}</p>
           {itens.map(item => <li key={item}>{item}</li>)}
        </div>
    )
}

export default ModoEstrito
