import { NavLink } from "react-router-dom";
import './Header.css';

function Header() {
    return (
        <header className="site-header">
            <div className="wrap">
                <div className="header-container">
                    <div className="main-logo">
                        <NavLink>
                            <img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/codeacademy-black.svg" alt=''></img>
                        </NavLink>
                    </div>
                    <nav className="nav-primary">
                        <div className="nav-primary-inner">
                            <ul className="nav">
                                <NavLink className="menu-item" to="../news">Naujienos</NavLink>
                                <NavLink className="menu-item" to="../programs">Programos</NavLink>
                                <NavLink className="menu-item" to="../counter">Counter</NavLink>
                                <NavLink className="menu-item" to="../shopping_list">Shoping List</NavLink>
                                <NavLink className="menu-item" to="../shop">Shop</NavLink>
                                <NavLink className="menu-item" to="../cities_list">Cities List</NavLink>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
export default Header;
