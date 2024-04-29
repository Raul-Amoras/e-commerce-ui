import styles from './Header.module.css'
import logo from '../../assets/logo.svg'
import {Icon} from "@iconify/react";

export function Header(){
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="logo" />
                <strong>Furniro</strong>
            </div>

            <div className={styles.router}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>

            <div className={styles.icons}>
                <ul>
                    <li><a href="/"><Icon fontSize={28} icon={'mdi:account-alert-outline'} /></a></li>
                    <li><a href="/shop"><Icon fontSize={28} icon={'akar-icons:search'} /></a></li>
                    <li><a href="/about"><Icon fontSize={28} icon={'akar-icons:heart'} /></a></li>
                    <li><a href="/contact"><Icon fontSize={28} icon={'ant-design:shopping-cart-outlined'} /></a></li>
                </ul>
            </div>

        </header>
        
    )
}