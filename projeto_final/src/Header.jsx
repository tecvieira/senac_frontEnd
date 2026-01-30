import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'black' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Corte no Grau RJ</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Início</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sobre">Sobre</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/servicos">Serviços</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contato">Contato</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}