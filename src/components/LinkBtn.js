import React from "react";
import { Link } from "react-router-dom";

const LinkBtn = ({ to, children }) => {
  // in-app route
  if (to.indexOf("http") === -1) {
    return (
      <Link className="link-btn" to={to}>
        {children}
      </Link>
    );
  }

  // external link
  return (
    <a href={to} target="_blank" rel="noopener noreferrer" className="link-btn">
      {children}
    </a>
  );
};

export default LinkBtn;
