import useFetch from "../../function/useFetch";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";
import { Link } from "react-router-dom";

const override = css`
display: block;
margin: 0 auto;
border-color: red;
`;

const NavbarBottom = () => {
    const URLLink = 'http://localhost:8000';
    const { error, isPending, data: kategoris } = useFetch(URLLink+'/api/kategori');
    return (
        <div className="header-bottom sticky-header">
            <div className="container">
                <div className="header-left">
                    <div className="dropdown category-dropdown is-on" data-visible="true">
                        <Link to="/" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" data-display="static" title="Browse Categories">
                            Semua Kategori
                        </Link>

                        <div className="dropdown-menu">
                            <nav className="side-nav">
                                <ul className="menu-vertical sf-arrows">
                                    {error && <li>{error}</li>}
                                    <ClipLoader loading={isPending} css={override} size={50} />
                                    {
                                        kategoris && kategoris.length>0 &&
                                        kategoris.map((kategori)=>
                                            {
                                                return (
                                                    kategori.get_subkategori.length > 0 ? 
                                                    <li key={kategori.iId} className="megamenu-container">
                                                        <Link className="sf-with-ul" to="#">{kategori.vNama}</Link>

                                                        <div className="megamenu">
                                                            <div className="row no-gutters">
                                                                <div className="col-md-8">
                                                                    <div className="menu-col">
                                                                        <div className="row">
                                                                            <div className="col-md-6">
                                                                                <div className="menu-title">{kategori.vNama}</div>
                                                                                <ul>
                                                                                    {
                                                                                        kategori.get_subkategori.map((sub)=>
                                                                                            {
                                                                                                return (
                                                                                                    <li key={sub.iId}><Link to="/">{sub.vNama}</Link></li>
                                                                                                )
                                                                                            }
                                                                                        )
                                                                                    }
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-4">
                                                                    <div className="banner banner-overlay">
                                                                        <Link to="/" className="banner banner-menu">
                                                                            <img src="/images/demos/demo-13/menu/banner-1.jpg" alt="Banner" />
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    :  
                                                    <li key={kategori.iId}><Link to="/">{kategori.vNama}</Link></li> 
                                                )
                                            } 
                                        ) 
                                    }
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="header-right">
                    <div className="wishlist">
                        <Link to="/Login" data-toggle="modal"><p>Login</p></Link>
                    </div>
                    <div className="wishlist">
                        <Link to="/RegisterBuyer" title="Register">
                            <p>Daftar Akun</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default NavbarBottom;