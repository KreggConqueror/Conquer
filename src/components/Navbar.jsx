import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

export default function Navbar() {
    // Estado para abrir y cerrar el menú móvil
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="navbar">
            {/* BOTÓN HAMBURGUESA (Solo visible en móvil) */}
            <button
                className="navbar-burger"
                onClick={toggleMenu}
                aria-label="Abrir menú"
                aria-expanded={menuOpen}
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            {/* IZQUIERDA (Enlaces) */}
            {/* Si menuOpen es true, se añade la clase 'open' */}
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

            {/* CENTRO (Logo) */}
            <div className="navbar-logo">
                <Link to="/">CONQUER</Link>
            </div>

            {/* DERECHA (Acciones) */}
            <div className="navbar-actions">
                <button aria-label="Buscar">🔍</button>
                <button aria-label="Favoritos">♥</button>
                <button aria-label="Carrito">👜</button>
            </div>
        </header>
    );
}
