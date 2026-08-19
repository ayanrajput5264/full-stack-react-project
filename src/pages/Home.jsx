import React from "react";
import "../App.css"
import heroImage from "../assets/hero.png";


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

      
    </div>
  );
};

export default Home;
