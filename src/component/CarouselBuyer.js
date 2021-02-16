import useFetch from "../function/useFetch";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
display: block;
margin: 0 auto;
border-color: red;
`;

const CarouselBuyer = () => {
    const URLLink = 'http://localhost:8000';
    const { error, isPending, data: buyers } = useFetch(URLLink+'/api/buyerumum')

    return (
        <div className="container new-arrivals">
            <div className="heading heading-flex mb-3">
                <div className="heading-left">
                    <h2 className="title">Our Satisfied Buyers</h2>
                </div>
            </div>
        
            <div className="tab-content tab-content-carousel just-action-icons-sm">
                <div className="tab-pane p-0 fade show active" id="new-all-tab" role="tabpanel" aria-labelledby="new-all-link">
                    {error && <div>{error}</div>}
                    <ClipLoader loading={isPending} css={override} size={50} />
                    {
                        buyers 
                        &&
                        <OwlCarousel className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" items={5} nav dots margin={20} loop={false}>
                            { buyers.map((buyer)=>{
                                return (
                                <div key={buyer.iId} className="product product-2">
                                    <figure className="product-media">
                                        <a href="category.html">
                                            <img src={URLLink+"/"+buyer.vProfilepic} alt="Product" className="product-image" />
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
 
export default CarouselBuyer;