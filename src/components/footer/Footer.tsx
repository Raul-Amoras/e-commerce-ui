import styles from './Footer.module.css'
export function Footer() {
    return (
        <footer>
            <section className={styles.footerCenter}>
                <article>
                    <nav className={styles.address}>
                        <h5><a className={styles.logoFooter} href={"/home"}>Funiro.</a></h5>
                        <p>400 University Drive Suite 200 Coral</p>
                        <p>Gables,</p>
                        <p>FL 33134 USA</p>
                    </nav>
                    <nav>
                        <h5>Links</h5>
                        <ul className={styles.company}>
                            <li><a href="" className={styles.link}>Home</a></li>
                            <li><a href="" className={styles.link}>Shop</a></li>
                            <li><a href="" className={styles.link}>About</a></li>
                            <li><a href="" className={styles.link}>Contact</a></li>
                        </ul>
                    </nav>
                    <nav className={styles.help}>
                        <h5>Help</h5>
                        <ul className={styles.company}>
                            <li><a href="" className={styles.link}>Payment Options</a></li>
                            <li><a href="" className={styles.link}>Returns</a></li>
                            <li><a href="" className={styles.link}>Privacy Policies</a></li>
                        </ul>
                    </nav>
                    <address>
                        <h5>Newsletter</h5>
                        <form action="subscribe.php" method="post">
                            <input type="text" placeholder="Enter Your Email Address" />
                                <button type="submit">SUBSCRIBE</button>
                        </form>
                    </address>
                </article>
                <article className={styles.footerEnd}>
                    <p>Made With Love By Raul Amoras All Right Reserved </p>
                </article>
            </section>
        </footer>
    )
}