import useFetch from "../function/useFetch";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";

const override = css`
display: block;
margin: 0 auto;
border-color: red;
`;

const CarouselVendor = () => {
   const URLLink = 'http://localhost:8000';
   const { error, isPending, data: vendors } = useFetch(URLLink+'/api/vendorumum');

  return (
      <div className="container new-arrivals">
         <div className="heading heading-flex mb-3">
            <div className="heading-left">
               <h2 className="title">Our Trusted Vendors</h2>
            </div>
            <div className="heading-right">
               <a href="category.html" className="title-link">View All Vendors <i className="icon-long-arrow-right"></i></a>
            </div>
         </div>
   
         <div className="tab-content tab-content-carousel just-action-icons-sm">
            <div className="tab-pane p-0 fade show active" id="new-all-tab" role="tabpanel" aria-labelledby="new-all-link">
               {error && <div>{error}</div>}
               <ClipLoader loading={isPending} css={override} size={50} />
               {
                  vendors 
                     &&
                     <OwlCarousel className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" items={5} nav dots margin={20} loop={false}>
                        { vendors.map((vendor)=>{
                           return (
                           <div key={vendor.iId} className="product product-2">
                              <figure className="product-media">
                                 <a href="category.html">
                                       <img src={URLLink+"/"+vendor.vProfilepic} alt="Product" className="product-image" />
                                 </a>
                              </figure>
                           </div>
                           );
                        })}
                     </OwlCarousel>
               }
            </div>
         </div>
      </div>
  );
}
 
export default CarouselVendor;