import {IProduct} from "./IProduct.ts";

export interface ApiResponse {
    data: IProduct[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}