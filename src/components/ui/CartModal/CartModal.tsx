import styles from "./CartModal.module.css"
import closeimg from "../../../assets/close.svg"

export const CartModal = ({ handleShowCartModal }) => {
    return (
        <div className={styles.modalContainer}>
            <button className={styles.modalCloseButton} onClick={handleShowCartModal}>
                <img src={closeimg} alt="close" />
            </button>
            <table className={styles.modalTable}>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Delete</th>
                        <th>Quantity</th>
                        <th>Add</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>
                            <button className={styles.modalButtonRemove}>-1</button>
                        </td>
                        <td>123</td>
                        <td>
                            <button className={styles.modalButtonAdd}>+1</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className={styles.modalTotalContainer}>
                <h3>Total: 500,00</h3>
            </div>
            <div className={styles.modalButtonContainer}>
                <button>Checkout</button>
            </div>
        </div>
    )
}
