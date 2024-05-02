import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons'
import "./Footer.css";
const Footer = () => {
    return (
        <footer>
            <div class="container">
                <div class="footer-content">
                    <h3>Contactame</h3>
                    <p>Email:alejandroabreuhz@gmail.com</p>
                    <p>Phone:674349048</p>
                    <p>Address: 212 Van Horn</p>
                </div>
                <div class="footer-content">
                    <h3>Links</h3>
                    <ul class="list">
                        <li><a href="">Inicio</a></li>
                        <li><a href="">Sobre</a></li>
                        <li><a href="">Servicios</a></li>
                        <li><a href="">Productos</a></li>
                        <li><a href="">Contacto</a></li>
                    </ul>
                </div>
                <div class="footer-content">
                    <h3>Sigueme</h3>
                    <ul class="social-icons">
                        <li><a href="https://twitter.com/wizards_magic"><FontAwesomeIcon icon={faXTwitter} /></a></li>
                        <li><a href="https://www.instagram.com/wizards_magic/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                        <li><a href="https://magic.wizards.com/en"><FontAwesomeIcon icon={faGoogle} /></a></li>

                    </ul>
                </div>
            </div>
            <div class="bottom-bar">
                <p>&copy; 2023 your company . All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;