import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/animate.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../css/style.css"
import Layout from "../components/Layout"
import Slideshow from "../components/Slideshow"
import Partner from "../components/Partner"
import ServiceSection from "../components/ServiceSection"
import PortfolioSection from "../components/PortfolioSection"
import TestimonialSection from "../components/TestimonialSection"

export default () => (
  <>
    <Layout>
      <Slideshow />
      <Partner />
      <ServiceSection bgColor="#f3f6fa" />
      <PortfolioSection />
      <TestimonialSection />
    </Layout>
  </>
)
