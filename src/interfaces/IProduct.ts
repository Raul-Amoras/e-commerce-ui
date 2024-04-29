interface Category {
    id: string;
    name: string;
    active: boolean;
    url: string;
}
interface Image {
    id: string;
    url: string;
    productId: string;
}
export interface IProduct {
    id: string;
    name: string;
    description: string;
    shortDescription: string;
    price: number;
    createdAt: string;
    discount: null | number;
    categoryId: string;
    sku: string;
    images: Image[];
    category: Category;
}