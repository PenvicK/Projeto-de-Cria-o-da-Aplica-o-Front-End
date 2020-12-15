import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/cadastro.css';

function Cadastro(){
    const [id,setId] = useState(1);
    const [nome,setNome] = useState("");
    const [cpf,setCpf] = useState("");
    const [telefone,setTelefone] = useState("");
    const [dia,setDia] = useState("");
    const [mes,setMes] = useState("");
    const [ano,setAno] = useState("");
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");
    const [confirmarSenha,setConfirmarSenha] = useState("");
    const [changeCheck,setChangeCheck] = useState(false);
    const [objPessoa, setObjPessoa] = useState("");
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Id: " + id);
        console.log("Nome: "+ nome);
        console.log("CPF: "+ cpf);
        console.log("Telefone: "+ telefone);
        console.log("Data de Nascimento: "+ dia + '/' + mes + '/' + ano);
        console.log("Email: "+ email);
        console.log("Senha: "+ senha);
        console.log("Confirmar Senha: "+ confirmarSenha);
        console.log("Receber Notificações: " + changeCheck)
        console.log(objPessoa)

        const Pessoas = {
            id: id,
            nome: nome,
            cpf: cpf,
            telefone: telefone,
            "data de nascimento": dia + "/" + mes + "/" + ano,
            email: email,
            senha: senha,
            "confirmar senha": confirmarSenha,
            "receber notificacoes": changeCheck,
        }
        setObjPessoa([Pessoas]);
        setId(id+1);
        setNome("");
        setCpf("");
        setTelefone("");
        setDia("");
        setMes("");
        setAno("");
        setEmail("");
        setSenha("");
        setConfirmarSenha("");
        setChangeCheck(false);
    }
    const handleChangeNome = (e) =>{
        e.preventDefault();
        setNome(e.target.value)
    }
    const handleChangeCpf = (e) =>{
        e.preventDefault();
        setCpf(e.target.value)
    }
    const handleChangeTelefone = (e) =>{
        e.preventDefault();
        setTelefone(e.target.value)
    }
    const handleChangeDia = (e) =>{
        e.preventDefault();
        setDia(e.target.value)
    }
    const handleChangeMes = (e) =>{
        e.preventDefault();
        setMes(e.target.value)
    }
    const handleChangeAno = (e) =>{
        e.preventDefault();
        setAno(e.target.value)
    }
    const handleChangeEmail = (e) =>{
        e.preventDefault();
        setEmail(e.target.value)
    }
    const handleChangeSenha = (e) =>{
        e.preventDefault();
        setSenha(e.target.value)
    }
    const handleChangeConfirmarSenha = (e) =>{
        e.preventDefault();
        setConfirmarSenha(e.target.value)
    }
    const handleChangeCheck = (e) =>{
        setChangeCheck(e.target.checked)
    }
    return(
        <>
          <form onSubmit={handleSubmit} className="container-form">
            <span className="title-cadastro">Cadastro</span>
            <input onChange={handleChangeNome} type="text" placeholder="Nome Completo" className="input-cadastro" value={nome}/>
            <input onChange={handleChangeCpf} type="text" placeholder="CPF" className="input-cadastro" value={cpf}/>
            <input onChange={handleChangeTelefone} type="text" placeholder="Telefone" className="input-cadastro" value={telefone}/>
            <div id="input-cadastro">
                <input onChange={handleChangeDia} type="text" placeholder="Dia" className="input-cadastro-nas" value={dia}/>
                <input onChange={handleChangeMes} type="text" placeholder="Mês" className="input-cadastro-nas" value={mes}/>
                <input onChange={handleChangeAno} type="text" placeholder="Ano" className="input-cadastro-nas" value={ano}/>
            </div>
            <input onChange={handleChangeEmail} type="text" placeholder="Email" className="input-cadastro" value={email}/>
            <input onChange={handleChangeSenha} type="password" placeholder="Senha" className="input-cadastro" value={senha}/>
            <input onChange={handleChangeConfirmarSenha} type="password" placeholder="Confirmar Senha" className="input-cadastro" value={confirmarSenha}/>
            <div className="container-check">
                <input className="input-check" type="checkbox" onChange={handleChangeCheck} checked={changeCheck}/>
                <span className="texto-check">Receber Notificações</span>
            </div>
            <input className="btn-cadastrar" type="submit" value="Cadastrar"/>
          </form>
        </>
    );
}
export default Cadastro;