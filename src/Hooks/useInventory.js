import { useEffect, useState } from "react";

const useInventory = (inventoryId) =>{
    const [inventory, setInventory] = useState([]);

    useEffect( ()=>{
        fetch(`http://localhost:5000/api/v1/inventory/${inventoryId}`)
        .then(res => res.json())
        .then(data => setInventory(data.data));
    }, [inventoryId]);
    
    return [inventory, setInventory]
}

export default useInventory;
