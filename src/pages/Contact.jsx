import React from 'react'
import "../App.css"

const contact = () => {
  return (
    <div>
      {/* Contact Us Page - Get In Touch section jaan-boojh kar shamil nahi ki gayi */}
{/* Upar import karna mat bhoolna: import "./ContactUs.css"; */}

<div>
  {/* ===== TOP BANNER SECTION ===== */}
  <section className="contact-banner">
    <div className="container">
      <h1 className="contact-banner-title">Contact Us</h1>
      <p className="contact-breadcrumb">
        Home . Pages . <span className="active-crumb">Contact us</span>
      </p>
    </div>
  </section>

  {/* ===== INFORMATION + CONTACT WAY SECTION ===== */}
  <section className="py-5">
    <div className="container">
      <div className="row g-5">
        {/* LEFT - Information About Us */}
        <div className="col-12 col-md-6">
          <h3 className="info-heading">Information About us</h3>
          <p className="info-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam nel. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </p>
          <div className="d-flex gap-2 mt-3">
            <span className="dot dot-purple"></span>
            <span className="dot dot-pink"></span>
            <span className="dot dot-cyan"></span>
          </div>
        </div>

        {/* RIGHT - Contact Way */}
        <div className="col-12 col-md-6">
          <h3 className="info-heading">Contact Way</h3>
          <div className="row">
            {/* Phone / Email */}
            <div className="col-12 col-sm-6">
              <div className="contact-way-item">
                <div className="icon-circle icon-purple">📞</div>
                <div>
                  <p className="contact-way-title">Tel: 877-67-88-99</p>
                  <p className="contact-way-subtitle">
                    E-Mail: raoayanrajpur12@gmail.com
                  </p>
                </div>
              </div>

              <div className="contact-way-item">
                <div className="icon-circle icon-orange">📍</div>
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

            {/* Support / Shipping */}
            <div className="col-12 col-sm-6">
              <div className="contact-way-item">
                <div className="icon-circle icon-pink">💬</div>
                <div>
                  <p className="contact-way-title">Support Forum</p>
                  <p className="contact-way-subtitle">For over 24hr</p>
                </div>
              </div>

              <div className="contact-way-item">
                <div className="icon-circle icon-green">🚚</div>
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
</div>
    </div>
  )
}

export default contact
