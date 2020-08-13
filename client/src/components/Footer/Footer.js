import React from "react";
import TextButton from "../Button/TextButton/TextButton";
const Footer = () => (
  <footer className="footer">
    <div className="footer__left">
      <TextButton bold small darkBlue>
        Lorem
      </TextButton>
      <TextButton bold small darkBlue>
        Ipsum
      </TextButton>
    </div>
    <div className="footer__right">
      <h4
        className="heading-4 color-dark font-bold"
        style={{ display: "flex", alignItems: "center" }}
      >
        @Made by Dimitar Belchev 2020 SOFTUNI PROJECT
      </h4>
    </div>
  </footer>
);

export default Footer;
