import styles from './Home.module.css'
import {Category} from "../../components/category/Category.tsx";
import {Product} from "../../components/product/Product.tsx";
export function Home() {

    return (
        <>
            <div className={styles.carousel}>
            </div>
            <Category />
            <div className={styles.title}>
                <span>Our Products</span>
            </div>
            <Product params={{limit:8}}/>
            <div className={styles.showMore}>
                <a  href="/shop">Show More</a>
            </div>

        </>

    )
}