import { Link } from "react-router-dom";

const NavbarTop = () => {
  return (
    <div className="header-top">
        <div className="container">
            <div className="header-left">
                <ul className="top-menu">
                    <li>
                        <ul>
                            <li>
                                <div className="header-dropdown">
                                    <Link to="/">Tentang BarangPabrik</Link>
                                    <div className="header-menu">
                                        <ul>
                                            <li><Link to="/About">Tentang Kami</Link></li>
                                            <li><Link to="/Testimoni">Testimoni Client</Link></li>
                                            <li><Link to="/RegisterSupplier">Menjadi Vendor Kami</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="header-right">

                <ul className="top-menu">
                    <li>
                        <ul>
                            <li style={{textTransform: "none"}}><Link to="/">Panduan Belanja</Link></li>
                            <li>
                                <div className="header-dropdown">
                                    <Link to="/">IDR</Link>
                                    <div className="header-menu">
                                        <ul>
                                            <li><Link to="/">IDR</Link></li>
                                            <li><Link to="/">USD</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="header-dropdown">
                                    <Link to="/">Indonesia</Link>
                                    <div className="header-menu">
                                        <ul>
                                            <li><Link to="/">Indonesia</Link></li>
                                            <li><Link to="/">English</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="header-dropdown">
                                    <Link to="/">Kontak</Link>
                                    <div className="header-menu">
                                        <ul>
                                            <li><Link to="/">Call: +62 2121384137</Link></li>
                                            <li><Link to="/">Email: help@barangpabrik.com</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
}
 
export default NavbarTop;