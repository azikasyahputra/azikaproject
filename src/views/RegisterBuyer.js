// import { useEffect, useState } from "react";
// import useFetch from "../function/useFetch";

import Benefit from "../component/Benefit"
import ListTestimoni from "../component/ListTestimoni"
import { Link } from "react-router-dom";

const RegisterSupplier = () => {
  const URLLink = 'http://localhost:8000';
  return (
    <main className="main">
      <br/>
      <div className="mb-4"></div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="banner banner-overlay banner-overlay-light">
              <Link to="/RegisterBuyerPerusahaan">
                <img src={URLLink+"/storage/banner/banner-4.jpg"} alt="Banner" />
              </Link>

              <div className="banner-content">
                <h3 className="banner-title"><Link to="/RegisterBuyerPerusahaan">Daftar Perusahaan <br/></Link></h3>
                <Link to="/RegisterBuyerPerusahaan" className="banner-link banner-link-bata">Silahkan Klik Disini <i className="icon-long-arrow-right"></i></Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="banner banner-overlay">
               <Link to="/RegisterBuyerIndividu">
                <img src={URLLink+"/storage/banner/banner-5.png"} alt="Banner" />
              </Link>

             <div className="banner-content">
                <h3 className="banner-title"><Link to="/RegisterBuyerIndividu">Daftar Individu <br/></Link></h3>
                <Link to="/RegisterBuyerIndividu" className="banner-link banner-link-bata">Silahkan Klik Disini <i className="icon-long-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="about-text text-center mt-3">
              <h2 className="title text-center mb-2">Tentang BarangPabrik</h2>
              <p>BarangPabrik adalah E-commerce B2B (Business to Business) yang menyediakan berbagai kebutuhan industri dan bisnis, mulai
              dari produk MRO (Maintenance, Repair, and Operation) untuk pabrik dan perakitan. Hadir sebagai One Stop Solution bagi Sistem
              E-Procurement di Indonesia.</p>
            </div>
          </div>
        </div>
      </div>
      <ListTestimoni></ListTestimoni>
      <hr /> 
      <Benefit></Benefit>
    </main>
  );
}
 
export default RegisterSupplier;
