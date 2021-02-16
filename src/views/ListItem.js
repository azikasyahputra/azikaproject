import { useEffect, useState } from "react";
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

const ListItem = () => {
  const URLLink = 'http://localhost:8000';
  const { error, isPending, data: products } = useFetch(URLLink+'/api/product');

  return (
    <main className="main">
      <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
        <div className="container">
          <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Produk</li>
          </ol>
        </div>
      </nav>

      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
				<div className="toolbox">
					<div className="toolbox-left">
					<div className="toolbox-info">
						Showing 
						{ products && 
						<span>{products.countnow} of {products.countall}</span> 
						}
						Products
					</div>
					</div>

					<div className="toolbox-right">
					<div className="toolbox-sort">
						<label for="sortby">Sort by:</label>
						<div className="select-custom">
							<select name="sortby" id="sortby" className="form-control">
								<option value="popularity" selected="selected">Nama</option>
								<option value="rating">Rating</option>
								<option value="date">Tanggal</option>
							</select>
						</div>
					</div>
					</div>
				</div>

				<div className="products mb-3">
					<div className="row justify-content-center">
					{error && <div>{error}</div>}
					<ClipLoader loading={isPending} css={override} size={50} />          
					{
					products && products.listbarang.map((product)=>{
						return (
						<div className="col-6 col-md-4 col-lg-4">
							<div className="product product-7 text-center">
							<figure className="product-media">
								<span className="product-label label-new">New</span>
								<Link to={`/DetailItem/${product.iId}`}>
								<img src={URLLink+product.get_barangmediautama[0].vLink} alt="Product" className="product-image" />
								</Link>

								<div className="product-action-vertical">
									<Link to="#" className="btn-product-icon btn-wishlist btn-expandable"><span>Favorit</span></Link>
								</div>

								<div className="product-action">
									<Link to="#" className="btn-product btn-cart"><span>Tambahkan Ke Keranjang</span></Link>
								</div>
							</figure>

							<div className="product-body">
								<div className="product-cat">
								<Link to="#">{product.get_subkategori.vNama}</Link>
								</div>
								<h3 className="product-title"><Link to={`/DetailItem/${product.iId}`}>{product.vNama}</Link></h3>
								<div className="product-price">
								<NumberFormat value={product.get_barangkemasanterendah.nHarga} displayType={'text'} thousandSeparator={"."} decimalSeparator={","} prefix={'Rp'} /> 
								~ 
								<NumberFormat value={product.get_barangkemasantertinggi.nHarga} displayType={'text'} thousandSeparator={"."} decimalSeparator={","} prefix={'Rp'} />    
								</div>
								<div className="ratings-container">
								<div className="ratings">
									<div className="ratings-val" style={{width: "20%"}}></div>
								</div>
								<span className="ratings-text">( 2 Reviews )</span>
								</div>
							</div>
							</div>
						</div>
						);
					})
					}
					</div>
				</div>

              	<nav aria-label="Page navigation">
					<ul className="pagination justify-content-center">
					<li className="page-item disabled">
						<Link className="page-link page-link-prev" to="#" aria-label="Previous" tabindex="-1" aria-disabled="true">
						<span aria-hidden="true"><i className="icon-long-arrow-left"></i></span>Prev
						</Link>
					</li>
					<li className="page-item active" aria-current="page"><Link className="page-link" to="#">1</Link></li>
					<li className="page-item"><Link className="page-link" to="#">2</Link></li>
					<li className="page-item"><Link className="page-link" to="#">3</Link></li>
					<li className="page-item-total">of 6</li>
					<li className="page-item">
						<Link className="page-link page-link-next" to="#" aria-label="Next">
						Next <span aria-hidden="true"><i className="icon-long-arrow-right"></i></span>
						</Link>
					</li>
					</ul>
				</nav>
            </div>
            <aside className="col-lg-3 order-lg-first">
              <div className="sidebar sidebar-shop">
                <div className="widget widget-clean">
                  <label>Filters:</label>
                  <Link to="#" className="sidebar-filter-clear">Clean All</Link>
                </div>

                <div className="widget widget-collapsible">
                  <h3 className="widget-title">
                    <Link data-toggle="collapse" to="#widget-1" role="button" aria-expanded="true" aria-controls="widget-1">
                      Kategori
                    </Link>
									</h3>

									<div className="collapse show" id="widget-1">
										<div className="widget-body">
											<div className="filter-items filter-items-count">
												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="cat-1" />
														<label className="custom-control-label" for="cat-1">Process Valves</label>
													</div>
													<span className="item-count">3</span>
												</div>

												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="cat-2" />
														<label className="custom-control-label" for="cat-2">Accessories</label>
													</div>
													<span className="item-count">0</span>
												</div>

												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="cat-3" />
														<label className="custom-control-label" for="cat-3">Hoses</label>
													</div>
													<span className="item-count">4</span>
												</div>

												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="cat-4" />
														<label className="custom-control-label" for="cat-4">Strainers, Manifolds and Other Fluid Handling Products</label>
													</div>
													<span className="item-count">2</span>
												</div>

												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="cat-5" />
														<label className="custom-control-label" for="cat-5">Instrumentation & Sampling</label>
													</div>
													<span className="item-count">2</span>
												</div>

												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="cat-6" />
														<label className="custom-control-label" for="cat-6">Lined Pipe, Fittings, Spacers, and Expansion Joints</label>
													</div>
													<span className="item-count">1</span>
												</div>

												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="cat-7" />
														<label className="custom-control-label" for="cat-7">Pumps</label>
													</div>
													<span className="item-count">1</span>
												</div>

												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="cat-8" />
														<label className="custom-control-label" for="cat-8">TP410 - Flow of Fluids</label>
													</div>
													<span className="item-count">0</span>
                          </div>
                                                
                          <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="cat-8" />
                              <label className="custom-control-label" for="cat-8">Automation</label>
                            </div>
                            <span className="item-count">0</span>
                          </div>

                          <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="cat-8" />
                              <label className="custom-control-label" for="cat-8">Valve Service</label>
                            </div>
                            <span className="item-count">0</span>
                          </div>

                          <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="cat-8" />
                              <label className="custom-control-label" for="cat-8">Tank Wagon System</label>
                            </div>
                            <span className="item-count">0</span>
                          </div>                         
											</div>
										</div>
									</div>
                </div>

                <div className="widget widget-collapsible">
                  	<h3 className="widget-title">
                    	<Link data-toggle="collapse" to="#widget-2" role="button" aria-expanded="true" aria-controls="widget-2">
                      		Brands
						</Link>
					</h3>

					<div className="collapse show" id="widget-2">
						<div className="widget-body">
							<div className="filter-items">
								<div className="filter-item">
									<div className="custom-control custom-checkbox">
										<input type="checkbox" className="custom-control-input" id="brand-1" />
										<label className="custom-control-label" for="brand-1">Aloyco</label>
									</div>
								</div>

								<div className="filter-item">
									<div className="custom-control custom-checkbox">
										<input type="checkbox" className="custom-control-input" id="brand-2" />
										<label className="custom-control-label" for="brand-2">Center Line</label>
									</div>
								</div>
								<div className="filter-item">
									<div className="custom-control custom-checkbox">
										<input type="checkbox" className="custom-control-input" id="brand-3" />
										<label className="custom-control-label" for="brand-3">Dou-Chek</label>
									</div>
								</div>
								<div className="filter-item">
									<div className="custom-control custom-checkbox">
										<input type="checkbox" className="custom-control-input" id="brand-4" />
										<label className="custom-control-label" for="brand-4">Flowseal</label>
									</div>
								</div>
								<div className="filter-item">
									<div className="custom-control custom-checkbox">
										<input type="checkbox" className="custom-control-input" id="brand-5" />
										<label className="custom-control-label" for="brand-5">Crane</label>
									</div>
								</div>
								<div className="filter-item">
									<div className="custom-control custom-checkbox">
										<input type="checkbox" className="custom-control-input" id="brand-6" />
										<label className="custom-control-label" for="brand-6">Krombach Armaturen</label>
									</div>
								</div>
								<div className="filter-item">
									<div className="custom-control custom-checkbox">
										<input type="checkbox" className="custom-control-input" id="brand-7" />
										<label className="custom-control-label" for="brand-7">Xomox</label>
									</div>
								</div>
							</div>
						</div>
					</div>
                </div>
                                
                <div className="widget widget-collapsible">
                  <h3 className="widget-title">
                    <Link data-toggle="collapse" to="#widget-3" role="button" aria-expanded="true" aria-controls="widget-3">
                      Keaslian
                    </Link>
                  </h3>

									<div className="collapse show" id="widget-3">
										<div className="widget-body">
											<div className="filter-items">
												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="brand-1" />
														<label className="custom-control-label" for="brand-1">Asli</label>
													</div>
												</div>
												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="brand-2" />
														<label className="custom-control-label" for="brand-2">KW</label>
													</div>
												</div>
											</div>
										</div>
									</div>
                </div>
                                
                <div className="widget widget-collapsible">
                  <h3 className="widget-title">
                    <Link data-toggle="collapse" to="#widget-4" role="button" aria-expanded="true" aria-controls="widget-4">
                      Pengiriman
                    </Link>
									</h3>

									<div className="collapse show" id="widget-4">
										<div className="widget-body">
											<div className="filter-items">
												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="brand-1" />
														<label className="custom-control-label" for="brand-1">Cargo</label>
													</div>
												</div>
												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="brand-2" />
														<label className="custom-control-label" for="brand-2">Pesawat</label>
													</div>
												</div>
											</div>
										</div>
									</div>
                </div>
                                
                <div className="widget widget-collapsible">
                  <h3 className="widget-title">
                    <Link data-toggle="collapse" to="#widget-5" role="button" aria-expanded="true" aria-controls="widget-5">
                      Pembayaran
                    </Link>
									</h3>

									<div className="collapse show" id="widget-5">
										<div className="widget-body">
											<div className="filter-items">
												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="brand-1" />
														<label className="custom-control-label" for="brand-1">Transfer</label>
													</div>
												</div>
												<div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="brand-2" />
														<label className="custom-control-label" for="brand-2">Kartu Kredit</label>
													</div>
                        </div>                                                
                        <div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input type="checkbox" className="custom-control-input" id="brand-3" />
														<label className="custom-control-label" for="brand-3">Tempo</label>
													</div>
												</div>
											</div>
										</div>
									</div>
                </div>

                <div className="widget widget-collapsible">
                  <h3 className="widget-title">
                    <Link data-toggle="collapse" to="#widget-6" role="button" aria-expanded="true" aria-controls="widget-6">
                        Harga
                    </Link>
                  </h3>

									<div className="collapse show" id="widget-6">
										<div className="widget-body">
                      <div className="filter-price">
                          <div className="filter-price-text">
                              Price Range:
                              <span id="filter-price-range"></span>
                          </div>

                          <div id="price-slider"></div>
                      </div>
										</div>
									</div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
 
export default ListItem;
