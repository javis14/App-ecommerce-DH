import { useEffect, useState } from "react"
import { Hero } from "../../components/ui/Hero"
import styles from "./Home.module.css"
import { CardProduct } from "../../components/ui/CardProduct"
import { getProducts } from "../../service"
import type { Products } from "../../interface"

const Home = () => {

    const [products, setProducts] = useState<Products[]>([])
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getProducts()
            .then((data) => {
                setProducts(data)
            })
            .catch(() => {
                setError(true)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    return (
        <>
            <Hero />
            {isLoading && <p>Cargando...</p>}
            {error && <p>Algo salio mal :(</p>}
            <div className={styles.container}>
                {products.map((product) => (
                    <CardProduct key={product.tail} product={product} />
                ))}
            </div>
        </>
    )
}

export default Home