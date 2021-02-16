const Benefit = () => {
  return (
    <div className="icon-boxes-container bg-transparent">
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-lg-4">
                    <div className="icon-box icon-box-side">
                        <span className="icon-box-icon text-dark">
                            <i className="icon-rocket"></i>
                        </span>
                        <div className="icon-box-content">
                            <h3 className="icon-box-title">Free Shipping</h3>
                            <p>Orders $50 or more</p>
                        </div>
                    </div>
                </div>
    
                <div className="col-sm-6 col-lg-4">
                    <div className="icon-box icon-box-side">
                        <span className="icon-box-icon text-dark">
                            <i className="icon-rotate-left"></i>
                        </span>
    
                        <div className="icon-box-content">
                            <h3 className="icon-box-title">Free Returns</h3>
                            <p>Within 30 days</p>
                        </div>
                    </div>
                </div>
    
                <div className="col-sm-6 col-lg-4">
                    <div className="icon-box icon-box-side">
                        <span className="icon-box-icon text-dark">
                            <i className="icon-life-ring"></i>
                        </span>
    
                        <div className="icon-box-content">
                            <h3 className="icon-box-title">We Support</h3>
                            <p>24/7 amazing services</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
 
export default Benefit;