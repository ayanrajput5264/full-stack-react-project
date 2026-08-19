import React from "react";
import "../App.css"
import heroImage from "../assets/hero.png";
import cardimg1 from '../assets/cardimg1.png'
import cardimg2 from '../assets/cardimg2.png'
import cardimg3 from '../assets/cardimg3.png'
import cardimg4 from '../assets/cardimg4.png'


const Home = () => {
  return (
    <div>
      <div className=" main row p-5 pb-0 pe-lg-0 pt-lg-5 align-items-center roundged-3 border shadowl-">
        {" "}
        <div className=" container col-lg-7 p-3 p-lg-5 pt-lg-3 g-10">
          {" "}
          <h1 className=" h1 display-3 lh-1 ">
            Best furniture for Your castle
          </h1>{" "}
          <h1 className="lead display-4 fw-bold lh-1 text-body-emphasis">
           New Furniture Collection <br />Trend in 2026
          </h1>{" "}
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            {" "}
            <button
              type="button"
              className="btn btn-lg px-4 me-md-2 fw-bold button"
            >
              Shop Now
            </button>{" "}
            
          </div>{" "}
        </div>{" "}

          {" "}
          <img
            className=" img rounded-lg-3"
            src={heroImage}
            alt=""
            width="720"
          />{" "}
        
      </div>

      {/* feturde product  */}

      {/* Featured Products Section - is poore section ko Home component ke return ke andar paste karo */}
{/* Upar import karna mat bhoolna: import "./FeaturedProducts.css"; */}

<section className="py-5">
  <div className="container">
    {/* Heading */}
    <h2 className="text-center mb-5 featured-heading">Featured Products</h2>

    {/* Cards Row */}
    <div className="row g-4 justify-content-center">
      {/* Card 1 - Normal */}
      <div className="col-12 col-sm-6 col-md-3">
        <div className="card rounded-3 shadow-sm h-100 product-card">
          <div className="product-img-box">
            {/* apni image yahan lagana */}
            <span className="product-img-placeholder"><img src={cardimg1} alt="" /></span>
          </div>
          <div className="card-body text-center py-3">
            <h6 className="mb-1 product-title">Cantilever chair</h6>
            <div className="d-flex justify-content-center gap-1 mb-2">
              <span className="dash-line dash-pink"></span>
              <span className="dash-line dash-green"></span>
              <span className="dash-line dash-blue"></span>
            </div>
            <p className="mb-1 product-code">Code : Y303001</p>
            <p className="mb-0 product-price">$42.00</p>
          </div>
        </div>
      </div>

      {/* Card 2 - Featured (dark highlighted) */}
      <div className="col-12 col-sm-6 col-md-3">
        <div className="card rounded-3 shadow-sm h-100 product-card featured">
          <div className="d-flex gap-2 px-3 pt-3">
            <span style={{ fontSize: "16px" }}>🔍</span>
            <span style={{ fontSize: "16px" }}>♡</span>
            <span style={{ fontSize: "16px" }}>⚙</span>
          </div>
          <div className="product-img-box">
            <span className="product-img-placeholder"><img src={cardimg2} alt="" /></span>
          </div>
          <div className="text-center mb-2">
            <button className="btn btn-sm view-details-btn">View Details</button>
          </div>
          <div className="card-body text-center py-3">
            <h6 className="mb-1 product-title">Cantilever chair</h6>
            <div className="d-flex justify-content-center gap-1 mb-2">
              <span className="dash-line dash-pink"></span>
              <span className="dash-line dash-green"></span>
              <span className="dash-line dash-blue"></span>
            </div>
            <p className="mb-1 product-code">Code : Y303001</p>
            <p className="mb-0 product-price">$42.00</p>
          </div>
        </div>
      </div>

      {/* Card 3 - Normal */}
      <div className="col-12 col-sm-6 col-md-3">
        <div className="card rounded-3 shadow-sm h-100 product-card">
          <div className="product-img-box">
            <span className="product-img-placeholder"><img src={cardimg3} alt="" /></span>
          </div>
          <div className="card-body text-center py-3">
            <h6 className="mb-1 product-title">Cantilever chair</h6>
            <div className="d-flex justify-content-center gap-1 mb-2">
              <span className="dash-line dash-pink"></span>
              <span className="dash-line dash-green"></span>
              <span className="dash-line dash-blue"></span>
            </div>
            <p className="mb-1 product-code">Code : Y303001</p>
            <p className="mb-0 product-price">$42.00</p>
          </div>
        </div>
      </div>

      {/* Card 4 - Normal */}
      <div className="col-12 col-sm-6 col-md-3">
        <div className="card rounded-3 shadow-sm h-100 product-card">
          <div className="product-img-box">
            <span className="product-img-placeholder"><img src={cardimg4} alt="" /></span>
          </div>
          <div className="card-body text-center py-3">
            <h6 className="mb-1 product-title">Cantilever chair</h6>
            <div className="d-flex justify-content-center gap-1 mb-2">
              <span className="dash-line dash-pink"></span>
              <span className="dash-line dash-green"></span>
              <span className="dash-line dash-blue"></span>
            </div>
            <p className="mb-1 product-code">Code : Y303001</p>
            <p className="mb-0 product-price">$42.00</p>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom pagination dashes */}
    <div className="d-flex justify-content-center gap-1 mt-4">
      <span className="pagination-dash active"></span>
      <span className="pagination-dash inactive"></span>
      <span className="pagination-dash inactive"></span>
    </div>
  </div>
</section>
    </div>
  );
};

export default Home;
