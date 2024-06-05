import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footerContent">
        <div className="footerContentLeft">
          <img className="logo" src={assets.logo} alt="" />
          <p>We are the best in food delivery.</p>
          <div className="footerSocialIcons">
            <a href="https://github.com/benjminrichie/alx-SwiftOrder_App">
            <img src={assets.git} alt="" />
            <br />
            <small href="https://github.com/benjminrichie/alx-SwiftOrder_App">source code</small>
            </a>
          </div>
        </div>
        <div className="footerContentCentre">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footContentRight">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>07081868797</li>
            <li>09160765827</li>
            <li>09015069742</li>
            <li>
              <a href="mailto:benjminrichie@email.com">
                benjminrichie@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footerCopyRight">
        &copy; Yomex, Twitch and benjminrichie {new Date().getFullYear()}
      </p>
    </div>
  );
}

export default Footer;