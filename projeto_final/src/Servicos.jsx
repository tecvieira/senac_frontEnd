import React from 'react';

const Servicos = () => {
    return (
        <div className="container mt-5">
            <h1>Nossos Serviços</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Cortes de Cabelo</h5>
                            <p className="card-text">Cortes modernos e clássicos para todos os estilos.</p>
                            <p className="card-text"><strong>R$ 30,00</strong></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Barba</h5>
                            <p className="card-text">Aparos e modelagens de barba com precisão.</p>
                            <p className="card-text"><strong>R$ 20,00</strong></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Tintura</h5>
                            <p className="card-text">Tinturas e colorações para um visual renovado.</p>
                            <p className="card-text"><strong>R$ 50,00</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Servicos;