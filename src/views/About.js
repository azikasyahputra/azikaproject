// import { useEffect, useState } from "react";
// import useFetch from "../function/useFetch";

const About = () => {
  const URLLink = 'http://localhost:8000';
  return (
    <main className="main">
      <div className="page-content pb-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="about-text text-center mt-3">
                <h2 className="title text-center mb-2">Who We Are</h2>
                <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, uctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. </p>
                <img src={URLLink+"/storage/about/signature.png"} alt="signature" className="mx-auto mb-5" />
                <img src={URLLink+"/storage/about/img-1.jpg"} alt="logo" className="mx-auto mb-6" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="icon-box icon-box-sm text-center">
                <span className="icon-box-icon">
                  <i className="icon-puzzle-piece"></i>
                </span>
                <div className="icon-box-content">
                  <h3 className="icon-box-title">Free Shipping</h3>
                  <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero <br />eu augue.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="icon-box icon-box-sm text-center">
                <span className="icon-box-icon">
                  <i className="icon-life-ring"></i>
                </span>
                <div className="icon-box-content">
                  <h3 className="icon-box-title">Free Returns</h3>
                  <p>Praesent dapibus, neque id cursus faucibus, <br />tortor neque egestas augue, eu vulputate <br />magna eros eu erat. </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="icon-box icon-box-sm text-center">
                <span className="icon-box-icon">
                  <i className="icon-heart-o"></i>
                </span>
                <div className="icon-box-content">
                  <h3 className="icon-box-title">We Support</h3>
                  <p>Pellentesque a diam sit amet mi ullamcorper <br />vehicula. Nullam quis massa sit amet <br />nibh viverra malesuada.</p> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
 
export default About;
