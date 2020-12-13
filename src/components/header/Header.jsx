import React from 'react';
import './header.css';
import Logo from '../logo/Logo';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <>
            <div className="container-header">
                <Logo />
                <ul className="lista-header">
                    <Link to='/' className= "linkHeader">
                        <li>home</li>
                    </Link>
                    <Link to='/produto' className= "linkHeader">
                        <li>produto</li>
                    </Link>
                    <Link to='/suporte' className= "linkHeader">
                        <li>suporte</li>
                    </Link>
                    <Link to='/login' className= "linkHeader">
                        <li>login</li>
                    </Link>
                </ul>
            </div>
        </>
    );
}
export default Header;