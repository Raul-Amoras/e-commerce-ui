import {Header} from "../components/header/Header.tsx";
import {Outlet} from "react-router-dom";
import {Footer} from "../components/footer/Footer.tsx";

export function ProductDetailLayout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>

    )
}