import {React,useState} from 'react';
import ReactDOM from 'react-dom';
import './formlanding.css';
import { Link } from 'react-router-dom';

function LandingForm(){
    const [email, setEmail] = useState("");
    const handleChangeEmail = (e) =>{
        setEmail(e.target.value)
        e.preventDefault();
        
    }
    
    return(
        <div id='box-landing'>
            <p id="form-landing">Quer se tornar um assinante? Informe seu email para criar uma assinatura.</p> 
            <div className='box-inputLanding'>
                <input onChange={handleChangeEmail} className="input-landing" type="text" placeholder="Email" value={email}/>
                <Link  to='/cadastro' className='btn-landing'>
                    <p>prosseguir</p>
                </Link>
            </div>
        </div>
    );
}

export default LandingForm;