import React from 'react';
import './prosseguir.css';
import LandingForm from '../LandingForm/LandingForm';

function Prosseguir(){
    return(
        <div className="box-texto">
            <div className="container-texto-topo">
                <h1 className="titulo-home">
                    Lorem ipsum dolor sit amet.!!
                </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus maxime odit, consequuntur numquam enim asperiores facilis. Quam sunt tempore soluta eligendi minus? Id voluptatibus laboriosam doloremque ratione quae? Dolores, facilis.</p>
                <LandingForm id='margin-landing'/>
            </div>
        </div>
    );
}
export default Prosseguir;