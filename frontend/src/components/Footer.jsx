import logo from '../assets/popblog.png'
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="overview">
                  <span>
                      <img src={logo} alt="pop blog logo" />
                      <h3>Pop! Blog</h3>
                  </span>
                    <h4>Your destination for latest music updates</h4>
                </div>
                <div className="quick-links">
                    <h4>Quick Links</h4>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/article"}>Articles</Link>
                    <Link to={"/about"}>About</Link>
                    <Link to={"/login"}>Login</Link>
                    <Link to={"/signup"}>Sign Up</Link>
                </div>
                <div className="categories">
                    <h4>Categories</h4>
                    <Link to={"/songwriting"}>Songwriting</Link>
                    <Link to={"/music-production"}>Music Production</Link>
                    <Link to={"/music-lifestyle"}>Music Lifestyle</Link>
                    <Link to={"/world-music"}>World Music</Link>
                </div>
            </div>
            <hr/>
            <p>© 2025 Pop! Blog. All rights reserved.</p>
        </footer>
    )
}