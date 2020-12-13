import React from 'react';
import './footer.css';
import MenuFooter from './MenuFooter'
import { AiFillInstagram as Insta, AiFillFacebook as Facebook, AiFillTwitterSquare as Twitter } from "react-icons/ai";
import { FaPhoneAlt as Phone } from "react-icons/fa"; 
import { MdEmail as Email } from "react-icons/md";

function Footer(){
    return(
        <div className="box-footer">
            <div className="container-footer">
                <MenuFooter />
                <ul className="contatos-footer">
                    <li><Phone className="icons-footer"/>(45)4002-8922</li>
                    <li><Phone className="icons-footer"/>(45)7009-0461</li>
                    <li><Email className="icons-footer"/>valorant@support.com</li>
                </ul>
                <ul className="redes-sociais-footer">
                    <li><Insta className="icons-footer"/>@Valorant</li>
                    <li><Facebook className="icons-footer"/>@Valorant</li>
                    <li><Twitter className="icons-footer"/>@Valorant</li>
                </ul>
            </div>
            <div className="copy-footer">
                <p id="copyRight">© Copyright 2020 Valorant Streaming. All rights reserved.</p>
            </div>
        </div>
    );
}
export default Footer;