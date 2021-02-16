import { Link } from "react-router-dom";

const Banner = () => {
  return (
      <div className="container">
         <div className="row">
            <div className="col-lg-6">
               <div className="banner banner-overlay banner-overlay-light">
                     <Link to="#">
                        <img src="/images/demos/demo-13/banners/banner-4.jpg" alt="Banner" />
                     </Link>

                     <div className="banner-content">
                        <h3 className="banner-title"><Link to="#">Mengapa pilih <br />BarangPabrik ? <br /></Link></h3>
                        <Link to="#" className="banner-link banner-link-bata">Discover Now <i className="icon-long-arrow-right"></i></Link>
                     </div>
               </div>
            </div>

            <div className="col-lg-6">
               <div className="banner banner-overlay">
                     <Link to="#">
                        <img src="images/demos/demo-13/banners/banner-5.png" alt="Banner" />
                     </Link>

                     <div className="banner-content">
                        <h3 className="banner-title text-white"><Link to="#">Persingkat kinerja tim anda <br />dengan BarangPabrik !<br /></Link></h3>
                        <Link to="#" className="banner-link banner-link-bata">Discover Now <i className="icon-long-arrow-right"></i></Link>
                     </div>
               </div>
            </div>
         </div>
      </div>
  );
}
 
export default Banner;