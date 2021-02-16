import useFetch from "../function/useFetch";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import NumberFormat from 'react-number-format';
import { Link } from "react-router-dom";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
display: block;
margin: 0 auto;
border-color: red;
`;

const TrendingProduct = () => {
    const URLLink = 'http://localhost:8000';
    const { error, isPending, data: products } = useFetch(URLLink+'/api/trendingproduct');

    return (
        <div className="pt-5 pb-6">
            <div className="container trending-products">
                <div className="heading heading-flex mb-3">
                    <div className="heading-left">
                        <h2 className="title">Trending Products</h2>
                    </div>
                    <div className="heading-right">
                        <ul className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="trending-top-link" data-toggle="tab" href="#trending-top-tab"
                                    role="tab" aria-controls="trending-top-tab" aria-selected="true">Top Rated</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="trending-best-link" data-toggle="tab" href="#trending-best-tab"
                                    role="tab" aria-controls="trending-best-tab" aria-selected="false">Best Selling</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="trending-sale-link" data-toggle="tab" href="#trending-sale-tab"
                                    role="tab" aria-controls="trending-sale-tab" aria-selected="false">On Sale</a>
                            </li>
                        </ul>
                    </div>
                </div>
        
                <div className="row">
                    <div className="col-xl-5col d-none d-xl-block">
                        <div className="banner">
                            <Link to="\ListItem">
                                <img src="/images/demos/demo-4/banners/banner-5.jpg" alt="banner" />
                            </Link>
                        </div>
                    </div>
        
                    <div className="col-xl-4-5col">
                        <div className="tab-content tab-content-carousel just-action-icons-sm">
                            <div className="tab-pane p-0 fade show active" id="trending-top-tab" role="tabpanel" aria-labelledby="trending-top-link">
                                {error && <div>{error}</div>}
                                <ClipLoader loading={isPending} css={override} size={50} />   
                                {
                                    products && (
                                        <OwlCarousel className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" items={5} nav dots margin={20}>
                                            {
                                                products.toprated.map((toprateds)=>{
                                                    return(
                                                        <div key={toprateds.iId} className="product product-2">
                                                            <figure className="product-media">
                                                                <span className="product-label label-circle label-top">Top</span>
                                                                <Link to={`/DetailItem/${toprateds.iId}`}>
                                                                    <img src={URLLink+toprateds.get_barangmediautama[0].vLink} alt="Product" className="product-image" />
                                                                </Link>

                                                                <div className="product-action-vertical">
                                                                    <Link to="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></Link>
                                                                </div>

                                                                <div className="product-action">
                                                                    <Link to="#" className="btn-product btn-cart"
                                                                        title="Tambahkan ke Keranjang"><span>Tambahkan ke Keranjang</span></Link>
                                                                </div>
                                                            </figure>

                                                            <div className="product-body">
                                                                <div className="product-cat">
                                                                    <Link to="#">{toprateds.get_subkategori.vNama}</Link>
                                                                </div>
                                                                <h3 className="product-title">
                                                                    <Link to={`/DetailItem/${toprateds.iId}`}>{toprateds.vNama}</Link>
                                                                </h3>
                                                                <div className="product-price">
                                                                    <NumberFormat value={toprateds.get_barangkemasanterendah.nHarga} displayType={'text'} thousandSeparator={"."} decimalSeparator={","} prefix={'Rp'} /> 
                                                                    ~ 
                                                                    <NumberFormat value={toprateds.get_barangkemasantertinggi.nHarga} displayType={'text'} thousandSeparator={"."} decimalSeparator={","} prefix={'Rp'} />
                                                                </div>
                                                                <div className="ratings-container">
                                                                    <div className="ratings">
                                                                        <div className="ratings-val" style={{width: "100%"}}></div>
                                                                        
                                                                    </div>
                                                                    <span className="ratings-text">( 4 Reviews )</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </OwlCarousel>
                                    )
                                }
                            </div>
                            <div className="tab-pane p-0 fade" id="trending-best-tab" role="tabpanel" aria-labelledby="trending-best-link">
                                {error && <div>{error}</div>}
                                <ClipLoader loading={isPending} css={override} size={50} />   
                                {
                                    products && (
                                        <OwlCarousel className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" items={5} nav dots margin={20}>
                                            {
                                                products.bestselling.map((bestsellings)=>{
                                                    return(
                                                        <div key={bestsellings.iId} className="product product-2">
                                                            <figure className="product-media">
                                                                <span className="product-label label-circle label-new">New</span>
                                                                <Link to={`/DetailItem/${bestsellings.iId}`}>
                                                                    <img src={URLLink+bestsellings.get_barangmediautama[0].vLink} alt="Product" className="product-image" />
                                                                </Link>

                                                                <div className="product-action-vertical">
                                                                    <Link to="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></Link>
                                                                </div>

                                                                <div className="product-action">
                                                                    <Link to="#" className="btn-product btn-cart"
                                                                        title="Tambahkan ke Keranjang"><span>Tambahkan ke Keranjang</span></Link>
                                                                </div>
                                                            </figure>

                                                            <div className="product-body">
                                                                <div className="product-cat">
                                                                    <Link to="#">{bestsellings.get_subkategori.vNama}</Link>
                                                                </div>
                                                                <h3 className="product-title">
                                                                    <Link to={`/DetailItem/${bestsellings.iId}`}>{bestsellings.vNama}</Link>
                                                                </h3>
                                                                <div className="product-price">
                                                                    <NumberFormat value={bestsellings.get_barangkemasanterendah.nHarga} displayType={'text'} thousandSeparator={"."} decimalSeparator={","} prefix={'Rp'} /> 
                                                                    ~ 
                                                                    <NumberFormat value={bestsellings.get_barangkemasantertinggi.nHarga} displayType={'text'} thousandSeparator={"."} decimalSeparator={","} prefix={'Rp'} />
                                                                </div>
                                                                <div className="ratings-container">
                                                                    <div className="ratings">
                                                                        <div className="ratings-val" style={{width: "100%"}}></div>
                                                                        
                                                                    </div>
                                                                    <span className="ratings-text">( 4 Reviews )</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </OwlCarousel>
                                    )
                                }
                            </div>
                            <div className="tab-pane p-0 fade" id="trending-sale-tab" role="tabpanel" aria-labelledby="trending-sale-link">
                                {error && <div>{error}</div>}
                                <ClipLoader loading={isPending} css={override} size={50} />   
                                {
                                    products && (
                                        <OwlCarousel className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" items={5} nav dots margin={20}>
                                            {
                                                products.onsale.map((onsales)=>{
                                                    return(
                                                        <div key={onsales.iId} className="product product-2">
                                                            <figure className="product-media">
                                                                <span className="product-label label-circle label-sale">Sale</span>
                                                                <Link to={`/DetailItem/${onsales.iId}`}>
                                                                    <img src={URLLink+onsales.get_barangmediautama[0].vLink} alt="Product" className="product-image" />
                                                                </Link>

                                                                <div className="product-action-vertical">
                                                                    <Link to="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></Link>
                                                                </div>

                                                                <div className="product-action">
                                                                    <Link to="#" className="btn-product btn-cart"
                                                                        title="Tambahkan ke Keranjang"><span>Tambahkan ke Keranjang</span></Link>
                                                                </div>
                                                            </figure>

                                                            <div className="product-body">
                                                                <div className="product-cat">
                                                                    <Link to="#">{onsales.get_subkategori.vNama}</Link>
                                                                </div>
                                                                <h3 className="product-title">
                                                                    <Link to={`/DetailItem/${onsales.iId}`}>{onsales.vNama}</Link>
                                                                </h3>
                                                                <div className="product-price">
                                                                    <NumberFormat value={onsales.get_barangkemasanterendah.nHarga} displayType={'text'} thousandSeparator={"."} decimalSeparator={","} prefix={'Rp'} /> 
                                                                    ~ 
                                                                    <NumberFormat value={onsales.get_barangkemasantertinggi.nHarga} displayType={'text'} thousandSeparator={"."} decimalSeparator={","} prefix={'Rp'} />
                                                                </div>
                                                                <div className="ratings-container">
                                                                    <div className="ratings">
                                                                        <div className="ratings-val" style={{width: "100%"}}></div>
                                                                        
                                                                    </div>
                                                                    <span className="ratings-text">( 4 Reviews )</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </OwlCarousel>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrendingProduct;