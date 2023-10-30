import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  const [inputValue, setInputValue] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailPattern.test(value));
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      if (isValidEmail) {
        setInputValue("");
      }
    }
  };
  return (
    <div>
      <div className="contacts-container">
        <div className="contacts-left">
          <h3>Keep in touch</h3>
          <p>
            Curious about new offerings? <br /> Sign up for our weekly
            newsletter and stay informed.
          </p>
          <input
            type="email"
            placeholder="Your email"
            value={inputValue}
            onChange={handleInputChange}
            onKeyUp={handleKeyUp}
            className={!isValidEmail ? "invalid-email" : ""}
          />
          {!isValidEmail && (
            <p className="error-message">Please enter a valid email address.</p>
          )}
        </div>
        <div className="contacts-right">
          <h3>Let's Socialize</h3>
          <Link
            className="social-wrapper"
            to={"https://www.facebook.com/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="social-icon" />
            <p>Facebook</p>
          </Link>
          <Link
            className="social-wrapper"
            to={"https://www.twitter.com/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="social-icon" />
            <p>Twitter</p>
          </Link>
          <Link
            className="social-wrapper"
            to={"https://www.instagram.com/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="social-icon" />
            <p>Instagram</p>
          </Link>
        </div>
      </div>
      <div className="footer">
        <div className="footer-left">
          <p>About Us</p>
          <p>Terms & Conditions</p>
          <p>Privacy & Cookies Policies</p>
        </div>
        <div className="footer-right">
          <p>2023</p>
          <div className="copyright-uniLife">
            <FaRegCopyright />
            <p>Fetch</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
