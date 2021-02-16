import useFetch from "../function/useFetch";
import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2'

const RegisterBuyerIndividu = () => {
  const URLLink = 'http://localhost:8000';
  const { error, isPending, data: badanusahas } = useFetch(URLLink+'/api/badanusaha');
  const { error: error2, isPending: isPending2, data: provinsis } = useFetch(URLLink+'/api/provinsi');

  const [isPendingall, setisPendingall]=useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const history = useHistory();

  const form = useRef(null);

  const [nama, setNama] = useState('');
  const [errNama, setErrNama] = useState(null);
  const [noTelp, setNoTelp] = useState('');
  const [errNoTelp, setErrNoTelp] = useState(null);
  const [badanUsaha, setBadanUsaha] = useState('');
  const [errBadanUsaha, setErrBadanUsaha] = useState(null);
  const [ktp, setKtp] = useState('');
  const [errKtp, setErrKtp] = useState(null);
  const [namaAlamat, setNamaAlamat] = useState('');
  const [errNamaAlamat, setErrNamaAlamat] = useState(null);
  const [provinsi, setProvinsi] = useState('');
  const [errProvinsi, setErrProvinsi] = useState(null);
  const [dataKota, setDataKota] = useState('');
  const [kota, setKota] = useState('');
  const [errKota, setErrKota] = useState(null);
  const [dataKecamatan, setDataKecamatan] = useState('');
  const [kecamatan, setKecamatan] = useState('');
  const [errKecamatan, setErrKecamatan] = useState(null);
  const [dataKelurahan, setDataKelurahan] = useState('');
  const [kelurahan, setKelurahan] = useState('');
  const [errKelurahan, setErrKelurahan] = useState(null);
  const [kodepos, setKodepos] = useState('');
  const [errKodepos, setErrKodepos] = useState(null);
  const [alamat, setAlamat] = useState('');
  const [errAlamat, setErrAlamat] = useState(null);
  const [npwp, setNpwp] = useState('');
  const [errNpwp, setErrNpwp] = useState(null);
  const [email, setEmail] = useState('');
  const [errEmail, setErrEmail] = useState(null);
  const [pass, setPass] = useState('');
  const [errPass, setErrPass] = useState(null);
  const [confirmPass, setConfirmPass] = useState('');
  const [errConfirmPass, setErrConfirmPass] = useState(null);

  const [fileKtp, setfileKtp] = useState();
  const [errFileKtp, setErrFileKtp] = useState(null);
  const [fileNpwp, setfileNpwp] = useState();
  const [errFileNpwp, setErrFileNpwp] = useState(null);
  const [profilePic, setProfilepic] = useState();
  const [errProfilePic, setErrProfilePic] = useState(null);

  const changeProfilepic = (event) => {
    if (event.target.files[0].type !== "image/png" && event.target.files[0].type !== "image/jpeg") {
      setErrProfilePic("Format foto profil hanya diizinkan jpeg dan png");
    } else {
      setProfilepic(event.target.files[0]);
      event.target.files[0] && setErrProfilePic(null);
    }
  };

  const changeFilenpwp = (event) => {
    if (event.target.files[0].type !== "image/png" && event.target.files[0].type !== "image/jpeg" && event.target.files[0].type !== "application/pdf") {
      setErrFileNpwp("Format file siup hanya diizinkan jpeg, png, dan pdf");
    } else {
      setfileNpwp(event.target.files[0]);
      event.target.files[0] && setErrFileNpwp(null);
    }
  };

  const changeFilektp = (event) => {
    if (event.target.files[0].type !== "image/png" && event.target.files[0].type !== "image/jpeg" && event.target.files[0].type !== "application/pdf") {
      setErrFileKtp("Format file siup hanya diizinkan jpeg, png, dan pdf");
    } else {
      setfileKtp(event.target.files[0]);
      event.target.files[0] && setErrFileKtp(null);
    }
  };

  const changeProvinsi = async (event) => {
    setProvinsi(event.target.options[event.target.selectedIndex].text);
    event.target.options[event.target.selectedIndex].text && setErrProvinsi(null);
    localStorage.setItem('namaProvinsi', event.target.options[event.target.selectedIndex].text);
    let namaProvinsi = localStorage.getItem('namaProvinsi');
    setAlamat("\n "+namaProvinsi);
    setisPendingall(true);   

    const response = await fetch('http://localhost:8000/api/kota/'+event.target.value, {method: 'GET'});
    if(!response.ok){
       throw Error('could not fetch the data for that resource');
    }

    const result = await response.json();
    if(!result){
      throw Error('data empty');
    }else{
      setisPendingall(false);
      setDataKota(result);
      setDataKecamatan(null);
      setDataKelurahan(null);
      setKodepos(""); 
    }
  };

  const changeKota = async (event) => {
    setKota(event.target.options[event.target.selectedIndex].text);
    event.target.options[event.target.selectedIndex].text && setErrKota(null);
    localStorage.setItem('namaKota', event.target.options[event.target.selectedIndex].text);
    let namaProvinsi = localStorage.getItem('namaProvinsi');
    let namaKota = localStorage.getItem('namaKota');
    setAlamat("\n "+namaKota +','+ namaProvinsi);
    setisPendingall(true);
    
    const response = await fetch('http://localhost:8000/api/kecamatan/'+event.target.value, {method: 'GET'});
    if (!response.ok) { // error coming back from server
      throw Error('could not fetch the data for that resource');
    } 

    const result = await response.json();
    if (!result) { // error coming back from server
      throw Error('data empty');
    }else{
      setisPendingall(false);
      setDataKecamatan(result);
      setDataKelurahan(null);
      setKodepos("");
    }
  };

  const changeKecamatan = async (event) => {
    setKecamatan(event.target.options[event.target.selectedIndex].text);
    event.target.options[event.target.selectedIndex].text && setErrKecamatan(null);
    localStorage.setItem('namaKecamatan', event.target.options[event.target.selectedIndex].text);
    let namaProvinsi = localStorage.getItem('namaProvinsi');
    let namaKota = localStorage.getItem('namaKota');
    let namaKecamatan = localStorage.getItem('namaKecamatan');
    setAlamat("\n Kec."+ namaKecamatan +',' + namaKota +','+ namaProvinsi);
    setisPendingall(true);
    
    const response = await fetch('http://localhost:8000/api/kelurahan/'+event.target.value, {method: 'GET'});
    if (!response.ok) { // error coming back from server
      throw Error('could not fetch the data for that resource');
    } 

    const result = await response.json();
    if(!result){
      throw Error('data empty');
    }else{
      setisPendingall(false);
      setDataKelurahan(result);
      setKodepos("");
    }
  };

  const changeKelurahan = async (event) => {
    setKelurahan(event.target.options[event.target.selectedIndex].text);
    event.target.options[event.target.selectedIndex].text && setErrKelurahan(null);
    localStorage.setItem('namaKelurahan', event.target.options[event.target.selectedIndex].text);
    let namaProvinsi = localStorage.getItem('namaProvinsi');
    let namaKota = localStorage.getItem('namaKota');
    let namaKecamatan = localStorage.getItem('namaKecamatan');
    let namaKelurahan = localStorage.getItem('namaKelurahan');
    setAlamat("\n Kel."+namaKelurahan+','+'Kec.'+ namaKecamatan +',' + namaKota +','+ namaProvinsi);    
    setisPendingall(true);
    const response =  await fetch('http://localhost:8000/api/kelurahan/kodepos/'+event.target.value, {method: 'GET'});
    if (!response.ok) { // error coming back from server
      throw Error('could not fetch the data for that resource');
    } 

    const result = await response.json();
    if(!result){
      throw Error('data empty');
    }else{
      setisPendingall(false);
      setKodepos(result.vKodepos);
      result.vKodepos && setErrKodepos(null);
      let nilaikodepos = result.vKodepos;
      setAlamat("\n Kel."+namaKelurahan+','+'Kec.'+ namaKecamatan +',' + namaKota +','+ namaProvinsi + ',' +nilaikodepos);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let submitted = true;

    if (!nama) {
      setErrNama("Nama perusahaan harus dilengkapi");
      submitted = false;
    }

    if (!profilePic) {
      setErrProfilePic("Foto profil harus dilengkapi");
      submitted = false;
    }

    if (!noTelp) {
      setErrNoTelp("No.Telp harus dilengkapi");
      submitted = false;
    }

    if (!badanUsaha) {
      setErrBadanUsaha("Badan usaha harus dipilih");
      submitted = false;
    }

    if (!namaAlamat) {
      setErrNamaAlamat("Nama alamat harus dipilih");
      submitted = false;
    }

    if (!provinsi) {
      setErrProvinsi("Provinsi harus dipilih");
      submitted = false;
    }

    if (!kota) {
      setErrKota("Kota harus dipilih");
      submitted = false;
    }

    if (!kecamatan) {
      setErrKecamatan("Kecamatan harus dipilih");
      submitted = false;
    }

    if (!kelurahan) {
      setErrKelurahan("Kelurahan harus dipilih");
      submitted = false;
    }

    if (!kodepos) {
      setErrKodepos("Kodepos harus dilengkapi");
      submitted = false;
    }

    if (!alamat) {
      setErrAlamat("Alamat harus dilengkapi");
      submitted = false;
    }

    if (!ktp) {
      setErrKtp("No.Ktp harus dilengkapi");
      submitted = false;
    }

    if (!fileKtp) {
      setErrFileKtp("File KTP harus dilengkapi");
      submitted = false;
    }

    if (!npwp) {
      setErrNpwp("No.NPWP harus dilengkapi");
      submitted = false;
    }

    if (!fileNpwp) {
      setErrFileNpwp("File Npwp harus dilengkapi");
      submitted = false;
    }

    if (!email) {
      setErrEmail("Email harus dilengkapi");
      submitted = false;
    }

    if (!pass) {
      setErrPass("Password harus dilengkapi");
      submitted = false;
    }

    if (!confirmPass) {
      setErrConfirmPass("Confirm Password harus dilengkapi");
      submitted = false;
    }

    if (pass !== confirmPass) {
      setErrConfirmPass("Confirm Password tidak sama dengan input password");
      submitted = false;
    }

    if (submitted) {
      const dataregister = new FormData(form.current);
      setIsSubmitted(true);
      const response = await fetch('http://localhost:8000/api/registerbuyer', {
        method: 'POST',
        body: dataregister,
      });
      if (!response.ok) { // error coming back from server
        Swal.fire({  icon: 'error',  title: 'Gagal',  text: 'Terjadi kesalahan pada sistem'})
      }

      const result = await response.json();
      if (!result || result.status === 'gagal') { // error coming back from server
        Swal.fire({  icon: 'error',  title: 'Gagal',  text: 'Terjadi kesalahan pada sistem'})
      }else{
        Swal.fire({ title: 'Success', text: 'Pendaftaran kamu telah dikirimkan ke sistem', icon: 'success', confirmButtonColor: '#3085d6', confirmButtonText: 'OK' }).then((result) => { if (result.value) { history.push('/') } })
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
                    <a className="nav-link active" id="register-tab-2" data-toggle="tab" href="#register-2" role="tab" aria-controls="register-2" aria-selected="true">Pendaftaran Pelanggan Individu</a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane fade show active" id="register-2" role="tabpanel" aria-labelledby="register-tab-2">
                  <form ref={form} onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Nama Pelanggan *</label>
                      <input type="text"  className={`form-control ${errNama ? 'is-invalid' : ''}`} id="nama" name="nama" placeholder="Masukkan nama pelanggan" value={nama} onChange={(e) => { setNama(e.target.value); e.target.value && setErrNama(null) }}/>
                      <input type="hidden" name="role" value="4" />
                      <input type="hidden" name="tipe" value="Individu" />
                      <div className="invalid-feedback">{errNama}</div>
                    </div>

                   <label>Foto Profil *</label>
                    <div className="form-group custom-file">
                      <label className="custom-file-label">{profilePic ? profilePic.name : 'Pilih foto profil'}</label>
                      <input type="file" className={`custom-file-input ${errProfilePic ? 'is-invalid' : ''}`} id="profilepic" name="profilepic" onChange={changeProfilepic} />
                      <div className="invalid-feedback">{errProfilePic}</div>
                    </div>

                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input type="text" className={`form-control ${errNoTelp ? 'is-invalid' : ''}`} id="notelp" name="notelp"  value={noTelp} onChange={(e) => { setNoTelp(e.target.value); e.target.value && setErrNoTelp(null) }}/>
                      <div className="invalid-feedback">{errNoTelp}</div>
                    </div>
                    
                    <div className="form-group">
                      <label>Badan Usaha*</label>
                      <div className="select-custom">
                        <select name="jenisperusahaan" id="jenisperusahaan" className={`form-control ${errBadanUsaha ? 'is-invalid' : ''}`} defaultValue={badanUsaha} onChange={(e) => { setBadanUsaha(e.target.value); e.target.value && setErrBadanUsaha(null) }}>
                          <option value="">{isPending ? 'Loading....' : 'Pilih Jenis Badan Usaha'}</option>
                          { badanusahas && badanusahas.map(badanusaha => {
                            return(
                              <option key={badanusaha.iId} value={badanusaha.iId}> {badanusaha.vNama}</option>
                            )
                          })}
                        </select>
                        <div className="invalid-feedback">{errBadanUsaha}</div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group col-lg-6">
                        <label>Nama Alamat *</label>
                        <div className="select-custom">
                            <select id="namaalamat" name="namaalamat" className={`form-control ${errNamaAlamat ? 'is-invalid' : ''}`} defaultValue={namaAlamat} onChange={(e) => { setNamaAlamat(e.target.value); e.target.value && setErrNamaAlamat(null) }}>
                                <option value="">Pilih nama alamat</option>
                                <option value="Head Office"> Head Office</option>
                                <option value="Branch Office"> Branch Office</option>
                                <option value="Workshop">Workshop</option>
                            </select>
                            <div className="invalid-feedback">{errNamaAlamat}</div>
                        </div>
                      </div>
                      <div className="form-group col-lg-6">
                        <label>Provinsi *</label>
                        <div className="select-custom">
                            <select id="provinsi" name="provinsi" className={`form-control ${errProvinsi ? 'is-invalid' : ''}`} defaultValue={provinsi} onChange={changeProvinsi} >
                                <option value="">{isPending2 ? 'Loading....' : 'Pilih Provinsi'}</option>
                                { provinsis && provinsis.map(provinsi => (
                                  <option key={provinsi.iId} value={provinsi.iId}> {provinsi.vNama}</option>
                                ))}
                            </select>
                            <div className="invalid-feedback">{errProvinsi}</div>
                        </div>
                      </div>
                    </div>

                    
                    <div className="row">
                      <div className="form-group col-lg-6">
                        <label>Kota *</label>
                        <div className="select-custom">
                            <select id="kota" name="kota" className={`form-control ${errKota ? 'is-invalid' : ''}`} defaultValue={kota} onChange={changeKota} >
                                <option value="">{isPendingall ? 'Loading....' : 'Pilih Kota'}</option>
                                { dataKota && dataKota.map(kotas => {
                                  return(
                                    <option key={kotas.iId} value={kotas.iId}> {kotas.vNama}</option>
                                  )
                                })}
                            </select>
                            <div className="invalid-feedback">{errKota}</div>
                        </div>
                      </div>
                      <div className="form-group col-lg-6">
                        <label>Kecamatan *</label>
                        <div className="select-custom">
                            <select id="kecamatan" name="kecamatan" className={`form-control ${errKecamatan ? 'is-invalid' : ''}`} defaultValue={kecamatan} onChange={changeKecamatan} >
                                <option value="">{isPendingall ? 'Loading....' : 'Pilih Kecamatan'}</option>
                                { dataKecamatan && dataKecamatan.map(kecamatans => {
                                  return(
                                    <option key={kecamatans.iId} value={kecamatans.iId}> {kecamatans.vNama}</option>
                                  )
                                })}
                            </select>
                            <div className="invalid-feedback">{errKecamatan}</div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group col-lg-6">
                        <label>Kelurahan *</label>
                        <div className="select-custom">
                            <select id="kelurahan" name="kelurahan" className={`form-control ${errKelurahan ? 'is-invalid' : ''}`} defaultValue={kelurahan} onChange={changeKelurahan} >
                                <option value="">{isPendingall ? 'Loading....' : 'Pilih Kelurahan'}</option>
                                { dataKelurahan && dataKelurahan.map(kelurahans => {
                                  return(
                                    <option key={kelurahans.iId} value={kelurahans.iId}> {kelurahans.vNama}</option>
                                  )
                                })}
                            </select>
                            <div className="invalid-feedback">{errKelurahan}</div>
                        </div>
                      </div>
                      <div className="form-group col-lg-6">
                        <label>Kodepos</label>
                        <input type="text" className={`form-control ${errKodepos ? 'is-invalid' : ''}`} id="kodepos" name="kodepos" placeholder="Masukkan kodepos" value={kodepos} onChange={(e) => { setKodepos(e.target.value); e.target.value && setErrKodepos(null) }} />
                        <div className="invalid-feedback">{errKodepos}</div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Alamat Lengkap *</label>
                      <textarea className={`form-control ${errAlamat ? 'is-invalid' : ''}`} id="alamat" name="alamat" placeholder="Masukkan alamat lengkap"  value={alamat} onChange={(e) => { setAlamat(e.target.value); e.target.value && setErrAlamat(null) }} />
                      <div className="invalid-feedback">{errAlamat}</div>
                    </div>

                    <div className="form-group">
                      <label>No.KTP *</label>
                      <input type="text" className={`form-control ${errKtp ? 'is-invalid' : ''}`} id="ktp" name="ktp" placeholder="Masukkan no.ktp" value={ktp} onChange={(e) => { setKtp(e.target.value); e.target.value && setErrKtp(null) }} />
                      <div className="invalid-feedback">{errKtp}</div>
                    </div>
                    
                    <label>File KTP *</label>
                    <div className="form-group custom-file">
                      <label className="custom-file-label">{fileKtp ? fileKtp.name : 'Pilih file ktp'}</label>
                      <input type="file" className={`custom-file-input ${errFileKtp ? 'is-invalid' : ''}`} id="filektp" name="filektp" onChange={changeFilektp} />
                      <div className="invalid-feedback">{errFileKtp}</div>
                    </div>

                    <div className="form-group">
                      <label>No.NPWP *</label>
                      <input type="text" className={`form-control ${errNpwp ? 'is-invalid' : ''}`} id="npwp" name="npwp" placeholder="Masukkan no.npwp" value={npwp} onChange={(e) => { setNpwp(e.target.value); e.target.value && setErrNpwp(null) }} />
                      <div className="invalid-feedback">{errNpwp}</div>
                    </div>

                    <label>File NPWP *</label>
                    <div className="form-group custom-file">
                      <label className="custom-file-label">{fileNpwp ? fileNpwp.name : 'Pilih file npwp'}</label>
                      <input type="file" className={`custom-file-input ${errFileNpwp ? 'is-invalid' : ''}`} id="filenpwp" name="filenpwp" onChange={changeFilenpwp} />
                      <div className="invalid-feedback">{errFileNpwp}</div>
                    </div>

                    <div className="form-group">
                      <label>Email *</label>
                      <input type="email" className={`form-control ${errEmail ? 'is-invalid' : ''}`} id="email" name="email" placeholder="Masukkan email" value={email} onChange={(e) => { setEmail(e.target.value); e.target.value && setErrEmail(null) }}/>
                      <div className="invalid-feedback">{errEmail}</div>
                    </div>

                    <div className="form-group">
                      <label>Password *</label>
                      <input type="password" className={`form-control ${errPass ? 'is-invalid' : ''}`} id="pass" name="pass" placeholder="Masukkan password" value={pass} onChange={(e) => { setPass(e.target.value); e.target.value && setErrPass(null) }}/>
                      <div className="invalid-feedback">{errPass}</div>
                    </div>

                    <div className="form-group">
                      <label>Confirm Password *</label>
                      <input type="password" className={`form-control ${errConfirmPass ? 'is-invalid' : ''}`} id="confirmPassword" name="confirmPassword" placeholder="Masukkan konfirmasi password" value={confirmPass} onChange={(e) => { setConfirmPass(e.target.value); e.target.value && setErrConfirmPass(null) }} />
                      <div className="invalid-feedback">{errConfirmPass}</div>
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
                            <span>DAFTAR</span> <i className="icon-long-arrow-right"></i>
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

export default RegisterBuyerIndividu;
