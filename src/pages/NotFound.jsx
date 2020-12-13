import React from 'react';
import './styles/notfound.css';
import { FaRobot as Robot } from 'react-icons/fa';
import Logo from '../components/logo/logo.png';
import { Link } from 'react-router-dom';

function NotFound(){
    return(
        <div className="not-found">
            <Robot id="robot-not"/>
            <div className="div-msg">
                <img src={Logo} alt="Valorant" id='logo-not'/>
                <span id="Erro404">Erro 404</span>
                <span id="Erro404-texto">
                    Página não encontrada, retorne para outra página
                    <span className="btn-voltar">
                        <Link to="/"id="btn-voltar">
                            voltar
                        </Link>
                    </span>
                </span>
            </div>
        </div>
    );
}
export default NotFound;