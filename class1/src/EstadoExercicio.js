import React from 'react'
import ProdutoExercicio from './ProdutoExercicio';

const EstadoExercicio = () => {

    const [dados, setDados] = React.useState('')
    const [carregando, setCarregando] = React.useState(null)
    async function handleClick(e){
        setCarregando(true)
        const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${e.target.innerText}`);
        const json = await response.json()
        setDados(json)
        setCarregando(false)
    }

    return (
        <div>
           <button onClick={handleClick}>tablet</button>
           <button onClick={handleClick}>smartphone</button>
           <button onClick={handleClick}>notebook</button>
           {carregando && <p>Carregando dados...</p>}
           {!carregando && dados && <ProdutoExercicio dados={dados}/>}
        </div>
    )
}

export default EstadoExercicio
