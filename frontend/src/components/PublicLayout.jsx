import { Outlet } from "react-router-dom";
import PublicHeader from "./PublicHeader.jsx";
import Footer from "./Footer.jsx"

export  default function PublicLayout() {
    return (
        <div className="public-layout">
            <PublicHeader/>

            <main>
                <Outlet />
            </main>

            <Footer/>
        </div>
    )
}