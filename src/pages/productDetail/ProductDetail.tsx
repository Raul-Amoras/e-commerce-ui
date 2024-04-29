import styles from './ProductDetail.module.css'
import {Icon} from "@iconify/react";
import {Rating} from "@mui/material";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {IProduct} from "../../interfaces/IProduct.ts";
import {Api} from "../../service/Api.ts";
import {Product} from "../../components/product/Product.tsx";
export function ProductDetail() {
    const { id } = useParams();
    const [value, setValue] = useState<number | null>(4);
    const [product, setProduct] = useState<IProduct | null>(null);
    const [selectedImage, setSelectedImage] = useState('');
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id){
            setLoading(true);
            Api()
                .get(`http://localhost:3333/products/${id}`)
                .then(response => {
                    setProduct(response.data.product);
                    setSelectedImage(response.data.product.images[0].url)
                    setLoading(false);
                })
                .catch(err => {
                    console.error("Failed to fetch products:", err);
                    setError(err.message);
                    setLoading(false);
                });
        }
    }, [id]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;


    return (
        <div>
            <div className={styles.path}>
                <a href="/">Home</a>
                <Icon icon={'dashicons:arrow-right-alt2'} />
                <a href='/shop' className={styles.linkSelect}>Shop</a>
                <Icon icon={'dashicons:arrow-right-alt2'} />
                <span></span>
                <strong>{product ? product.name : 'name do produto'}</strong>
            </div>
            {product ? (
                <div className={styles.productDetail}>
                    <div className={styles.picture}>
                        <div className={styles.pictureDisplayed}>
                            <div className={styles.smallPicture}>
                                {product.images.map((image) => (
                                    <img
                                        key={image.id}
                                        src={`https://pub-8e3758e5f78644e5976db2f502602977.r2.dev/${image.url}`}
                                        alt={image.id}
                                        onClick={() => setSelectedImage(image.url)}
                                    />
                                ))}
                            </div>
                            <div className={styles.grandPicture}>
                                <img src={`https://pub-8e3758e5f78644e5976db2f502602977.r2.dev/${selectedImage}`} alt="Selected" />
                            </div>
                        </div>
                        <div className={styles.detail}>
                            <h1>{product.name}</h1>
                            <h3>{product.discount ? (
                                <>
                                            <span style={{ marginRight: '20px' }}>
                                            {(product.price - ((product.price * product.discount)/100)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                        </span>
                                    <span style={{ textDecoration: 'line-through', color:'#B0B0B0' }}>
                                            {(product.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                        </span>
                                </>
                            ) : (
                                <span>{(product.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                            )}</h3>
                            <div className={styles.rating}>
                                <Rating name="read-only" value={value} readOnly />
                                <span className={styles.borderLeft}></span>
                                <p>{value} Customer Review</p>
                            </div>

                            <p className={styles.descriptProduct}>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
                                stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended
                                highs for a sound.
                            </p>
                            <div className={styles.productButton}>
                                <input type="number" placeholder={'1'}/>
                                <button >Add To Cart</button>
                                <button >+ Compare</button>
                            </div>
                            <div className={styles.productInfo}>
                                <div className={styles.productInfoName}>
                                    <p>SKU</p>
                                    <p>Category</p>
                                    <p>Tags</p>
                                    <p>Share</p>
                                </div>
                                <div className={styles.productInfoSpan}>
                                    <p>:</p>
                                    <p>:</p>
                                    <p>:</p>
                                    <p>:</p>
                                </div>
                                <div className={styles.productInfoAndIcons}>
                                    <p>SS001</p>
                                    <p>Sofas</p>
                                    <p>Sofa, Chair, Home, Shop</p>

                                    <Icon className={styles.productIcons} fontSize={20} icon={'akar-icons:facebook-fill'} />
                                    <Icon className={styles.productIcons} fontSize={20} icon={'akar-icons:linkedin-box-fill'} />
                                    <Icon className={styles.productIcons} fontSize={20} icon={'ant-design:twitter-circle-filled'} />


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <div className={styles.title}>
                            <span className={styles.h1}>Description</span>
                             <span>Additional Information</span>
                        </div>
                        <p>
                            {product.description}
                        </p>
                    </div>
                    <div className={styles.title}>
                        <span>Related Products</span>
                    </div>
                    <Product params={{limit:4}}/>
                    <div className={styles.showMore}>
                        <a  href="/shop">Show More</a>
                    </div>
                </div>

                ) : (
                <p>No products found.</p>
                )}

        </div>
    )
}