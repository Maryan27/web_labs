import './header.css';
import logo from '../../img/logo_liverpoll.png'; 

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img src={logo} alt="Liverpool Logo" className="logo-image" />
                    </div>
                    <div className="header__title">
                        <span>Liverpool</span>
                        <p>You will never walk alone!</p>
                    </div>
                    <nav className="header__nav">
                        <ul>
                            <li><a href="#!">Shop</a></li>
                            <li><a href="#!">Catalog</a></li>
                            <li><a href="#!">Team</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
