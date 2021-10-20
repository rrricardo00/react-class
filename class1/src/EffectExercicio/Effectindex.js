import React from 'react'
import EffectBtn from './EffectBtn'
import EffectProduto from './EffectProduto'

const Effectindex = () => {

    const [dados, setDados] = React.useState(null)
    const [estado, setEstado] = React.useState(null)

    

    async function datas(e) {
        setEstado(false)
        const url = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${e.target.innerText}`)
        const json = await url.json();
        setDados(json)
        setEstado(true)
    }

    React.useEffect(() => {

        if (localStorage.length >= 1) {
            console.log('ok')

        }

        return () => {

        }
    }, [])

    return (
        <div>
            <EffectBtn texto="smartphone" clicar={datas} />
            <EffectBtn texto="notebook" clicar={datas} />
            {estado === false && <p>Carregando dados</p>}
            {estado && dados && <EffectProduto dados={dados}/>}

        </div>
    )
}

export default Effectindex
