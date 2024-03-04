import React from "react"
import { FaInstagram } from "react-icons/fa6"
import { FaTwitterSquare } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa6"

function Footer() {
  return (
    <div className="footer">
      <h3>Made by Gosia Brożek ❤️</h3>
      <div className="footer__items">
        <FaInstagram />
        <FaTwitterSquare />
        <FaFacebook />
      </div>
    </div>
  )
}

export default Footer
