import useCartContext from "../../../hooks/useCartContext"
import type { CartProduct } from "../../../interface"
import styles from "./Table.module.css"

export const Table = () => {

    const { state: { cartItems }, dispatch } = useCartContext()

    const addToCart = (item: CartProduct) => {
        dispatch({ type: "ADD_TO_CART", payload: item })
    }

    const removeToCart = (item: CartProduct) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: item })
    }

    const totalPay = () => {
        const total = cartItems.reduce((acc, item) => {
            return acc + item.price * item.quantity
        }, 0)

        return total
    }

    return (
        <>
            <table className={styles.modalTable}>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Quitar</th>
                        <th>Cantidad</th>
                        <th>Agregar</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>
                                <button className={styles.modalButtonRemove} onClick={() => removeToCart(item)}>
                                    -1
                                </button>
                            </td>
                            <td>{item.quantity}</td>
                            <td>
                                <button className={styles.modalButtonAdd} onClick={() => addToCart(item)}>
                                    +1
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={styles.modalTotalContainer}>
                <h3>Total: ${totalPay()},00</h3>
            </div>
        </>
    )
}
