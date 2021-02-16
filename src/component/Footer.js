import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-middle">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-3">
                        <div className="widget widget-about">
                            <img src="/images/demos/demo-4/logo.png" className="footer-logo" alt="Footer Logo" width="180" />
                            <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros
                                eu erat. </p>
    
                            <div className="widget-call">
                                <i className="icon-phone"></i>
                                Got Question? Call us 24/7
                                <Link to="tel:#">+62 2121384137</Link>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-sm-6 col-lg-3">
                        <div className="widget">
                            <h4 className="widget-title">BarangPabrik</h4>
    
                            <ul className="widget-list">
                                <li><Link to="about.html">About BarangPabrik</Link></li>
                                <li><Link to="#">Panduan Belanja BarangPabrik</Link></li>
                                <li><Link to="faq.html">FAQ</Link></li>
                                <li><Link to="contact.html">Contact us</Link></li>
                            </ul>
                        </div>
                    </div>
    
                    <div className="col-sm-6 col-lg-3">
                        <div className="widget">
                            <h4 className="widget-title">Customer Service</h4>
    
                            <ul className="widget-list">
                                <li><Link to="#">Payment Methods</Link></li>
                                <li><Link to="#">Returns</Link></li>
                                <li><Link to="#">Shipping</Link></li>
                                <li><Link to="#">Terms and conditions</Link></li>
                                <li><Link to="#">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
    
                    <div className="col-sm-6 col-lg-3">
                        <div className="widget">
                            <h4 className="widget-title">My Account</h4>
    
                            <ul className="widget-list">
                                <li><Link to="#">Sign In</Link></li>
                                <li><Link to="cart.html">View Cart</Link></li>
                                <li><Link to="#">Favorite</Link></li>
                                <li><Link to="#">Track My Order</Link></li>
                                <li><Link to="#">Help</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div className="footer-bottom">
            <div className="container">
                <p className="footer-copyright">Copyright © 2020 BarangPabrik. All Rights Reserved.</p>
                <figure className="footer-payments">
                    <img src="/images/payments.png" alt="Payment methods" width="272" height="20" />
                </figure>
            </div>
        </div>
    </footer>
  );
}
 
export default Footer;