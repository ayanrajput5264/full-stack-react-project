import React from 'react'
import "../App.css"
import Form from "./Form"

const contact = () => {
  return (
    
<div>
  <section className="contact-banner">
    <div className="container">
      <h1 className="contact-banner-title">Contact Us</h1>
      <p className="contact-breadcrumb">
        Home . Pages . <span className="active-crumb">Contact us</span>
      </p>
    </div>
  </section>

  <section className="py-5">
    <div className="container">
      <div className="row g-5">
        <div className="col-12 col-md-6">
          <h3 className="info-heading">Information About us</h3>
          <p className="info-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam nel. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </p>
         
        </div>

        <div className="col-12 col-md-6">
          <h3 className="info-heading">Contact Way</h3>
          <div className="row">
            <div className="col-12 col-sm-6">
              <div className="contact-way-item">
                <div>
                  <p className="contact-way-title">Tel: 877-67-88-99</p>
                  <p className="contact-way-subtitle">
                    E-Mail: raoayanrajpur12@gmail.com
                  </p>
                </div>
              </div>

              <div className="contact-way-item">
                <div>
                  <p className="contact-way-title">
                    20 Margarst st, London
                  </p>
                  <p className="contact-way-subtitle">
                    Great britain, 3N9M8-UK
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6">
              <div className="contact-way-item">
                <div>
                  <p className="contact-way-title">Support Forum</p>
                  <p className="contact-way-subtitle">For over 24hr</p>
                </div>
              </div>

              <div className="contact-way-item">
                <div>
                  <p className="contact-way-title">Free standard shipping</p>
                  <p className="contact-way-subtitle">on all orders.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 <Form/>
</div>
    
  )
}

export default contact
