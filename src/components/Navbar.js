import React from "react"
import Logo from "../images/logo.png"
import { FaFacebook, FaTwitter, FaGithub, FaSearch } from "react-icons/fa"
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
              <span className="search-icon">
                <FaSearch />
              </span>
              <form action="#" className="search-form">
                <input type="search" placeholder="search now" />
                <button type="submit">
                  <FaSearch />
                </button>
              </form>
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
                <li className="has-child">
                  <a href="#">Pages</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="404.html">404</a>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="career.html">Career</a>
                    </li>
                    <li>
                      <a href="coming-soon.html">Coming Soon</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                    <li>
                      <a href="faq.html">Faq</a>
                    </li>
                    <li>
                      <a href="portfolio.html">Portfolio</a>
                    </li>
                    <li>
                      <a href="pricing.html">Pricing</a>
                    </li>
                    <li>
                      <a href="service.html">Service</a>
                    </li>
                    <li>
                      <a href="team.html">Team</a>
                    </li>
                    <li>
                      <a href="testimonial.html">Testimonial</a>
                    </li>
                  </ul>
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
