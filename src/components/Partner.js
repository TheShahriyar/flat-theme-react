import React from "react"

import brand1 from "../images/brand1.png"
import brand2 from "../images/brand2.png"
import brand3 from "../images/brand3.png"
import brand4 from "../images/brand4.png"

const Partner = () => {
  return (
    <>
      <div className="brand-area">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-6 single-brand">
              <div className="inner">
                <a href="#">
                  <img src={brand1} alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-3 col-6 single-brand">
              <div className="inner">
                <a href="#">
                  <img src={brand2} alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-3 col-6 single-brand">
              <div className="inner">
                <a href="#">
                  <img src={brand3} alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-3 col-6 single-brand">
              <div className="inner">
                <a href="#">
                  <img src={brand4} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Partner
