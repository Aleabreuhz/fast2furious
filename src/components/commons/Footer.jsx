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
                    <h3>Contact Us</h3>
                    <p>Email:Info@example.com</p>
                    <p>Phone:+121 56556 565556</p>
                    <p>Address:Your Address 123 street</p>
                </div>
                <div class="footer-content">
                    <h3>Quick Links</h3>
                    <ul class="list">
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Products</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-content">
                    <h3>Follow Us</h3>
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