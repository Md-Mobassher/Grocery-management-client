import { useEffect } from 'react';
import { useState } from 'react';

const useInventories = () => {
   
    const [inventories, setInventories] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(`https://groca-grocery-server.onrender.com/api/v1/inventory`)
        .then((res) => {
            if(!res.ok){
               throw error ("Fetch is not successful")
            }else{
                res.json()
            }
        })
        .then((data) => {
            setInventories(data)
            console.log(inventories);
            console.log(data);
            setIsLoading(false)
            setError(null)
        })
        .catch((error) => {
            setError(error.message)
            setIsLoading(false)
        })

        return [isLoading, error, inventories, setInventories]

    }, [error, isLoading,inventories])
};

export default useInventories;