import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../Icon/Icon";

const SmallFooter = () => {
  const links = ["Lorem", "Ipsum"];
  return (
    <footer className="footer--small color-grey-2 font-bold">
      <div className="footer--small__links">
        {links.map((link, idx) => (
          <Link key={idx} to="/">
            {link}
          </Link>
        ))}
      </div>
      <h5
        className="heading-5 color-grey-2 footer--small__copyright mt-lg font-bold"
        style={{ textTransform: "uppercase " }}
      >
        {" "}
        <Icon
          icon="pencil"
          className="color-grey-2 icon--small"
          style={{ margin: "0 5px" }}
        />{" "}
        Made by Dimitar Belchev
      </h5>
    </footer>
  );
};

export default SmallFooter;
