import React from "react"
import FaqImg from "../images/fag-img.png"
import SectionTitle from "./SectionTitle"
import AccordionComponent from "./AccordionComponent"

const FaqSection = () => {
  return (
    <>
      <div className="faq-area sp bg2">
        <div className="container">
          <SectionTitle
            title="Frequently Asked Questions"
            desc="Malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae."
          />
          <div className="row">
            <div className="col-md-6">
              <AccordionComponent></AccordionComponent>
            </div>
            <div className="col-md-6">
              <div className="faq-img text-center">
                <img src={FaqImg} alt="faq" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FaqSection
