import {Icon} from "@iconify/react";
import styles from './Shop.module.css'
import {Product} from "../../components/product/Product.tsx";
import React, {useEffect, useState} from "react";
import {IPagination} from "../../interfaces/IPagination.ts";
import Pagination from "@mui/material/Pagination";

export function Shop(){
    const [pagination, setPagination] = useState<IPagination>({ total: 0, page: 0, limit: 16, totalPages: 0 });
    const [limitInput, setLimitInput] = useState(pagination.limit.toString());
    const [sortOrder, setSortOrder] = useState("");
    const startIndex = (pagination.page - 1) * pagination.limit + 1;
    const endIndex = Math.min(startIndex + pagination.limit - 1, pagination.total);

    const handlePageChange = (event: React.ChangeEvent<unknown>, newPage: number): void => {
        setPagination(prev => ({ ...prev, page: newPage }));
    };

    const handleLimitChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const newLimit = parseInt(event.target.value, 10);
        if (!isNaN(newLimit) && newLimit > 0) {
            setPagination(prev => ({ ...prev, limit: newLimit }));
            setLimitInput(event.target.value);
        }
    };

    const handleSortChange = (event) => {
        const selectedSortOrder = event.target.value;
        setSortOrder(selectedSortOrder);
    };

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
                    <p>Showing {startIndex}–{endIndex} of {pagination.total} results</p>
                </div>
                <div className={styles.input}>
                    <label>
                        Show
                        <input className={styles.inputPage}
                               type="text" placeholder={'16'}
                               value={limitInput}
                               onChange={handleLimitChange}/>
                    </label>
                    <label>
                        Short by
                        <select value={sortOrder} onChange={handleSortChange} className={styles.shortBy}>
                            <option value="">Default</option>
                            <option value="crescente">Crescente</option>
                            <option value="descrescente">Descrescente</option>
                        </select>
                    </label>
                </div>
            </div>
            <Product setPagination={setPagination} params={{sortOrder}} />
            <div className={styles.products}>
                <Pagination
                    count={pagination.totalPages}
                    page={pagination.page}
                    onChange={handlePageChange}
                    variant="outlined"
                    shape="rounded" />
            </div>
        </>
    )
}