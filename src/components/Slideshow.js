import React from "react"
import { Slide } from "react-slideshow-image"
import "./Slideshow.css"

import slider1 from "../images/slide1.jpg"
import slider2 from "../images/slide2.jpg"
import slider3 from "../images/slide3.jpg"

const slideImages = [{ slider1 }, { slider2 }, { slider3 }]

const Slideshow = () => {
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
  }
  return (
    <div className="hero-slider">
      <Slide {...properties}>
        <div className="each-slide single-slide">
          <div style={{ backgroundImage: `url(${slider1})` }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="slide-content">
                    <h2 className="animated1">
                      We Are Digital Product Design Agency.
                    </h2>
                    <p className="animated2">
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames ac turpis egestas.
                    </p>
                    <div className="slide-btn animated3">
                      <a href="#" className="button mr-3">
                        Learn More
                      </a>
                      <a href="#" className="button-2">
                        Live Preview
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="each-slide single-slide">
          <div style={{ backgroundImage: `url(${slider2})` }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <div className="slide-content">
                    <h2 className="animated1">
                      We Are Digital Product Design Agency.
                    </h2>
                    <p className="animated2">
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames ac turpis egestas.
                    </p>
                    <div className="slide-btn animated3">
                      <a href="#" className="button mr-3">
                        Learn More
                      </a>
                      <a href="#" className="button-2">
                        Live Preview
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  )
}

export default Slideshow
