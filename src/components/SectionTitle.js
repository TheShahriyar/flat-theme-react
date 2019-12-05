import React from "react"

const SectionTitle = ({ title, desc, white }) => {
  return (
    <div className={white ? "section-title white" : "section-title"}>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  )
}

export default SectionTitle
