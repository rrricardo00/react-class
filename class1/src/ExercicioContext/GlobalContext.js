import React from 'react'

export const GlobalContext = React.createContext()

export const GlobalContextStorage = ({children}) => {
    return (
        <GlobalContext.Provider>{children}</GlobalContext.Provider>
    )
}


