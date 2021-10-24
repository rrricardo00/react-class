import React from 'react'

export const GlobalContext = React.createContext()

export const GlobalContextStorage = ({ children }) => {

    const [produto, setProduto] = React.useState(null);

    const limparDados = () => setProduto(null)

    React.useEffect(() => {
        fetch('https://ranekapi.origamid.dev/json/api/produto/')
            .then(res => res.json())
            .then(res => setProduto(res))
    }, [])
    

    return (
        <GlobalContext.Provider value={{ produto, limparDados, setProduto }}>{children}</GlobalContext.Provider>
    )
}


