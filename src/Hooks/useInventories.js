import { useEffect, useState } from "react";

const useInventories = () =>{
    const [inventories, setInventories] = useState([]);

    useEffect( ()=>{
        fetch('https://groca-grocery-server.onrender.com/api/v1/inventory')
        .then(res => res.json())
        .then(data => setInventories(data.data));
    }, []);
    return [inventories, setInventories]
}

export default useInventories;
