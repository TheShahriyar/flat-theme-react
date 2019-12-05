import React from "react"
import RecentPostImg1 from "../images/recent1.jpg"
import RecentPostImg2 from "../images/recent2.jpg"
import RecentPostImg3 from "../images/recent3.jpg"

import { FaPaperPlane } from "react-icons/fa"

const FooterSection = () => {
  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3 footer_widget">
                <div className="inner">
                  <h4>About</h4>
                  <p>
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas.
                  </p>
                  <p>
                    Vestibulum tortor quam, feugiat vitae, ultricies eget,
                    tempor sit amet, antesenectus et netus et malesuada fames ac
                    turpis egestas.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 footer_widget">
                <div className="inner">
                  <h4>Company</h4>
                  <ul>
                    <li>
                      <a href="#">Company Overview</a>
                    </li>
                    <li>
                      <a href="#">Meet The Team</a>
                    </li>
                    <li>
                      <a href="#">Our Awesome Partners</a>
                    </li>
                    <li>
                      <a href="#">Our Services</a>
                    </li>
                    <li>
                      <a href="#">Frequently Asked Questions</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Terms of Use</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 footer_widget">
                <div className="inner">
                  <h4>Recent Posts</h4>
                  <div className="media">
                    <a href="#">
                      <img
                        src={RecentPostImg1}
                        className="d-flex mr-3"
                        alt=""
                      />
                    </a>
                    <div className="media-body">
                      <h5>
                        <a href="#">
                          Curling irons are as individual as the women
                        </a>
                      </h5>
                      <span>June 22, 2017</span>
                    </div>
                  </div>
                  <div className="media">
                    <a href="#">
                      <img
                        src={RecentPostImg2}
                        className="d-flex mr-3"
                        alt=""
                      />
                    </a>
                    <div className="media-body">
                      <h5>
                        <a href="#">
                          Curling irons are as individual as the women
                        </a>
                      </h5>
                      <span>June 22, 2017</span>
                    </div>
                  </div>
                  <div className="media">
                    <a href="#">
                      <img
                        src={RecentPostImg3}
                        className="d-flex mr-3"
                        alt=""
                      />
                    </a>
                    <div className="media-body">
                      <h5>
                        <a href="#">
                          Curling irons are as individual as the women
                        </a>
                      </h5>
                      <span>June 22, 2017</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 footer_widget">
                <div className="inner">
                  <h4>Address</h4>
                  <h5>Flat Pro, Inc.</h5>
                  <p>
                    649 Folsom Ave, Suite 400 <br />
                    San Francisco, CA 63105 <br />
                    P: (123) 456-7890
                  </p>
                  <h4>Newsletter</h4>
                  <form action="#" className="nw_form">
                    <input placeholder="Enter your email" type="email" />
                    <button>
                      <FaPaperPlane />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="copyright-txt">
                  © {new Date().getFullYear()} Flat Pro. All Rights Reserved.
                </div>
              </div>
              <div className="col-lg-6 text-right">
                <div className="footer-nav">
                  <a href="#">Home</a>
                  <a href="#">Portfolio</a>
                  <a href="#">Pages</a>
                  <a href="#">Shortcode</a>
                  <a href="#">Blog</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default FooterSection
