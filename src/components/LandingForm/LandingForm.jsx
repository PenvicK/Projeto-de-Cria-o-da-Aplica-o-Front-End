import React from 'react';
import './formlanding.css';
import { Link } from 'react-router-dom';

function LandingForm(){
    return(
        <div id='box-landing'>
            <p id="form-landing">Quer se tornar um assinante? Informe seu email para criar uma assinatura.</p> 
            <div className='box-inputLanding'>
                <input className="input-landing" type="text" placeholder="Email" />
                <Link to='/oops' className='btn-landing'>
                    <p>prosseguir</p>
                </Link>
            </div>
        </div>
    );
}
export default LandingForm;