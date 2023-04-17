import { useEffect, useState } from "react";


const useInventory = (inventoryId) =>{
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [inventory, setInventory] = useState("")
    

    useEffect(() => {
        fetch(`https://groca-grocery-server.onrender.com/api/v1/inventory/${inventoryId}`)
          .then((res) => {
            if (!res.ok) {
              throw Error("fecthing is not successful");
            } else {
              return res.json();
            }
          })
          .then((data) => {
            setInventory(data);
            setIsLoading(false);
            setError(null);
          })
          .catch((error) => {
            setError(error.message);
            setIsLoading(false);
          });
      }, [inventoryId]);

    return {isLoading, error, inventory, setInventory}
}

export default useInventory;
