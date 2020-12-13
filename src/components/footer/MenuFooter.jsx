import React from 'react';
import { Link } from 'react-router-dom';
import './menufooter.css';

function MenuFooter(){
    return(
        <>
            <ul className="lista-footer">
                <Link to='/' className= "linkFooter">
                    <li>home</li>
                </Link>
                <Link to='/produto' className= "linkFooter">
                    <li>produto</li>
                </Link>
                <Link to='/suporte' className= "linkFooter">
                    <li>suporte</li>
                </Link>
                <Link to='/login' className= "linkFooter">
                    <li>login</li>
                </Link>
            </ul>
        </>
    );
}
export default MenuFooter;