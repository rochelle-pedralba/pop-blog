import PublicHeader from "./PublicHeader.jsx";
import FeaturedPost from "./FeaturedPost.jsx"
import RecentPost from "./RecentPost.jsx"
import Footer from "./Footer.jsx"

export  default function PublicLayout() {
    return (
        <>
            <PublicHeader/>
            <FeaturedPost/>
            <RecentPost/>
            <Footer/>
        </>
    )
}