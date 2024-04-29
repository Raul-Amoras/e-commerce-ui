import styles from './Product.module.css'
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {Api} from "../../service/Api.ts";
import {Icon} from "@iconify/react";
import {IProduct} from "../../interfaces/IProduct.ts";
import {IPagination} from "../../interfaces/IPagination.ts";

interface ProductParams {
    id?: string;
    page?: number;
    limit?: number;
    sortOrder?: string;
}

interface ProductProps {
    setPagination?: (pagination: IPagination) => void;
    params?: ProductParams; // Tornando os parâmetros opcionais
}
export function Product({ setPagination, params }: ProductProps) {
    const { id, page, limit, sortOrder } = params || {} ;
    const [products, setProducts] = useState<IProduct[]>([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const isNewProduct = (createdAt: Date) => {
        const creationDate: Date = new Date(createdAt);
        const today: Date = new Date();
        const diffTime = Math.abs(today - creationDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays <= 5;
    };

    useEffect(() => {
        let url = 'http://localhost:3333/products/all';
        const queryParams = [];

        if (id) queryParams.push(`categoryId=${encodeURIComponent(id)}`);
        if (page) queryParams.push(`page=${encodeURIComponent(page)}`);
        if (limit) queryParams.push(`limit=${encodeURIComponent(limit)}`);
        if (sortOrder) queryParams.push(`order=${encodeURIComponent(sortOrder)}`);

        if (queryParams.length > 0) {
            url += `?${queryParams.join('&')}`;
        }

        setLoading(true);
        Api()
            .get( url)
            .then(response => {
                const { data, total, page, limit, totalPages } = response.data;
                setProducts(data);
                if (setPagination) {
                    setPagination({ total, page, limit, totalPages });
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch products:", err);
                setError(err.message);
                setLoading(false);
            });

    }, [id, page, limit, sortOrder,setPagination]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    return (
        <div>
            {products.length > 0 ? (

                <div className={styles.products}>
                    {products.map(product => (
                        <div key={product.id} className={styles.cardProduct}>
                            {product.images.length > 0 ? (
                                <img src={`https://pub-8e3758e5f78644e5976db2f502602977.r2.dev/${product.images[0].url}`} alt={product.name}  />
                            ) : (
                                <div className={styles.cardProductNoImage}>No Image</div>
                            )}
                            {isNewProduct(product.createdAt) && (
                                <div className={styles.newTag}>
                                    New
                                </div>
                            )}
                            <div className={styles.cardProductDescription}>
                                <h3>{product.name}</h3>
                                <p className={styles.shortDescription}>{product.shortDescription}</p>
                                <p>
                                    {product.discount ? (
                                        <>
                                            <span className={styles.discountTag}>
                                                -{product.discount}%
                                            </span>
                                            <span style={{ marginRight: '20px' }}>
                                            {(product.price - ((product.price * product.discount)/100)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                        </span>
                                            <span style={{ textDecoration: 'line-through', color:'#B0B0B0' }}>
                                            {(product.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                        </span>
                                        </>
                                    ) : (
                                            <span>{(product.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                                    )}
                                </p>
                            </div>
                            <div className={styles.cardProductOverlay}>
                                <Link to={`/shop/product/${product.id}`}>
                                    <button>See Details</button>
                                </Link>
                                <div className={styles.cardProductIcons}>
                                    <label>
                                        <Icon icon={'gridicons:share'} />
                                        Share
                                    </label>
                                    <label>
                                        <Icon icon={'material-symbols:compare-arrows'} />
                                        Compare
                                    </label>
                                    <label>
                                        <Icon icon={'ph:heart-light'} />
                                        Like
                                    </label>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No products found.</p>
            )}
        </div>
    )
}