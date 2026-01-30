import React from 'react';

const Contato = () => {
    return (
        <div className="container mt-5">
            <h1>Contato</h1>
            <p>Entre em contato conosco para agendar seu horário ou tirar dúvidas.</p>
            <p><strong>Endereço:</strong> Rua Exemplo, 123 - Rio de Janeiro, RJ</p>
            <p><strong>Telefone:</strong> (21) 1234-5678</p>
            <p><strong>Email:</strong> contato@cortenograu.com</p>
            <form>
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input type="text" className="form-control" id="nome" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="mensagem" className="form-label">Mensagem</label>
                    <textarea className="form-control" id="mensagem" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
};

export default Contato;