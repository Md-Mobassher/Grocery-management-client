import { useEffect, useState } from "react";

const useInventory = (inventoryId) =>{
    const [inventory, setInventory] = useState([]);

    useEffect( ()=>{
        fetch(`http://localhost:5000/inventory/${inventoryId}`)
        .then(res => res.json())
        .then(data => setInventory(data));
    }, [inventoryId]);
    
    return [inventory, setInventory]
}

export default useInventory;
