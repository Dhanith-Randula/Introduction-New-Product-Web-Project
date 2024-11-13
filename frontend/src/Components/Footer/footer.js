import React from 'react';
// import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { SlSocialDribbble } from 'react-icons/sl';
import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiPlane,
  TiCreditCard,
  TiMail,
  TiMap
} from 'react-icons/ti';
import './footer.css'; 


const Footer = () => {

  return (
    <footer class="footer1">
    <div class="footer-top">
        <div class="container">
          <div class ="col1">
           
            <a href='#' class="brand"> INTRODUCTION NEW PRODUCT  </a>
            <ul class="media-icons">
            
              <li><a href="#"><i class="fab fa-facebook"> <TiSocialFacebook /></i></a></li>
              <li><a href="#"><i class="fab fa-twitter"> <TiSocialTwitter /></i></a></li>
              <li><a href="#"><i class="fab fa-instagram"> <TiSocialInstagram /></i></a></li>
              <li><a href="#"><i class="fab fa-linkedin"><TiSocialLinkedin/></i></a></li>
              <li><a href="#"><i class="fab fa-youtube"><TiSocialYoutube/></i></a></li>

            </ul>
            <img src="./images/Logo.png" alt="Image 6"/> 
          </div>
          <div class ="col2">
            <ul class="menu">
            <li><h4 href="#">About</h4></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Carrers</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Customers</a></li>
            </ul>
            <ul class="menu">
            <li><h4 href="#">Resources</h4></li>

              <li><a href="#">Contact</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
            <ul class="menu">
            <li><h4 href="#">Contact</h4></li>

            <li><a href="#">Help</a></li>
              <li><a href="#">+123 456 7890</a></li>
              <li><a href="#">Advertise</a></li>
              <li><a href="#">Location</a></li>
              <li><a href="#">Support</a></li>

            </ul>
          </div>
          <div class ="col3">
            <h4>News letter</h4>
            <p>Subscribe to our Introduction new Product to get our latest news.</p>
            <form class ="input-wrap" action="#">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
    </div>
    <div class ="footer-bottom">
            <div class="container">
              <p>&copy; 2024 Brand. All Rights Reserved.</p>
              <ul class ="service-icons">
                <li><a href="#"><i class="fab fa-cc-amazon-pay"><TiCreditCard/></i></a></li>
                <li><a href="#"><i class="fab fa-cc-visa"><TiPlane/></i></a></li>
                <li><a href="#"><i class="fab fa-cc-mastercard"><TiMap/></i></a></li>
                <li><a href="#"><i class="fab fa-cc-paypal"><TiMail/></i></a></li>
              </ul>
            </div>
          </div>
    </footer>
  );
};


export default Footer;
