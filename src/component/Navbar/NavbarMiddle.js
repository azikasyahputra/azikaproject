import { Link } from "react-router-dom";

const NavbarMiddle = () => {
  return (
    <div className="header-middle">
        <div className="container">
            <div className="header-left">
                <button className="mobile-menu-toggler">
                    <span className="sr-only">Toggle mobile menu</span>
                    <i className="icon-bars"></i>
                </button>
                    
                <Link to="/" className="logo">
                    <img src="/imagesprd/logo.png" alt="Logo" width="180" />
                </Link>
            </div>

            <div className="header-center">
                <div className="header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block">
                    <Link to="#" className="search-toggle" role="button"><i className="icon-search"></i></Link>
                    <form action="#" method="get">
                        <div className="header-search-wrapper search-wrapper-wide">
                            <div className="select-custom">
                                <select id="cat" name="cat">
                                    <option value="">Semua Produk</option>
                                    <option value="1">Alat Keselamatan Kerja</option>
                                    <option value="2">Alat Potong dan Komponen</option>
                                    <option value="3">Perkakas Manual dan Otomatis</option>
                                    <option value="4">Bahan Kimia dan Perekat</option>
                                    <option value="5">Barang Mekanikal dan Komponen</option>
                                    <option value="6">Barang Elektrikal dan Komponen</option>
                                    <option value="7">Barang Instrumentasi dan Komponen</option>
                                    <option value="8">Mesin Produksi</option>
                                </select>
                            </div>
                            <label htmlFor="q" className="sr-only">Cari</label>
                            <input type="search" className="form-control" name="q" id="q" placeholder="Cari produk ..." required />
                            <button className="btn btn-grey" type="submit"><i className="icon-search"></i></button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="header-right">
                <div className="header-dropdown-link">
                    <div className="dropdown cart-dropdown">
                        <Link to="/" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                            <i className="icon-shopping-cart"></i>
                            <span className="cart-count">2</span>
                            <span className="cart-txt">Keranjang</span>
                        </Link>

                        <div className="dropdown-menu dropdown-menu-right">
                            <div className="dropdown-cart-products">
                                <div className="product">
                                    <div className="product-cart-details">
                                        <h4 className="product-title">
                                            <Link to="/">CRANE® Air Rack and Pinion Pneumatic Actuator</Link>
                                        </h4>

                                        <span className="cart-product-info">
                                            <span className="cart-product-qty">1</span>
                                            x Rp. 84.000
                                        </span>
                                    </div>

                                    <figure className="product-image-container">
                                        <Link to="/" className="product-image">
                                            <img src="../assets/imagesprd/products/krombach-self-operated-aerating-valve.jpg" alt="product" />
                                        </Link>
                                    </figure>
                                    <Link to="#" className="btn-remove" title="Hapus"><i className="icon-close"></i></Link>
                                </div>

                                <div className="product">
                                    <div className="product-cart-details">
                                        <h4 className="product-title">
                                            <Link to="#">DEPA® Closed Surface Diaphragms Series Nopped E4®</Link>
                                        </h4>

                                        <span className="cart-product-info">
                                            <span className="cart-product-qty">1</span>
                                            x Rp. 76.000
                                        </span>
                                    </div>

                                    <figure className="product-image-container">
                                        <Link to="#" className="product-image">
                                            <img src="../assets/imagesprd/products/xomox-pbv-one-piece.jpg" alt="product" />
                                        </Link>
                                    </figure>
                                    <Link to="#" className="btn-remove" title="Remove Product"><i className="icon-close"></i></Link>
                                </div>
                            </div>

                            <div className="dropdown-cart-total">
                                <span>Total</span>

                                <span className="cart-total-price">$160.00</span>
                            </div>

                            <div className="dropdown-cart-action">
                                <Link to="#" className="btn btn-primary">View Cart</Link>
                                <Link to="#" className="btn btn-outline-primary-2"><span>Process</span><i className="icon-long-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
 
export default NavbarMiddle;