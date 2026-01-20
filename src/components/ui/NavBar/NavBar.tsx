import { useState } from 'react'
import cartImg from '../../../assets/carrito.png'
import logo from '../../../assets/tienda.png'
import styles from './NavBar.module.css'
import { CartModal } from '../CartModal'
import useCartContext from '../../../hooks/useCartContext'
import { useLocation, useNavigate } from 'react-router-dom'

export const NavBar = () => {
    const [showCartModal, setShowCartModal] = useState(false)

    const { state: { cartItems } } = useCartContext()
    const navigate = useNavigate()
    const location = useLocation()

    const handleShowCartModal = () => {
        setShowCartModal(!showCartModal)
    }

    const handleNavigateToHome = () => {
        navigate("/")
    }

    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbarDetail} onClick={handleNavigateToHome}>
                <img src={logo} alt="No se encontro logo" width={50} height={50} />
                <div>
                    <span>Tienda ZipZap</span>
                </div>
            </div>
            {location.pathname !== "/checkout" && (
                <>
                    <div className={styles.navbarCartContainer}>
                        <p className={styles.navbarTextAmount}>{cartItems.length}</p>
                        <img src={cartImg} alt="No se encontro imagen" width={50} height={50} onClick={handleShowCartModal} />
                    </div>
                    {showCartModal && (<CartModal handleShowCartModal={handleShowCartModal} />)}
                </>
            )}
        </div>
    )
}
