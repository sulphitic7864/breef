import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div id="footer">
      <div className="footer-container">
        
        {/* Top dotted line */}
        <div className="footer-divider"></div>

        {/* Logo + Social Follow Text */}
        <div className="footer-top">
          <img
            src="/src/assets/images/footer-logo-1.png"
            alt="Logo"
            className="footer-logo"
          />
          <p className="footer-follow">
            // Follow TOP CREATIVE on the Social Media
          </p>

          {/* Social Icons */}
          <div className="footer-social">
            <a href="#"><img src="/src/assets/images/rss_icon01.jpg" alt="" /></a>
            <a href="#"><img src="/src/assets/images/linkedin_icon01.jpg" alt="" /></a>
            <a href="#"><img src="/src/assets/images/google_Icon01.jpg" alt="" /></a>
            <a href="#"><img src="/src/assets/images/twitter_icon01.jpg" alt="" /></a>
            <a href="#"><img src="/src/assets/images/facebook_icon01.jpg" alt="" /></a>
          </div>
        </div>

        {/* Footer Menu */}
        <div className="footer-menu">
          <ul>
            <li><a href="aboutus.htm">ABOUT US</a></li>
            <li><a href="#">BLOG & FORUMS</a></li>
            <li><a href="#">NEWS</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">AFFILIATES</a></li>
            <li><a href="#">SOCIAL RESPONSIBILITY</a></li>
            <li><a href="#">SITE MAP</a></li>
            <li><a href="#">CONTACT US</a></li>
            <li className="last"><a href="#">HELP</a></li>
          </ul>
        </div>

        {/* Bottom Links + Copyright */}
        <div className="footer-bottom-section">
          <div className="footer-left">
            <a href="#">Terms and Conditions</a>
            <span>&nbsp; | &nbsp;</span>
            <a href="#">Privacy Statement</a>
          </div>

          <div className="footer-right">
            <span>Copyright © 2012 MYMEDIA // </span>
            <a href="#">
              <img src="/src/assets/images/footer-logo.png" alt="Footer Logo" className="footer-small-logo" />
            </a>
          </div>
        </div>

      </div>

      {/* Back To Top Button */}
      <a href="#" className="back-to-top">
        <img src="images/for-top.png" alt="" />
      </a>
    </div>
  );
}
