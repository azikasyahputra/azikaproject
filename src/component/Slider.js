import useFetch from "../function/useFetch";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";

const override = css`
display: block;
margin: 0 auto;
border-color: red;
`;

const Slider = () => {
   const URLLink = 'http://localhost:8000';
   const { error, isPending, data: sliders } = useFetch(URLLink+'/api/slider');
   return (
      <div className="intro-slider-container">
         {error && <div>{error}</div>}
         <ClipLoader loading={isPending} css={override} size={50} />          
         {
            sliders 
               &&
               <OwlCarousel className="intro-slider owl-carousel owl-simple owl-nav-inside" items={1}>
                  { sliders.map((slider)=>{
                     return (
                        <div key={slider.iId} className="intro-slide item" style={{backgroundImage: "url("+URLLink+"/storage"+slider.vLink+")"}}>
                           <div className="container intro-content">
                                 <div className="row">
                                    <div className="col-auto offset-lg-3 intro-col">
                                       <h3 className="intro-subtitle">{slider.vSubtitle}</h3>
                                       <h1 className="intro-title">{slider.vTitle}
                                       </h1>

                                       <Link to="/ListItem" className="btn btn-outline-custom-2">
                                             <span>Shop Now</span>
                                             <i className="icon-long-arrow-right"></i>
                                       </Link>
                                    </div>
                                 </div>
                           </div>
                        </div>
                     );
                  })}
               </OwlCarousel>      
         }
      </div>
  );
}
 
export default Slider;