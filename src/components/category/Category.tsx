import styles from './Category.module.css'
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom'
import {Api} from "../../service/Api.ts";

interface Category {
    id: string;
    name: string;
    active: boolean;
    url: string;
}

export function Category() {
    const [categories, setCategories] = useState<Category[]>([])
    const history = useNavigate()

    useEffect(() => {
        Api()
            .get("/category")
            .then((response) => setCategories(response.data))
            .catch((error) => {
                console.error("ops! ocorreu um erro" + error)
            })
    }, [])

    const handleCardClick = (id: string) => {
        console.log(id)
        history(`/shop/products/category/${id}`)
    }

    return (
        <div className={styles.categories}>
            <strong>Browse The Range</strong>
            <div className={styles.cardCategories}>
                {categories.map((category) => (
                    <div key={category.id} className={styles.card} onClick={() => handleCardClick(category.id)}>
                        <img src={`https://pub-8e3758e5f78644e5976db2f502602977.r2.dev/${category.url}`} alt={category.name} />
                        <h3>{category.name}</h3>
                    </div>
                ))}
            </div>
        </div>

    )
}