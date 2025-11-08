import React from "react";
import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <p>© Copy Right</p>
        <p>
          <a href="https://www.linkedin.com/in/zakir-k-a6510938b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
            <FaLinkedin />
            LinkedIn
          </a>
          <a href="https://www.facebook.com/share/1EX2XjnV9c/?mibextid=wwXIfr"><FaFacebookSquare />Facebook
          </a>
          <a href="https://www.instagram.com/muhammad__zakir_khan?igsh=aHB6bGRsczh5M2Vt&utm_source=qr"><FaSquareInstagram />Instagram
          </a>
        </p>
      </footer>
    </>
  );
}
