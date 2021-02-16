// import { useEffect, useState } from "react";
import useFetch from "../function/useFetch";
import { Link } from "react-router-dom";

const Testimoni = () => {
  const URLLink = 'http://localhost:8000';
  const { error, isPending, data: testimonis } = useFetch(URLLink+'/api/testimoniumum');

  return (
    <main className="main">
      <br/>
      <div className="page-content">
        <div className="container">
          <div className="entry-container max-col-3" data-layout="fitRows">
            { testimonis && testimonis.map((testimoni)=>{
                return (
                  <div className="entry-item col-sm-6 col-lg-4">
                    <article className="entry entry-grid text-center">
                      <figure className="entry-media">
                        <Link to="/DetailTestimoni">
                          <img src={URLLink+testimoni.vProfilepic} alt="desc" />
                        </Link>
                      </figure>

                      <div className="entry-body">
                        <div className="entry-meta">
                          <span className="entry-author">
                            by <Link to="/DetailTestimoni">{testimoni.vNama}</Link>
                          </span>
                          <span className="meta-separator">|</span>
                          <Link to="/DetailTestimoni">{testimoni.tCreated}</Link>
                          <span className="meta-separator">|</span>
                        </div>

                        <h2 className="entry-title">
                          <Link to="/DetailTestimoni">{testimoni.vJudul}</Link>
                        </h2>

                        <div className="entry-content">
                          <p>{testimoni.vReview}...</p>
                          <Link to="/DetailTestimoni" className="read-more">Continue Reading</Link>
                        </div>
                      </div>
                    </article>
                  </div>
                )})}
          </div>
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <Link className="page-link page-link-prev" to="/DetailTestimoni" aria-label="Previous" tabindex="-1" aria-disabled="true">
                  <span aria-hidden="true"><i className="icon-long-arrow-left"></i></span>Prev
                </Link>
              </li>
              <li className="page-item active" aria-current="page"><Link className="page-link" to="/DetailTestimoni">1</Link></li>
              <li className="page-item"><Link className="page-link" to="/DetailTestimoni">2</Link></li>
              <li className="page-item">
                <Link className="page-link page-link-next" to="/DetailTestimoni" aria-label="Next">
                  Next <span aria-hidden="true"><i className="icon-long-arrow-right"></i></span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  )
}
 
export default Testimoni;
