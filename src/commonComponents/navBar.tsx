import React from "react";

const Navbar = ({ children, handleBackClick }: any) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#bcbcbc83" }}
    >
      <div className="container">
        <div>
          <button
            className="back"
            onClick={() => {
              handleBackClick(true);
            }}
          >
            BACK!
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">{children}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
