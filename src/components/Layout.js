import React from "react"
import Navbar from "./Navbar"
import FooterSection from "./FooterSection"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <FooterSection />
    </>
  )
}

export default Layout
