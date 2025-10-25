import logo from '../assets/popblog.png'

export default function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="overview">
                  <span>
                      <img src={logo} alt="pop blog logo" />
                      <h3>Pop! Blog</h3>
                  </span>
                    <p>Your destination for latest music updates</p>
                </div>
                <div className="quick-links">
                    <h4>Quick Links</h4>
                    <a>Home</a>
                    <a>Articles</a>
                    <a>About</a>
                </div>
                <div className="categories">
                    <h4>Categories</h4>
                    <a>Songwriting</a>
                    <a>Music Production</a>
                    <a>Music Lifestyle</a>
                    <a>World Music</a>
                </div>
            </div>
            <p>© 2025 Pop! Blog. All rights reserved.</p>
        </footer>
    )
}