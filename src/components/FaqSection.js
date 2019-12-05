import React from "react"
import FaqImg from "../images/fag-img.png"
import SectionTitle from "./SectionTitle"

const FaqSection = () => {
  return (
    <>
      <div class="faq-area sp bg2">
        <div class="container">
          <SectionTitle
            title="Frequently Asked Questions"
            desc="Malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae."
          />
          <div class="row">
            <div class="col-md-6">
              <div class="faq">
                <div class="single-item">
                  <h4>Low Cost Advertising Available or Not?</h4>
                  <div class="content">
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesu ada fames and reply to all.
                  </div>
                </div>
                <div class="single-item">
                  <h4>What Is The Big R For Marketing Your Business?</h4>
                  <div class="content">
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesu ada fames and reply to all.
                  </div>
                </div>
                <div class="single-item">
                  <h4>Does Using Banner Stands Increase Trade Show Traffic?</h4>
                  <div class="content">
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesu ada fames and reply to all.
                  </div>
                </div>
                <div class="single-item">
                  <h4>How To Write Better Advertising Copy?</h4>
                  <div class="content">
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesu ada fames and reply to all.
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="faq-img text-center">
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
