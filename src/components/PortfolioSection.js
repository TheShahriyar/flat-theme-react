import React from "react"
import SectionTitle from "./SectionTitle"
import Port1 from "../images/portfolio1.jpg"
import Port2 from "../images/portfolio2.jpg"
import Port3 from "../images/portfolio3.jpg"
import Port4 from "../images/portfolio4.jpg"
import Port5 from "../images/portfolio5.jpg"
import Port6 from "../images/portfolio6.jpg"

const PortfolioSection = () => {
  return (
    <>
      <div className="portfolio-area sp">
        <div className="container">
          <SectionTitle
            title="Latest Work"
            desc="Malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae."
          />
          <div className="row">
            <div className="single-portfolio col-md-4">
              <div className="inner">
                <div className="portfolio-img">
                  <img src={Port1} alt="portfolio-image" />
                  <div className="hover-content">
                    <div>
                      <a href="#" className="button">
                        View Case Study
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <a href="#">
                    <h3>The Back Chiropractor</h3>
                  </a>
                  <span>Ceramics, Design</span>
                </div>
              </div>
            </div>
            <div className="single-portfolio col-md-4">
              <div className="inner">
                <div className="portfolio-img">
                  <img src={Port2} alt="portfolio-image" />
                  <div className="hover-content">
                    <div>
                      <a href="#" className="button">
                        View Case Study
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <a href="#">
                    <h3>The Back Chiropractor</h3>
                  </a>
                  <span>Ceramics, Design</span>
                </div>
              </div>
            </div>
            <div className="single-portfolio col-md-4">
              <div className="inner">
                <div className="portfolio-img">
                  <img src={Port3} alt="portfolio-image" />
                  <div className="hover-content">
                    <div>
                      <a href="#" className="button">
                        View Case Study
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <a href="#">
                    <h3>The Back Chiropractor</h3>
                  </a>
                  <span>Ceramics, Design</span>
                </div>
              </div>
            </div>
            <div className="single-portfolio col-md-4">
              <div className="inner">
                <div className="portfolio-img">
                  <img src={Port4} alt="portfolio-image" />
                  <div className="hover-content">
                    <div>
                      <a href="#" className="button">
                        View Case Study
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <a href="#">
                    <h3>The Back Chiropractor</h3>
                  </a>
                  <span>Ceramics, Design</span>
                </div>
              </div>
            </div>
            <div className="single-portfolio col-md-4">
              <div className="inner">
                <div className="portfolio-img">
                  <img src={Port5} alt="portfolio-image" />
                  <div className="hover-content">
                    <div>
                      <a href="#" className="button">
                        View Case Study
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <a href="#">
                    <h3>The Back Chiropractor</h3>
                  </a>
                  <span>Ceramics, Design</span>
                </div>
              </div>
            </div>
            <div className="single-portfolio col-md-4">
              <div className="inner">
                <div className="portfolio-img">
                  <img src={Port6} alt="portfolio-image" />
                  <div className="hover-content">
                    <div>
                      <a href="#" className="button">
                        View Case Study
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <a href="#">
                    <h3>The Back Chiropractor</h3>
                  </a>
                  <span>Ceramics, Design</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center" data-margin="40px 0 0">
              <a href="#" className="button">
                More Works
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PortfolioSection
