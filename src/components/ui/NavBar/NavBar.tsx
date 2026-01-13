import { useState } from 'react'
import cartImg from '../../../assets/carrito.png'
import logo from '../../../assets/tienda.png'
import styles from './NavBar.module.css'
import { CartModal } from '../CartModal'

export const NavBar = () => {
    const [showCartModal, setShowCartModal] = useState(false)

    const handleShowCartModal = () => {
        setShowCartModal(!showCartModal)
    }

    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbarDetail}>
                <img src={logo} alt="No se encontro logo" width={50} height={50} />
                <div>
                    <span>Tienda ZipZap</span>
                </div>
            </div>
            <div className={styles.navbarCartContainer}>
                <p className={styles.navbarTextAmount}>123</p>
                <img src={cartImg} alt="No se encontro imagen" width={50} height={50} onClick={handleShowCartModal} />
            </div>
            {showCartModal && (<CartModal handleShowCartModal={handleShowCartModal} />)}
        </div>
    )
}
