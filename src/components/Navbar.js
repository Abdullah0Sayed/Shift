import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import logo from "../images/logo.svg";
import "../css/navbar.css";
import "../css/logo.css";

function Navbar() {
  return (
    <nav className="navbar nav-underline navbar-expand-lg nav">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="logo animate__animated animate__fadeInRight" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/" aria-current="page">
                الرئيسية
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                من نحن
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/about-us">
                    نبذة
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="/questions">
                    أسئلة واستفسارات
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                اعمالنا
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    مركز الصور
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    مركز الفيديو
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                احجز اونلاين
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                الضمان
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                مستلزمات شيفت
              </a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                فروعنا
              </a>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                تواصل
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    استفسارات
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    شكاوى
                  </a>
                </li>
                
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
