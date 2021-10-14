import React, {useState} from 'react'

const ModoEstrito = () => {

    const [contar, setContar] = useState(1);

    const handleClick = () => setContar(contar+1)

    return (
        <div>
           <button onClick={handleClick}>Adicionar</button>
           <p>{contar}</p>
        </div>
    )
}

export default ModoEstrito
