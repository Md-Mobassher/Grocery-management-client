import React, { useState } from 'react';
import { useEffect } from 'react';

const useFetch = (url) => {

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(()=>{
        fetch(url)
        .then((res) => {
            if(!res.ok){
                throw error ("Fetching is not successful")
            }else{
                return res.json()
            }
        })
        .then((data)=> {
            setData(data)
            setIsLoading(false)
            setError(null)
        })
        .catch((error) => {
            setError(error.message)
            setIsLoading(false)
        })
    },[url, error])

    return {data, isLoading, error}
};

export default useFetch;