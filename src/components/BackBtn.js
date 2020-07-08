import React from "react";
import { Link } from "react-router-dom";

const BackBtn = () => {
  return (
    <div>
      <Link to="/" style={{ fontSize: "2.6rem" }}>
        &lt; Back
      </Link>
    </div>
  );
};

export default BackBtn;
