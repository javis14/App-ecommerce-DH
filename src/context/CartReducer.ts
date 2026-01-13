export const initialState = {
    cartItems: []
}

export const CartReducer = (state, action) => {

    switch (action.type) {
        case "ADD_TO_CART": {
            const { id } = action.payload

            const existingItem = state.cartItems.find((item) => item.id === id)

            if (existingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) => item.id === id
                        ?
                        { ...existingItem, quantity: existingItem.quantity + 1 }
                        :
                        item)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload]
                }
            }
        }
        case "REMOVE_FROM_CART": {
            const { id: removeItemId } = action.payload

            const itemToRemove = state.cartItems.find((item) => item.id === removeItemId)

            if (itemToRemove.quantity === 1) {
                return {
                    ...state,
                    cartItem: state.cartItems.filter((item) => item.id !== removeItemId)
                }
            } else {
                return {
                    ...state,
                    cartItem: state.cartItems.map((item) => item.id === removeItemId
                        ?
                        { ...itemToRemove, quantity: itemToRemove.quantity - 1 }
                        :
                        item)
                }
            }
        }
        default:
            return state;
    }
}
