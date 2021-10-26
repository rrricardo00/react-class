import React from 'react'

const useFetch = () => {
    const [data, setData] = React.useState(null)
    const [erro, setErro] = React.useState(null)
    const [loading, setLoading] = React.useState(null)

    const request = async (url, options) => {

        try {
            setErro(null)
            setLoading(true)
            const response = await fetch(url, options)
            const json = await response.json()
            setData(json)

        } catch (error) {
            setErro('error')
        } finally {
            setLoading(false)
            return { response, json }
        }

    }

    return { data, erro, loading, request }

}

export default useFetch
