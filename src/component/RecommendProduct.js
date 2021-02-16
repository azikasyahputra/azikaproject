import useFetch from "../function/useFetch";
import NumberFormat from 'react-number-format';
import { Link } from "react-router-dom";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
display: block;
margin: 0 auto;
border-color: red;
`;

const RecommendProduct = () => {
    const URLLink = 'http://localhost:8000';
    const { error, isPending, data: products } = useFetch(URLLink+'/api/recommendproduct');

    return (
        <div className="container for-you">
            <div className="heading heading-flex mb-3">
                <div className="heading-left">
                    <h2 className="title">Recommended Products</h2>
                </div>
        
                <div className="heading-right">
                    <Link to="/ListItem" className="title-link">View All Products <i className="icon-long-arrow-right"></i></Link>
                </div>
            </div>
        
            <div className="products">
                <div className="row justify-content-center">
                    {error && <div>{error}</div>}
                    <ClipLoader loading={isPending} css={override} size={50} />
                    {
                        products &&  products.map(product=>{
                            return(
                                <div className="col-6 col-md-4 col-lg-3" key={product.iId}>
                                    <div className="product product-2">
                                        <figure className="product-media">
                                            <span className="product-label label-circle label-new">New</span>
                                            <Link to={`/DetailItem/${product.iId}`}>
                                                <img src={URLLink+product.get_barangmediautama[0].vLink} alt="Product" className="product-image" />
                                            </Link>
                    
                                            <div className="product-action-vertical">
                                                <Link to="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></Link>
                                            </div>
                    
                                            <div className="product-action">
                                                <Link to="#" className="btn-product btn-cart" title="Tambahkan ke Keranjang"><span>Tambahkan ke Keranjang</span></Link>
                                            </div>
                                        </figure>
                    
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <Link to="#">{product.get_subkategori.vNama}</Link>
                                            </div>
                                            <h3 className="product-title"><Link to={`/DetailItem/${product.iId}`}>{product.vNama}</Link></h3>
                                            
                                            <div className="product-price">
                                                <span className="new-price">
                                                    <NumberFormat value={product.get_barangkemasanterendah.nHarga} displayType={'text'} thousandSeparator={"."} decimalSeparator={","} prefix={'Rp'} /> 
                                                                    ~ 
                                                    <NumberFormat value={product.get_barangkemasantertinggi.nHarga} displayType={'text'} thousandSeparator={"."} decimalSeparator={","} prefix={'Rp'} />    
                                                </span>
                                            </div>
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{width: "40%"}}></div>
                                                </div>
                                                <span className="ratings-text">( 4 Reviews )</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
            </div>
        </div>
    );
}
 
export default RecommendProduct;