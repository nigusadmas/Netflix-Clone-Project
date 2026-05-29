import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div class="footer-container">
          <p class="footer-title">Questions? Call 000-800-919-1694</p>

          <div class="footer-links">
            <div class="footer-column">
              <a href="#">FAQ</a>
              <a href="#">Investor Relations</a>
              <a href="#">Privacy</a>
              <a href="#">Speed Test</a>
            </div>

            <div class="footer-column">
              <a href="#">Help Center</a>
              <a href="#">Jobs</a>
              <a href="#">Cookie Preferences</a>
              <a href="#">Legal Notices</a>
            </div>

            <div class="footer-column">
              <a href="#">Account</a>
              <a href="#">Ways to Watch</a>
              <a href="#">Corporate Information</a>
              <a href="#">Only on Netflix</a>
            </div>

            <div class="footer-column">
              <a href="#">Media Center</a>
              <a href="#">Terms of Use</a>
              <a href="#">Contact Us</a>
            </div>
          </div>

          <button class="language-btn">English</button>

          <p class="footer-country">Netflix Ethiopia</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
