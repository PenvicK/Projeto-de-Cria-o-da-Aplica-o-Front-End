import React from 'react';
import './styles/login.css';


function Login(){
    return(
        <div className="container-login">
            <span id="text-login">login</span>
            <input type="text" placeholder="Email" className="input-login"/>
            <input type="password" placeholder="Senha" className="input-login" id="sen-login"/>
            <a href="/esqueceu-a-senha" id="esq-sen">Esqueceu a senha?</a>
            <div>
                <a href="/entrar" className="btn-login">entrar</a>
                <a href="/cadastro" className="btn-login" id="btn-login">Cadastrar</a>
            </div>            
        </div>
    );
}
export default Login;