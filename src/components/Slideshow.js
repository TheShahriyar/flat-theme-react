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
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slider1})` }}>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <span>Slide 1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slider2})` }}>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <span>Slide 2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slider3})` }}>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <span>Slide 3</span>
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
