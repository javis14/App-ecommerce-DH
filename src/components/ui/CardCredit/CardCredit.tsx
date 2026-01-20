import Card from "react-credit-cards-2"
import 'react-credit-cards-2/dist/es/styles-compiled.css'
import styles from "./CardCredit.module.css"
import React, { useState } from "react"
import { toast } from "sonner"
import useCartContext from "../../../hooks/useCartContext"
import type { CartProduct } from "../../../interface"

export const CardCredit = () => {

    const { dispatch } = useCartContext()

    const [cardData, setCardData] = useState({
        number: '',
        name: '',
        expiry: '',
        cvc: '',
        focus: ''
    })

    const { number, name, expiry, cvc } = cardData

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCardData({
            ...cardData,
            [e.target.name]: e.target.value
        })
    }

    const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setCardData({
            ...cardData,
            focus: e.target.name
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // validar campos vacios
        if ([number, name, expiry, cvc].includes('')) {
            // error
            toast.error('Debes completar todos los datos')
            return
        }
        // limpiar estado
        setCardData({
            number: '',
            name: '',
            expiry: '',
            cvc: '',
            focus: ''
        })

        dispatch({ type: "CLEAR_CART", payload: {} as CartProduct })
    }

    return (
        <div className={styles.container}>
            <div>
                <Card
                    number={number}
                    name={name}
                    expiry={expiry}
                    cvc={cvc}
                    focused={cardData.focus as any}
                />
            </div>

            <form onSubmit={handleSubmit}>
                <div className={styles.formControl}>
                    <label htmlFor="number">Numero de tarjeta</label>
                    <input type="text" name="number" id="number" value={number} onChange={handleInputChange} onFocus={handleInputFocus} />
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="name">Nombre de tarjeta</label>
                    <input type="text" name="name" id="name" value={name} onChange={handleInputChange} onFocus={handleInputFocus} />
                </div>

                {/* grupo */}
                <div className={styles.formInputGrup}>
                    <div className={styles.formControl}>
                        <label htmlFor="expiry">Vencimiento de la tarjeta</label>
                        <input type="text" name="expiry" id="expiry" value={expiry} onChange={handleInputChange} onFocus={handleInputFocus} />
                    </div>
                    <div className={styles.formControl}>
                        <label htmlFor="cvc">CVC de la tarjeta</label>
                        <input type="text" name="cvc" id="cvc" value={cvc} onChange={handleInputChange} onFocus={handleInputFocus} />
                    </div>
                </div>

                <button type="submit" className={styles.buyButton}>Comprar</button>
            </form>

        </div>
    )
}
