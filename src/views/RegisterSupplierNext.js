import useFetch from "../function/useFetch";
import { useRef, useState, Fragment } from "react";
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2'

const RegisterSupplierNext = () => {
  const URLLink = 'http://localhost:8000';
  const { error, isPending, data: provinsis } = useFetch(URLLink + '/api/provinsi');
  const { error: error2, isPending: isPending2, data: negaras } = useFetch(URLLink + '/api/negara');
  
  const history = useHistory();

  const [isPendingall, setisPendingall] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useRef(null);

  const [company, setCompany] = useState('');
  const [errCompany, setErrCompany] = useState(null);
  const [tipe, setTipe] = useState('');
  const [errTipe, setErrTipe] = useState(null);
  const [direkturUmum, setDirekturUmum] = useState('');
  const [errDirekturUmum, setErrDirekturUmum] = useState(null);
  const [jumlahKaryawan, setJumlahKaryawan] = useState('');
  const [errJumlahKaryawan, setErrJumlahKaryawan] = useState(null);
  const [officePhone, setOfficePhone] = useState('');
  const [errOfficePhone, setErrOfficePhone] = useState(null);
  const [namaPic, setNamaPic] = useState('');
  const [errNamaPic, setErrNamaPic] = useState(null);
  const [kontakPic, setKontakPic] = useState('');
  const [errKontakPic, setErrKontakPic] = useState(null);
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
  const [noSiup, setNoSiup] = useState('');
  const [errNoSiup, setErrNoSiup] = useState(null);
  const [email, setEmail] = useState('');
  const [errEmail, setErrEmail] = useState(null);
  const [password, setPassword] = useState('');
  const [errPassword, setErrPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errConfirmPassword, setErrConfirmPassword] = useState(null);

  const [startDate, setStartDate] = useState(new Date());
  const [logoPerusahaan, setLogoPerusahaan] = useState();
  const [errLogoPerusahaan, setErrLogoPerusahaan] = useState(null);
  const [fileSiup, setfileSiup] = useState();
  const [errFileSiup, setErrFileSiup] = useState(null);
  const [fileAp, setfileAp] = useState();
  const [errFileAp, setErrFileAp] = useState(null);
  const [fileDp, setfileDp] = useState();
  const [errFileDp, setErrFileDp] = useState(null);

  const [inputBrands, setInputBrands] = useState([
    { namaBrand: '', countryOrigin: '' }
  ]);

  const changeLogoPerusahaan = (event) => {
    if (event.target.files[0].type !== "image/png" && event.target.files[0].type !== "image/jpeg") {
      setErrLogoPerusahaan("Format logo perusahaan hanya diizinkan jpeg dan png");
    } else {
      setLogoPerusahaan(event.target.files[0]);
      event.target.files[0] && setErrLogoPerusahaan(null);
    }
  };

  const changeFilesiup = (event) => {
    if (event.target.files[0].type !== "image/png" && event.target.files[0].type !== "image/jpeg" && event.target.files[0].type !== "application/pdf") {
      setErrFileSiup("Format file siup hanya diizinkan jpeg, png, dan pdf");
    } else {
      setfileSiup(event.target.files[0]);
      event.target.files[0] && setErrFileSiup(null);
    }
  };

  const changeFileap = (event) => {
    if (event.target.files[0].type !== "image/png" && event.target.files[0].type !== "image/jpeg" && event.target.files[0].type !== "application/pdf") {
      setErrFileAp("Format file akta pendirian hanya diizinkan jpeg, png, dan pdf");
    } else {
      setfileAp(event.target.files[0]);
      event.target.files[0] && setErrFileAp(null);
    }
  };

  const changeFiledp = (event) => {
    if (event.target.files[0].type !== "image/png" && event.target.files[0].type !== "image/jpeg" && event.target.files[0].type !== "application/pdf") {
      setErrFileDp("Format file domisili perusahaan hanya diizinkan jpeg, png, dan pdf");
    } else {
      setfileDp(event.target.files[0]);
      event.target.files[0] && setErrFileDp(null);
    }
  };

  const handleAddBrands = () => {
    const values = [...inputBrands];
    values.push({ namaBrand: '', countryOrigin: '' });
    setInputBrands(values);
  };

  const handleRemoveBrands = index => {
    const values = [...inputBrands];
    values.splice(index, 1);
    setInputBrands(values);
  };

  const handleBrandsChange = (index, event) => {
    const values = [...inputBrands];
    if (event.target.name === "namaBrand") {
      values[index].namaBrand = event.target.value;
    } else {
      values[index].countryOrigin = event.target.value;
    }

    setInputBrands(values);
  };

  const changeProvinsi = async (event) => {
    setProvinsi(event.target.options[event.target.selectedIndex].text);
    event.target.options[event.target.selectedIndex].text && setErrProvinsi(null);
    localStorage.setItem('namaProvinsi', event.target.options[event.target.selectedIndex].text);
    let namaProvinsi = localStorage.getItem('namaProvinsi');
    setAlamat("\n " + namaProvinsi);
    setisPendingall(true);

    const response = await fetch('http://localhost:8000/api/kota/' + event.target.value, {method: 'GET'});
    if (!response.ok) { // error coming back from server
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
    setAlamat("\n " + namaKota + ',' + namaProvinsi);
    setisPendingall(true);
    
    const response = await fetch('http://localhost:8000/api/kecamatan/' + event.target.value, {method: 'GET'});
    if (!response.ok) { // error coming back from server
      throw Error('could not fetch the data for that resource');
    }

    const result = await response.json();
    if(!result){
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
    setAlamat("\n Kec." + namaKecamatan + ',' + namaKota + ',' + namaProvinsi);
    setisPendingall(true);
    
    const response = await fetch('http://localhost:8000/api/kelurahan/' + event.target.value, {method: 'GET'});
    if (!response.ok) { // error coming back from server
      throw Error('could not fetch the data for that resource');
    }

    const result = await response.json();
    if(result){
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
    setAlamat("\n Kel." + namaKelurahan + ',' + 'Kec.' + namaKecamatan + ',' + namaKota + ',' + namaProvinsi);
    setisPendingall(true);
    
    const response = await fetch('http://localhost:8000/api/kelurahan/kodepos/' + event.target.value, {method: 'GET'})
    if (!response.ok) { // error coming back from server
      throw Error('could not fetch the data for that resource');
    }

    const result = await response.json();
    if(!result){
      throw Error('data empty');
    }else{
      setisPendingall(false);
      setKodepos(result.vKodepos);
      event.target.options[event.target.selectedIndex].text && setErrKodepos(null);
      let nilaikodepos = result.vKodepos;
      setAlamat("\n Kel." + namaKelurahan + ',' + 'Kec.' + namaKecamatan + ',' + namaKota + ',' + namaProvinsi + ',' + nilaikodepos);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let submitted = true;
    if (!company) {
      setErrCompany("Nama perusahaan harus dilengkapi");
      submitted = false;
    }

    if (!tipe) {
      setErrTipe("Tipe perusahaan harus dipilih");
      submitted = false;
    }

    if (!logoPerusahaan) {
      setErrLogoPerusahaan("Logo perusahaan harus dilengkapi");
      submitted = false;
    }

    if (!direkturUmum) {
      setErrDirekturUmum("Nama direktur harus dilengkapi");
      submitted = false;
    }

    if (!jumlahKaryawan) {
      setErrJumlahKaryawan("Jumlah karyawan harus dipilih");
      submitted = false;
    }

    if (!officePhone) {
      setErrOfficePhone("No.telp kantor harus dilengkapi");
      submitted = false;
    }

    if (!namaPic) {
      setErrNamaPic("Nama PIC harus dilengkapi");
      submitted = false;
    }

    if (!kontakPic) {
      setErrKontakPic("Kontak PIC harus dilengkapi");
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

    if (!noSiup) {
      setErrNoSiup("No.Siup harus dilengkapi");
      submitted = false;
    }

    if (!fileSiup) {
      setErrFileSiup("File SIUP harus dilengkapi");
      submitted = false;
    }

    if (!fileAp) {
      setErrFileAp("File akta pendirian harus dilengkapi");
      submitted = false;
    }

    if (!fileDp) {
      setErrFileDp("File domisili perusahaan harus dilengkapi");
      submitted = false;
    }

    if (!email) {
      setErrEmail("Email harus dilengkapi");
      submitted = false;
    }

    if (!password) {
      setErrPassword("Password harus dilengkapi");
      submitted = false;
    }

    if (!confirmPassword) {
      setErrConfirmPassword("Confirm Password harus dilengkapi");
      submitted = false;
    }

    if (password !== confirmPassword) {
      setErrConfirmPassword("Confirm Password tidak sama dengan input password");
      submitted = false;
    }

    if (submitted) {
      const dataregister = new FormData(form.current);
      dataregister.append(
        "brand",
        JSON.stringify(inputBrands),
      );
      dataregister.delete(
        "namaBrand",
      );
      dataregister.delete(
        "countryOrigin",
      );
      setIsSubmitted(true);
      const response = await fetch('http://localhost:8000/api/registervendor', {
        method: 'POST',
        body: dataregister,
      })
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
      <div className="login-page bg-image pt-8 pb-8" style={{ backgroundColor: "#fff" }}>
        <div className="container">
          <div className="form-box">
            <div className="form-tab">
              <ul className="nav nav-pills nav-fill" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="register-tab-2" data-toggle="tab" href="#register-2" role="tab" aria-controls="register-2" aria-selected="true">Pendaftaran Vendor</a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane fade show active" id="register-2" role="tabpanel" aria-labelledby="register-tab-2">
                  <form ref={form} onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Nama Perusahaan *</label>
                      <input type="text" className={`form-control ${errCompany ? 'is-invalid' : ''}`} id="companyName" name="companyName" placeholder="Masukkan nama perusahaan" value={company} onChange={(e) => { setCompany(e.target.value); e.target.value && setErrCompany(null) }} />
                      <div className="invalid-feedback">{errCompany}</div>
                    </div>
                    <div className="form-group">
                      <label>Tipe Perusahaan *</label>
                      <div className="select-custom">
                        <select name="tipe" id="tipe" className={`form-control ${errTipe ? 'is-invalid' : ''}`} onChange={(e) => { setTipe(e.target.value); e.target.value && setErrTipe(null) }} defaultValue="">
                          <option value="">Pilih tipe perusahaan</option>
                          <option value="Principal/Pemegang Merk">Principal/ Pemegang Merk</option>
                          <option value="Authorized Distributor">Authorized Distributor</option>
                          <option value="Trading Umum/Toko Ritel">Trading Umum / Toko Ritel</option>
                          <option value="Wholesaler/Stockist">Wholesaler / Stockist</option>
                        </select>
                        <div className="invalid-feedback">{errTipe}</div>
                      </div>
                    </div>

                    <label>Logo Perusahaan *</label>
                    <div className="form-group custom-file">
                      <label className="custom-file-label">{logoPerusahaan ? logoPerusahaan.name : 'Pilih file logo perusahaan'}</label>
                      <input type="file" className={`custom-file-input ${errLogoPerusahaan ? 'is-invalid' : ''}`} id="logoPerusahaan" name="logoPerusahaan" onChange={changeLogoPerusahaan} />
                      <div className="invalid-feedback">{errLogoPerusahaan}</div>
                    </div>

                    <div className="form-group">
                      <label>Nama Direktur Umum *</label>
                      <input type="text" className={`form-control ${errDirekturUmum ? 'is-invalid' : ''}`} id="direkturUmum" name="direkturUmum" placeholder="Masukkan nama direktur umum" value={direkturUmum} onChange={(e) => { setDirekturUmum(e.target.value); e.target.value && setErrDirekturUmum(null) }} />
                      <div className="invalid-feedback">{errDirekturUmum}</div>
                    </div>

                    <div className="form-group">
                      <label>Tanggal Berdiri Perusahaan *</label>
                      <DatePicker className="form-control" id="waktuBerdiri" name="waktuBerdiri" selected={startDate} onChange={date => setStartDate(date)} />
                    </div>


                    <div className="form-group">
                      <label>Jumlah Karyawan *</label>
                      <div className="select-custom">
                        <select id="jumlahKaryawan" name="jumlahKaryawan" className={`form-control ${errJumlahKaryawan ? 'is-invalid' : ''}`} onChange={(e) => { setJumlahKaryawan(e.target.value); e.target.value && setErrJumlahKaryawan(null) }} defaultValue={jumlahKaryawan}>
                          <option value="">Pilih jumlah karyawan</option>
                          <option value="<10"> {"<10"}</option>
                          <option value="10-50">10-50</option>
                          <option value="50-100">50-100</option>
                          <option value="100-200">100-200</option>
                          <option value="<200"> {"<200"}</option>
                        </select>
                        <div className="invalid-feedback">{errJumlahKaryawan}</div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>No.Telp Kantor *</label>
                      <input type="text" className={`form-control ${errOfficePhone ? 'is-invalid' : ''}`} id="officePhone" name="officePhone" placeholder="Masukkan no.telp kantor" value={officePhone} onChange={(e) => { setOfficePhone(e.target.value); e.target.value && setErrOfficePhone(null) }} />
                      <div className="invalid-feedback">{errOfficePhone}</div>
                    </div>

                    <div className="form-group">
                      <label>Nama PIC *</label>
                      <input type="text" className={`form-control ${errNamaPic ? 'is-invalid' : ''}`} id="namaPic" name="namaPic" placeholder="Masukkan Nama PIC" value={namaPic} onChange={(e) => { setNamaPic(e.target.value); e.target.value && setErrNamaPic(null) }} />
                      <div className="invalid-feedback">{errNamaPic}</div>
                    </div>

                    <div className="form-group">
                      <label>Kontak PIC *</label>
                      <input type="text" className={`form-control ${errKontakPic ? 'is-invalid' : ''}`} id="kontakPic" name="kontakPic" placeholder="Masukkan Kontak PIC" value={kontakPic} onChange={(e) => { setKontakPic(e.target.value); e.target.value && setErrKontakPic(null) }} />
                      <div className="invalid-feedback">{errKontakPic}</div>
                    </div>

                    <div className="row">
                      <div className="form-group col-lg-6">
                        <label>Nama Alamat *</label>
                        <div className="select-custom">
                          <select id="namaAlamat" name="namaAlamat" className={`form-control ${errNamaAlamat ? 'is-invalid' : ''}`} onChange={(e) => { setNamaAlamat(e.target.value); e.target.value && setErrNamaAlamat(null) }} defaultValue={namaAlamat}>
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
                          <select id="provinsi" name="provinsi" className={`form-control ${errProvinsi ? 'is-invalid' : ''}`} onChange={changeProvinsi} defaultValue={provinsi}>
                            <option value="">{isPending ? 'Loading....' : 'Pilih Provinsi'}</option>
                            {provinsis && provinsis.map(provinsi => (
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
                          <select id="kota" name="kota" className={`form-control ${errKota ? 'is-invalid' : ''}`} onChange={changeKota} defaultValue={kota}>
                            <option value="">{isPendingall ? 'Loading....' : 'Pilih Kota'}</option>
                            {dataKota && dataKota.map(kotas => {
                              return (
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
                          <select id="kecamatan" name="kecamatan" className={`form-control ${errKecamatan ? 'is-invalid' : ''}`} onChange={changeKecamatan} defaultValue={kecamatan}>
                            <option value="">{isPendingall ? 'Loading....' : 'Pilih Kecamatan'}</option>
                            {dataKecamatan && dataKecamatan.map(kecamatans => {
                              return (
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
                          <select id="kelurahan" name="kelurahan" className={`form-control ${errKelurahan ? 'is-invalid' : ''}`} onChange={changeKelurahan} defaultValue={kelurahan}>
                            <option value="">{isPendingall ? 'Loading....' : 'Pilih Kelurahan'}</option>
                            {dataKelurahan && dataKelurahan.map(kelurahans => {
                              return (
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
                      <textarea className={`form-control ${errAlamat ? 'is-invalid' : ''}`} id="alamat" name="alamat" placeholder="Masukkan alamat lengkap" value={alamat} onChange={(e) => { setAlamat(e.target.value); e.target.value && setErrAlamat(null) }} />
                      <div className="invalid-feedback">{errAlamat}</div>
                    </div>

                    <div className="row">
                      <div className="form-group col-lg-5">
                        <label>Nama Brand *</label>
                      </div>
                      <div className="form-group col-lg-5">
                        <label>Country Origin *</label>
                      </div>
                    </div>

                    {inputBrands.map((inputBrand, index) => (
                      <Fragment key={`${inputBrand}~${index}`}>
                        <div className="row">
                          <div className="form-group col-lg-5">
                            <input type="text" className="form-control" id="namaBrand" name="namaBrand" value={inputBrand.namaBrand}
                              onChange={event => handleBrandsChange(index, event)} placeholder="Enter brand name" />
                          </div>

                          <div className="form-group col-lg-5">
                            <div className="select-custom">
                              <select name="countryOrigin" id="countryOrigin" className="form-control" value={inputBrand.countryOrigin} onChange={event => handleBrandsChange(index, event)}>
                                <option value="">{isPending ? 'Loading....' : 'Pilih asal negara'}</option>
                                {negaras && negaras.map(negara => {
                                  return (
                                    <option key={negara.iId} value={negara.iId}> {negara.vNama}</option>
                                  )
                                })}
                              </select>
                            </div>
                          </div>

                          <div className="form-group col-lg-2">
                            <button type="button" className="form-control btn-outline-danger-2" onClick={() => handleRemoveBrands(index)}><i className="icon-minus"></i></button>
                          </div>
                        </div>
                      </Fragment>
                    ))}

                    <div className="row justify-content-end">
                      <div className="form-group col-lg-2">
                        <button type="button" className="form-control btn-outline-primary-2" onClick={() => handleAddBrands()}><i className="icon-plus"></i></button>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>No.SIUP *</label>
                      <input type="text" className={`form-control ${errNoSiup ? 'is-invalid' : ''}`} id="noSiup" name="noSiup" placeholder="Masukkan no.siup" value={noSiup} onChange={(e) => {setNoSiup(e.target.value);e.target.value && setErrNoSiup(null)}} />
                      <div className="invalid-feedback">{errNoSiup}</div>
                    </div>

                    <label>File SIUP *</label>
                    <div className="form-group custom-file">
                      <label className="custom-file-label">{fileSiup ? fileSiup.name : 'Pilih file SIUP'}</label>
                      <input type="file" className={`custom-file-input ${errFileSiup ? 'is-invalid' : ''}`} id="fileSIUP" name="fileSIUP" onChange={changeFilesiup} />
                      <div className="invalid-feedback">{errFileSiup}</div>
                    </div>

                    <label>File Akta Pendirian *</label>
                    <div className="form-group custom-file">
                      <label className="custom-file-label">{fileAp ? fileAp.name : 'Pilih file akta pendirian'}</label>
                      <input type="file" className={`custom-file-input ${errFileAp ? 'is-invalid' : ''}`} id="fileAP" name="fileAP" onChange={changeFileap} />
                      <div className="invalid-feedback">{errFileAp}</div>
                    </div>

                    <label>File Domisili Perusahaan *</label>
                    <div className="form-group custom-file">
                      <label className="custom-file-label">{fileDp ? fileDp.name : 'Pilih file domisili perusahaan'}</label>
                      <input type="file" className={`custom-file-input ${errFileDp ? 'is-invalid' : ''}`} id="fileDP" name="fileDP" onChange={changeFiledp} />
                      <div className="invalid-feedback">{errFileDp}</div>
                    </div>

                    <div className="form-group">
                      <label>Email *</label>
                      <input type="email" className={`form-control ${errEmail ? 'is-invalid' : ''}`} id="email" name="email" placeholder="Masukkan email" value={email} onChange={(e) => { setEmail(e.target.value); e.target.value && setErrEmail(null) }} />
                      <div className="invalid-feedback">{errEmail}</div>
                    </div>

                    <div className="form-group">
                      <label>Password *</label>
                      <input type="password" className={`form-control ${errPassword ? 'is-invalid' : ''}`} id="password" name="password" placeholder="Masukkan password" value={password} onChange={(e) => { setPassword(e.target.value); e.target.value && setErrPassword(null) }} />
                      <div className="invalid-feedback">{errPassword}</div>
                    </div>

                    <div className="form-group">
                      <label>Confirm Password *</label>
                      <input type="password" className={`form-control ${errConfirmPassword ? 'is-invalid' : ''}`} id="confirmPassword" name="confirmPassword" placeholder="Masukkan konfirmasi password" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value); e.target.value && setErrConfirmPassword(null) }} />
                      <div className="invalid-feedback">{errConfirmPassword}</div>
                    </div>

                    <div className="form-footer">

                      <button type="submit" className="btn btn-outline-primary-2" disabled={isSubmitted && 'disabled'}>
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

export default RegisterSupplierNext;
