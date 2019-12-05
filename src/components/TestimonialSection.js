import React from "react"
import Slider from "react-slick"
import SectionTitle from "./SectionTitle"
import clientImg from "../images/client.jpg"

const TestimonialSection = ({ bgColor }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }
  return (
    <>
      <div
        className="testimonial-area sp"
        style={{ backgroundColor: `${bgColor}` }}
      >
        <div className="container">
          <SectionTitle
            white="true"
            title="Clients Review"
            desc="Malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae."
          />
          <div className="testimonial-slider">
            <Slider {...settings}>
              <div className="single-slide">
                <div className="inner">
                  <p>
                    When I was just starting 6th grade I got my first job.
                    Paperboy! Boy, was I excited. At that time I had spent a lot
                    of time actually playing the video official.
                  </p>
                  <div className="client-info">
                    <div className="client-img">
                      <img src={clientImg} alt="client" />
                    </div>
                    <div className="client-data">
                      <h4>Jhon Doe</h4>
                      <span>Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-slide">
                <div className="inner">
                  <p>
                    When I was just starting 6th grade I got my first job.
                    Paperboy! Boy, was I excited. At that time I had spent a lot
                    of time actually playing the video official.
                  </p>
                  <div className="client-info">
                    <div className="client-img">
                      <img src={clientImg} alt="client" />
                    </div>
                    <div className="client-data">
                      <h4>Jhon Doe</h4>
                      <span>Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-slide">
                <div className="inner">
                  <p>
                    When I was just starting 6th grade I got my first job.
                    Paperboy! Boy, was I excited. At that time I had spent a lot
                    of time actually playing the video official.
                  </p>
                  <div className="client-info">
                    <div className="client-img">
                      <img src={clientImg} alt="client" />
                    </div>
                    <div className="client-data">
                      <h4>Jhon Doe</h4>
                      <span>Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-slide">
                <div className="inner">
                  <p>
                    When I was just starting 6th grade I got my first job.
                    Paperboy! Boy, was I excited. At that time I had spent a lot
                    of time actually playing the video official.
                  </p>
                  <div className="client-info">
                    <div className="client-img">
                      <img src={clientImg} alt="client" />
                    </div>
                    <div className="client-data">
                      <h4>Jhon Doe</h4>
                      <span>Designer</span>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}

export default TestimonialSection
