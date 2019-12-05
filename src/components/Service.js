import React from "react"

const Service = ({ item }) => {
  const { icon, title, desc } = item
  return (
    <div className="col-lg-4 col-md-6 single-service">
      <div className="inner">
        <div className="title">
          <div className="icon">{icon}</div>
          <h4>{title}</h4>
        </div>
        <div className="content">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default Service
