import {Header} from "../components/header/Header.tsx";
import {Outlet} from "react-router-dom";
import {Footer} from "../components/footer/Footer.tsx";
import {BannerFreight} from "../components/bannerFreight/BannerFreight.tsx";

export function DefaultLayout() {
    return (
        <div>
            <Header />
            <Outlet />
            <BannerFreight />
            <Footer />
        </div>
    )
}