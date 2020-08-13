import React from "react";

import TextButton from "../Button/TextButton/TextButton";
import Icon from "../Icon/Icon";

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
        <Icon
          className="icon--small color-dark"
          icon="pencil"
          style={{ display: "inline-block", margin: "0 5px" }}
        />{" "}
        Made by Dimitar Belchev
      </h4>
    </div>
  </footer>
);

export default Footer;
