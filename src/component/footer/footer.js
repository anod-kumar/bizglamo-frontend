import React  from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="midFooter">
        <h1>BIZGLAMO.</h1>
        <p><a href="/terms_condition">Term & Conditions</a> <span></span> <a href="/privacy_policy">Privacy Policy</a></p>
      </div>
      <div className="rightleft">
        <div className="leftFooter">
          <h2>Navigation</h2>
          <div className="fnav">
            <ul>
              <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/about_us">ABOUT us</a></li>
                <li><a href="/blog">BLOG</a></li>
                <li><a href="/contact_us">CONTACT uS</a></li>
              </ul>
            </ul>
          </div>
        </div>
        <div className="rightFooter">
          <h2>Support Us</h2>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqbQMPJMgpnWmHWlRDfdZpbtDQfrntBFLHMtCltsfQsHSHtMmKJTmjcBPQJPfDKwJhqjHL" target="_blank">bizglamo@gmail.com</a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;