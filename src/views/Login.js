import useFetch from "../function/useFetch";
import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2'

const Login = () => {
  const URLLink = 'http://localhost:8000';

  const [isPendingall, setisPendingall]=useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const history = useHistory();

  const form = useRef(null);

  const [email, setEmail] = useState('');
  const [errEmail, setErrEmail] = useState(null);
  const [pass, setPass] = useState('');
  const [errPass, setErrPass] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let submitted = true;

    if (!email) {
      setErrEmail("Email harus dilengkapi");
      submitted = false;
    }

    if (!pass) {
      setErrPass("Password harus dilengkapi");
      submitted = false;
    }

    if (submitted) {
      const datalogin = new FormData(form.current);
      setIsSubmitted(true);
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        body: datalogin,
      });
      if (!response.ok) { // error coming back from server
        Swal.fire({  icon: 'error',  title: 'Gagal',  text: 'Terjadi kesalahan pada sistem'})
      }

      const result = await response.json();
      if (!result || result.status === 'gagal') { // error coming back from server
        Swal.fire({  icon: 'error',  title: 'Gagal',  text: 'Terjadi kesalahan pada sistem'})
      }else{
        localStorage.setItem('token',result.message);
        Swal.fire({ title: 'Success', text: 'Selamat datang', icon: 'success', confirmButtonColor: '#3085d6', confirmButtonText: 'OK' }).then((result) => { if (result.value) { history.push('/') } })
      }
    }
  }

  return (
    <main className="main">
      <div className="login-page bg-image pt-8 pb-8" style={{backgroundColor : "#fff"}}>
        <div className="container">
          <div className="form-box">
            <div className="form-tab">
              <ul className="nav nav-pills nav-fill" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="register-tab-2" data-toggle="tab" href="#register-2" role="tab" aria-controls="register-2" aria-selected="true">Login</a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane fade show active" id="register-2" role="tabpanel" aria-labelledby="register-tab-2">
                  <form ref={form} onSubmit={handleSubmit}>

                    <div className="form-group">
                      <label>Email *</label>
                      <input type="email" className={`form-control ${errEmail ? 'is-invalid' : ''}`} id="username" name="username" placeholder="Masukkan email" value={email} onChange={(e) => { setEmail(e.target.value); e.target.value && setErrEmail(null) }}/>
                      <div className="invalid-feedback">{errEmail}</div>
                    </div>

                    <div className="form-group">
                      <label>Password *</label>
                      <input type="password" className={`form-control ${errPass ? 'is-invalid' : ''}`} id="pass" name="pass" placeholder="Masukkan password" value={pass} onChange={(e) => { setPass(e.target.value); e.target.value && setErrPass(null) }}/>
                      <div className="invalid-feedback">{errPass}</div>
                    </div>

                    <div className="form-footer">
                      <button type="submit" className="btn btn-outline-primary-2">
                        {isSubmitted ?
                          <div>
                            <span> Loading...</span>    
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>                      
                          </div>
                          :
                          <div>
                            <span>Login</span> <i className="icon-long-arrow-right"></i>
                          </div>
                        }
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
