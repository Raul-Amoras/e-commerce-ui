import styles from './BannerFreight.module.css'
import trophy from '../../assets/trophy.svg'
import guarante from '../../assets/guarantee.svg'
import shipping from '../../assets/shipping.svg'
import support from '../../assets/customer-support.svg'
export function BannerFreight() {
    return (
        <section className={styles.bannerFreight}>
            <article className={styles.banner}>
                <nav className={styles.icons}>
                    <img src={trophy} alt="icon trophy" />
                    <div>
                        <p className={styles.textOne}>High Quality</p>
                        <p className={styles.textTwo}>crafted from top materials</p>
                    </div>
                </nav>
                <nav className={styles.icons}>
                    <img src={guarante} alt="icon guarante" />
                    <div>
                        <p className={styles.textOne}>Warranty Protection</p>
                        <p className={styles.textTwo}>Over 2 years</p>
                    </div>
                </nav>
                <nav className={styles.icons}>
                    <img src={shipping} alt="icon shipping" />
                    <div>
                        <p className={styles.textOne}>Free Shipping</p>
                        <p className={styles.textTwo}>Order over 150 $</p>
                    </div>
                </nav>
                <nav className={styles.icons}>
                    <img src={support} alt="icon support" />
                    <div>
                        <p className={styles.textOne}>24 / 7 Support</p>
                        <p className={styles.textTwo}>Dedicated support</p>
                    </div>
                </nav>
            </article>
        </section>
    )
}