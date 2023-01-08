import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("profile");
    localStorage.setItem("logout", JSON.stringify("true"));
    navigate("/");
  };

  return (
    <div className="mynav">
      <div className="header">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>
            <p className="title" style={{ color: "white" }}>
              My
            </p>
            <p className="title" style={{ color: "#1da1f2" }}>
              jobs
            </p>
          </span>
        </Link>

        {!user ? (
          <Link to="/login">
            <button className="login">Login</button>
          </Link>
        ) : (
          <div style={{ display: "flex" }}>
            <div className="profile">{user.email.charAt(0).toUpperCase()}</div>

            <div className="btn-group">
              <button
                className="drop"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-caret-down-fill"></i>
              </button>
              <ul onClick={() => handleLogout()} className="dropdown-menu">
                Logout
              </ul>
            </div>
          </div>
        )}
      </div>
      <hr className="hrline" />
    </div>
  );
};

export default Navbar;
