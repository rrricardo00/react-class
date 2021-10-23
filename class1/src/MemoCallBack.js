import React from 'react'

const MemoCallBack = () => {
    const [contar, setContar] = React.useState(0)
    const valor = React.useMemo(() => {
        const localItem = localStorage.getItem('nome')
        return localItem
    }, [])

    const hancleClick2 = React.useCallback( () => {
        setContar((item) => item+1)
        }, [])


    let hancleClick = () => setContar(contar + 1)

    return (
        <div>
            <button onClick={hancleClick2}>Incrementar</button>
            {contar}
        </div>
    )
}

export default MemoCallBack
