import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons'
import "./Footer.css";
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <h3>Contactame</h3>
                    <p>Email:alejandroabreuhz@gmail.com</p>
                    <p>Phone:674349048</p>
                    <p>Address: 212 Van Horn</p>
                </div>
                <div className="footer-content">
                    <h3>Links</h3>
                    <ul className="list">
                        <li><a href="/Home">Inicio</a></li>
                        <li><a href="">Sobre</a></li>
                        <li><a href="/ffRss.xml">RSS</a></li>
                    </ul>
                </div>
                <div className="footer-content">
                    <h3>Sigueme</h3>
                    <ul className="social-icons">
                        <li><a href="https://twitter.com/shitpost_2077/status/1790253206146089013"><FontAwesomeIcon icon={faXTwitter} /></a></li>
                        <li><a href="https://www.instagram.com/jovanivazquez.jovaaa/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                        <li><a href="https://www.universalpictures.es/micro/fast-y-furious-x"><FontAwesomeIcon icon={faGoogle} /></a></li>

                    </ul>
                </div>
            </div>
            <div className="bottom-bar">
                <p>&copy; 2024 your company . All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;