import useFetch from "../function/useFetch";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";
import { Link } from "react-router-dom";

const override = css`
display: block;
margin: 0 auto;
border-color: red;
`;

const ListTestimoni = () => {
    const URLLink = 'http://localhost:8000';
    const { error, isPending, data: testimonis } = useFetch(URLLink+'/api/testimoniumum');

    return (
        <div className="blog-posts pt-4">
            <div className="container">
                <h2 className="title">Testimoni Vendor & Client</h2>
                {error && <div>{error}</div>}
                <ClipLoader loading={isPending} css={override} size={50} />
                {
                    testimonis && (
                    <OwlCarousel className="owl-carousel owl-simple" items={5} dots margin={20} loop={false}>
                        { testimonis.map((testimoni)=>{
                            return (
                                <article className="entry" key={testimoni.iId}>
                                    <figure className="entry-media">
                                        <Link to="/DetailTestimoni">
                                            <img src={URLLink+"/"+testimoni.vProfilepic} alt="testimoni" />
                                        </Link>
                                    </figure>
            
                                    <div className="entry-body">
                                        <div className="entry-meta">
                                            <Link to="/DetailTestimoni">{testimoni.tCreated}</Link>
                                        </div>
            
                                        <h3 className="entry-title">
                                            <Link to="/DetailTestimoni">{testimoni.vJudul}</Link>
                                        </h3>
            
                                        <div className="entry-content">
                                            <p>{testimoni.vReview}</p>
                                            <Link to="/DetailTestimoni" className="read-more">Read More</Link>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </OwlCarousel>
                )}
            </div>
        </div>
    );
}
 
export default ListTestimoni;