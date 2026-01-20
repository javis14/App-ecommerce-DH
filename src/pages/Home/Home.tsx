import { useState } from "react"
import { Hero } from "../../components/ui/Hero"
import styles from "./Home.module.css"
import { CardProduct } from "../../components/ui/CardProduct"
import { getProducts } from "../../service"
import { Toaster } from 'sonner'
import { useQuery } from "react-query"

const Home = () => {

    const [page, setPage] = useState(1)

    const { data, isLoading, error } = useQuery(
        ['products', page],
        () => getProducts(page),
        { keepPreviousData: true })

    return (
        <>
            <Hero />
            <Toaster richColors />
            {isLoading && <p>Cargando...</p>}
            {error && <p>Algo salio mal :(</p>}
            <div className={styles.container}>
                {data?.map((product) => (
                    <CardProduct key={product.tail} product={product} />
                ))}
            </div>
            <div className={styles.paginationContainer}>
                <button onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                    className={styles.paginationButton}>
                    Pagina anterior
                </button>
                <div className={styles.paginationActive}>
                    <span>{page}</span>
                </div>
                <button onClick={() => setPage(page + 1)}
                    className={styles.paginationButton}>
                    Pagina siguiente
                </button>
            </div>
        </>
    )
}

export default Home