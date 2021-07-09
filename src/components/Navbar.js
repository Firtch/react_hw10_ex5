import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to="/lazy">
        <button>To Lazy Page</button>
      </Link>
      <Link to="/">
        <button>Home</button>
      </Link>
    </>
  );
};

export default Navbar;
