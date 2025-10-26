import { Link } from "react-router-dom";
import app_logo from "../assets/popblog.png"
import user from "../assets/user.svg"

export default function PublicHeader() {
    return (
        <header className="header">
            <div className="logo-container">
                <img src={app_logo} alt="application logo" />
                <p>Pop! Blog</p>
            </div>

            <div className="page-container">
                <Link to={"/"}>Home</Link>
                <Link to={"/article"}>Articles</Link>
                <Link to={"/about"}>About</Link>
            </div>

            <div className="login-container">
                <img src={user} alt="user icon" />
                <Link  to={"/login"}>Login</Link>
            </div>
        </header>
    )
}