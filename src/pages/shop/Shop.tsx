import {Icon} from "@iconify/react";
import styles from './Shop.module.css'
import {Product} from "../../components/product/Product.tsx";
import {useState} from "react";
import {IPagination} from "../../interfaces/IPagination.ts";
import Pagination from "@mui/material/Pagination";

export function Shop(){
    const [pagination, setPagination] = useState<IPagination>({ total: 0, page: 0, limit: 0, totalPages: 0 });
    return (
        <>
            <div className={styles.subHeader}>
                <div className={styles.content}>
                    <h1>Shop</h1>
                    <div className={styles.navLinks}>
                        <a href="/">Home</a><Icon icon={'dashicons:arrow-right-alt2'} /><a href='/shop' className={styles.linkSelect}>Shop</a>
                    </div>
                </div>
            </div>
            <div className={styles.filter}>
                <div className={styles.page}>
                    <Icon fontSize={30} icon={'system-uicons:filtering'} />
                    <span>filter</span>
                    <Icon fontSize={30} icon={'ci:grid-big-round'} />
                    <Icon fontSize={30} icon={'bi:view-list'} />
                    <span className={styles.borderLeft}></span>
                    <p>Showing 1–16 of 32 results</p>
                </div>
                <div className={styles.input}>
                    <label>
                        Show
                        <input className={styles.inputPage} type="text" placeholder={'16'}/>
                    </label>
                    <label>
                        Short by
                        <input type="text" placeholder={'Default'}/>
                    </label>
                </div>
            </div>
            <Product setPagination={setPagination} />
            <div className={styles.products}>
                <Pagination count={pagination.totalPages} variant="outlined" shape="rounded" />
            </div>
        </>
    )
}