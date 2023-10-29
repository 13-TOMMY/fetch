import React from 'react'
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <div>
      {/* add more */}
      <div className="footer">
          <div className="footer-left">
              <p>About Us</p>
              <p>Terms & Conditions</p>
              <p>Privacy & Cookies Policies</p>
          </div>
          <div className="footer-right">
              <p>2023</p>
                <div className='copyright-uniLife'>
                  <FaRegCopyright />
                <p>Fetch</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Footer