
import {Home} from "./pages/home/Home.tsx";
import {Shop} from "./pages/shop/Shop.tsx";
import {About} from "./pages/About.tsx";
import {Contact} from "./pages/Contact.tsx";
import {DefaultLayout} from "./layouts/DefaultLayout.tsx";
import {ProductDetailLayout} from "./layouts/ProductDetailLayout.tsx";
import {ProductDetail} from "./pages/productDetail/ProductDetail.tsx";
import {Navigate, Route, Routes} from "react-router-dom";
import {PageNotFound} from "./pages/pageNotFound/PageNotFound.tsx";

export function Router() {
    return (
        <Routes>
            <Route path={"/"} element={<DefaultLayout />}>
                <Route path={"/"} element={<Home />} />
                <Route path={"/shop"} element={<Shop />} />
                <Route path={"/shop/products/category/:id"} element={<Shop />} />
                <Route path={"/About"} element={<About />} />
                <Route path={"/contact"} element={<Contact />} />
                <Route path={"/pagenotfound"} element={<PageNotFound />} />
            </Route>

            <Route path={"/shop"} element={<ProductDetailLayout />}>
                <Route path={"/shop/product/:id"} element={<ProductDetail />} />
            </Route>
            <Route path={"*"}  element={<Navigate to={"/pagenotfound"} />}></Route>
        </Routes>
    )
}