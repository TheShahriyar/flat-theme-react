import React from "react"
import Logo from "../images/logo.png"
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-6 col-sm-3 logo-column">
            <Link to="/" className="logo">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="col-6 col-sm-9 nav-column clearfix">
            <div className="right-nav">
              <div className="header-social">
                <a href="#">
                  <FaFacebook />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaGithub />
                </a>
              </div>
            </div>
            <nav id="menu" className="d-none d-lg-block">
              <ul>
                <li className="current-menu-item">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/team">Team</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
