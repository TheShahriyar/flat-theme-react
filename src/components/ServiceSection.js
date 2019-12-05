import React from "react"
import SectionTitle from "./SectionTitle"
import services from "../constant/services"

import {
  FaFilm,
  FaCamera,
  FaMusic,
  FaBullhorn,
  FaMagic,
  FaChartBar,
} from "react-icons/fa"
import Service from "./Service"

const ServiceSection = ({ bgColor }) => {
  return (
    <div
      className="service-area sp"
      style={{ fontSize: "200px", backgroundColor: `${bgColor}` }}
    >
      <div className="container">
        <SectionTitle
          title="Our Service"
          desc="Malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae."
        />
        <div className="row">
          {services.map((item, index) => {
            return <Service key={index} item={item}></Service>
          })}
        </div>
      </div>
    </div>
  )
}

export default ServiceSection
