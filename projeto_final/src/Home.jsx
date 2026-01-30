import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <h1>Bem-vindo à Barbearia Corte no Grau RJ</h1>
                    <p>Oferecemos os melhores cortes de cabelo e serviços de barbearia na cidade. Venha nos visitar e sinta a diferença!</p>
                    <Link to="/servicos" className="btn btn-primary">Ver Serviços</Link>
                </div>
                <div className="col-md-6">
                    <div className="bg-light p-5 text-center">
                        <h3>Imagem da Barbearia</h3>
                        <p>Espaço acolhedor e profissional</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;