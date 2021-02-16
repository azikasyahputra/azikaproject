import { useEffect, useState } from "react";
import NumberFormat from 'react-number-format';
import useFetch from "../function/useFetch";
import { Link, useHistory, useParams } from "react-router-dom";

const DetailItem = () => {
  const { id } = useParams();
  const URLLink = 'http://localhost:8000';
  const { error, isPending, data: products } = useFetch(URLLink+'/api/product/' + id);
  const history = useHistory();

  const [hargaSatuan,setHargaSatuan] = useState(null);
  const [kemasan,setKemasan] = useState(null);
  const [gambarUtama,setGambarUtama] = useState(null);
  const [thumbnailUtama,setThumbnailUtama] = useState(null);


  const changeKemasan = (id) => {
    setKemasan(id);
    const allkemasan = products.get_barangkemasan;
    let hasilfilter =  allkemasan.find(el => el.iId == id);
    setHargaSatuan(hasilfilter.nHarga);
  };

  const changeGambarUtama = (id) => {
    const allmedia = products.get_barangmedia;
    let hasilfilter =  allmedia.find(el => el.iId == id);
    setGambarUtama(hasilfilter.vLink);
    setThumbnailUtama(id);
  };

  return (
    <main className="main">
      <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
        <div className="container d-flex align-items-center">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Products</a></li>
            <li className="breadcrumb-item active" aria-current="page">Default</li>
          </ol>

          <nav className="product-pager ml-auto" aria-label="Product">
            <Link className="product-pager-link product-pager-prev" to="#" aria-label="Previous" tabIndex="-1">
              <i className="icon-angle-left"></i>
                <span>Prev</span>
            </Link>

            <Link className="product-pager-link product-pager-next" to="#" aria-label="Next" tabIndex="-1">
              <span>Next</span>
              <i className="icon-angle-right"></i>
            </Link>
          </nav>
        </div>
      </nav>

      <div className="page-content">
        <div className="container">
          <div className="product-details-top">
            <div className="row">
              <div className="col-md-6">
                {gambarUtama
                  ?
                  <div className="row imageExpanded" style={{backgroundImage: "url("+URLLink+gambarUtama+")"}}></div>
                  :
                  <div className="row imageExpanded" style={products && {backgroundImage: "url("+URLLink+products.get_barangmediautama[0].vLink+")"}}></div>  
                }
                <div className="row">
                  {products && products.get_barangmedia.map(product => {
                      return(
                        <div className="col-md-2">
                          <img key={product.iId} src={URLLink+product.vLink} alt="..." className={`img-thumbnail${product.iId===thumbnailUtama ? '-active' : ''}`} onClick={() => changeGambarUtama(product.iId)}/>
                        </div>
                      );
                    })
                  }
                </div>
              </div>

              <div className="col-md-6">
                <div className="product-details">
                  <h1 className="product-title">{products && products.vNama}</h1>
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{width: "80%"}}></div>
                    </div>
                    <a className="ratings-text" href="#product-review-link" id="review-link">( 2 Reviews )</a>
                  </div>

                  <div className="product-price">
                    { hargaSatuan ?
                      <div>
                        <NumberFormat value={hargaSatuan} displayType={'text'} thousandSeparator={"."} decimalSeparator={","} prefix={'Rp'} /> 
                      </div>
                      :
                      <div>
                        <NumberFormat value={products && products.get_barangkemasanterendah.nHarga} displayType={'text'} thousandSeparator={"."} decimalSeparator={","} prefix={'Rp'} /> 
                        ~ 
                        <NumberFormat value={products && products.get_barangkemasantertinggi.nHarga} displayType={'text'} thousandSeparator={"."} decimalSeparator={","} prefix={'Rp'} />    
                      </div>
                    }
                  </div>

                  <div className="product-content">
                    <p>{products && products.vDeskripsisingkat}</p>
                  </div>

                  <div className="details-filter-row details-row-size mb-md-1">
                    <label>Size:</label>
                
                    <div className="product-size">
                      {products && products.get_barangkemasan.map(product=>{
                          return(
                            <Link key={product.iId} to="#" onClick={() => changeKemasan(product.iId)}>{product.vNama}</Link>
                          );
                        })
                      }
                    </div>
                  </div>

                  <div className="details-filter-row details-row-size">
                      <label style={{width:"30%"}}>Masa Persiapan Barang:</label>
                      <p>3 - 7 Hari Kerja</p>
                  </div>

                  <div className="details-filter-row details-row-size">
                    <label>Qty:</label>
                    <div className="product-details-quantity">
                      <input type="number" id="qty" className="form-control" value="1" min="1" max="10" step="1" data-decimals="0" required />
                    </div>
                  </div>

                  <div className="product-details-action">
                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>

                    <div className="details-action-wrapper">
                      <a href="#" className="btn-product btn-wishlist" title="Wishlist"><span>Add to Wishlist</span></a>
                    </div>
                  </div>

                  <div className="product-details-footer">
                    <div className="product-cat">
                      <span>Category:</span>
                      <a href="#">Ball Valves</a>,
                      <a href="#">Xomox</a>
                    </div>

                    <div className="social-icons social-icons-sm">
                      <span className="social-label">Share:</span>
                        <a href="#" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                        <a href="#" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                        <a href="#" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                        <a href="#" className="social-icon" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="product-details-tab">
            <ul className="nav nav-pills justify-content-center" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="spesifikasi-desc-link" data-toggle="tab" href="#spesifikasi-desc-tab" role="tab" aria-controls="spesifikasi-desc-tab" aria-selected="true">Spesifikasi</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="dimensi-drawing-link" data-toggle="tab" href="#dimensi-drawing-tab" role="tab" aria-controls="dimensi-drawing-tab" aria-selected="false">Dimensi & Drawing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="katalog-link" data-toggle="tab" href="#katalog-tab" role="tab" aria-controls="katalog-tab" aria-selected="false">Katalog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="sertifikat-link" data-toggle="tab" href="#sertifikat-tab" role="tab" aria-controls="sertifikat-tab" aria-selected="false">Sertifikat</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="syarat-ketentuan-link" data-toggle="tab" href="#syarat-ketentuan-tab" role="tab" aria-controls="syarat-ketentuan-tab" aria-selected="false">Syarat dan Ketentuan</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="product-review-link" data-toggle="tab" href="#product-review-tab" role="tab" aria-controls="product-review-tab" aria-selected="false">Reviews (2)</a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane fade show active" id="spesifikasi-desc-tab" role="tabpanel" aria-labelledby="product-desc-link">
                <div className="product-desc-content">
                  <p>{products && products.vDeskripsidetail}</p>
                </div>
              </div>
              <div className="tab-pane fade" id="dimensi-drawing-tab" role="tabpanel" aria-labelledby="dimensi-drawing-link">
                <div className="product-desc-content">
                  {products ?
                  <img src={URLLink+products.vDimensidrawing} alt="..." className="img-thumbnail"  />
                  :
                  <img src="" alt="..." className="img-thumbnail" />
                }
                </div>
              </div>
              <div className="tab-pane fade" id="katalog-tab" role="tabpanel" aria-labelledby="katalog-link">
                <div className="product-desc-content">
                  <h3>Katalog</h3>
                    {products &&
                    <a href={URLLink+products.vKatalog} target="_blank">katalog</a>
                    }
                </div>
              </div>
              <div className="tab-pane fade" id="sertifikat-tab" role="tabpanel" aria-labelledby="sertifikat-link">
                <div className="product-desc-content">
                  <h3>Sertifikat</h3>
                    <table className="table">
                      <thead>
                        <tr>
                          <td>No </td>
                          <td>Nama </td>
                          <td>Jenis </td>
                        </tr>
                      </thead>
                      <tbody>
                      {products && products.get_barangsertifikat.map((product,index)=>{
                          return(
                            <tr>  
                              <td>{index+1}</td>
                              <td>{product.vNama}</td>
                              <td>{product.eAsli}</td>
                            </tr>
                          );
                        })
                      }
                      </tbody>
                      </table>
                </div>
              </div>
              <div className="tab-pane fade" id="syarat-ketentuan-tab" role="tabpanel" aria-labelledby="syarat-ketentuan-link">
                <div className="product-desc-content">
                  {products && products.get_barangsyaratketentuan.map((product)=>{
                          return(
                          <p>{product.vIsi}</p>
                          );
                        })
                      }
                </div>
              </div>
              <div className="tab-pane fade" id="product-review-tab" role="tabpanel" aria-labelledby="product-review-link">
                <div className="reviews">
                  <h3>Reviews (2)</h3>
                  <div className="review">
                    <div className="row no-gutters">
                      <div className="col-auto">
                        <h4><a href="#">Samanta J.</a></h4>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: "80%"}}></div>
                          </div>
                        </div>
                        <span className="review-date">6 days ago</span>
                      </div>
                      <div className="col">
                        <h4>Good, perfect size</h4>
                        <div className="review-content">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!</p>
                        </div>

                        <div className="review-action">
                          <a href="#"><i className="icon-thumbs-up"></i>Helpful (2)</a>
                        <a href="#"><i className="icon-thumbs-down"></i>Unhelpful (0)</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="review">
                    <div className="row no-gutters">
                      <div className="col-auto">
                        <h4><a href="#">John Doe</a></h4>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: "100%"}}></div>
                          </div>
                        </div>
                        <span className="review-date">5 days ago</span>
                      </div>
                      <div className="col">
                        <h4>Very good</h4>
                        <div className="review-content">
                          <p>Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!</p>
                        </div>

                        <div className="review-action">
                          <a href="#"><i className="icon-thumbs-up"></i>Helpful (0)</a>
                          <a href="#"><i className="icon-thumbs-down"></i>Unhelpful (0)</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
 
export default DetailItem;
