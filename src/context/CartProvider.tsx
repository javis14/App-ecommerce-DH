import { useReducer } from "react"
import { CartReducer, initialState } from "./CartReducer"
import { CartContext } from "./CartContext"


export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(CartReducer, initialState)

    return (
        <CartContext.Provider value={{ state, dispatch }} >
            {children}
        </CartContext.Provider>
    )
}
