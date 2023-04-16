import { useEffect, useState } from "react";
import Loading from "../Pages/Shared/Loading/Loading";


const useInventories = () =>{
    // const {data, isLoading, error} = useFetch(
    //     "https://groca-grocery-server.onrender.com/api/v1/inventory"
    // );
    const [inventories, setInventories] = useState("")
    

    useEffect( ()=>{
        fetch('https://groca-grocery-server.onrender.com/api/v1/inventory')
        .then(res => res.json())
        .then(data => setInventories(data.data))
        .catch((error) => {
            return <Loading />
        })
    }, []);
    return [inventories, setInventories]
}

export default useInventories;
