import { useReducer, type FC, type ReactNode } from "react"
import { CartReducer, initialState } from "./CartReducer"
import { CartContext } from "./CartContext"

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider: FC<CartProviderProps> = ({ children }) => {

    const [state, dispatch] = useReducer(CartReducer, initialState)

    return (
        <CartContext.Provider value={{ state, dispatch }} >
            {children}
        </CartContext.Provider>
    )
}
