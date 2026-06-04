import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="navbar">
            <button
                className="navbar-burger"
                onClick={toggleMenu}
                aria-label="Abrir menú"
                aria-expanded={menuOpen}
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
                <Link to="/hoodies" onClick={() => setMenuOpen(false)}>
                    Sudaderas
                </Link>
                <Link to="/men" onClick={() => setMenuOpen(false)}>
                    Hombre
                </Link>
                <Link to="/women" onClick={() => setMenuOpen(false)}>
                    Mujer
                </Link>
            </nav>

            <div className="navbar-logo">
                <Link to="/">CONQUER</Link>
            </div>

            <div className="navbar-actions">
                <button aria-label="Buscar">🔍</button>
                <button aria-label="Favoritos">♥</button>
                <Link to="/cart">
                    🛍
                </Link>
            </div>
        </header>
    );
}
