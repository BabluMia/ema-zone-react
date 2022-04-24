import { useEffect, useState } from "react"
import { getStordCard } from "../utilities/fakedb"

const useCart = (products) =>{
    const [cart , setCart] = useState([])
    useEffect(()=>{
        const stordCart = getStordCard()
        const savedCart = []
        for(const id in stordCart){
            const addedProduct = products.find(product => product._id === id)
            if(addedProduct){
                const quantity = stordCart[id]
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    },[products])
    return [cart , setCart]
}

export default useCart ;