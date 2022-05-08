import { useEffect, useState } from "react";

const useInventory = (inventoryId) =>{
    const [inventory, setInventory] = useState([]);

    useEffect( ()=>{
        fetch(`https://intense-woodland-58233.herokuapp.com/inventory/${inventoryId}`)
        .then(res => res.json())
        .then(data => setInventory(data));
    }, [inventoryId]);
    
    return [inventory, setInventory]
}

export default useInventory;
