import './App.css';
import Home from './views/Home';
import About from './views/About';
import DetailItem from './views/DetailItem';
import ListItem from './views/ListItem';
import Login from './views/Login';
import RegisterBuyer from './views/RegisterBuyer';
import RegisterBuyerIndividu from './views/RegisterBuyerIndividu';
import RegisterBuyerPerusahaan from './views/RegisterBuyerPerusahaan';
import RegisterSupplier from './views/RegisterSupplier';
import RegisterSupplierNext from './views/RegisterSupplierNext';
import Search from './views/Search';
import Testimoni from './views/Testimoni';
import DetailTestimoni from './views/DetailTestimoni';
import Cart from './views/Cart';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import PrivateRoute from './function/PrivateRoute'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content page-wrapper">
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Cart" component={Cart} />
            <Route path="/DetailItem/:id" component={DetailItem} />
            <Route path="/ListItem" component={ListItem} />
            <Route path="/Login" component={Login} />
            <Route path="/RegisterBuyer" component={RegisterBuyer} />
            <Route path="/RegisterBuyerIndividu" component={RegisterBuyerIndividu} />
            <Route path="/RegisterBuyerPerusahaan" component={RegisterBuyerPerusahaan} />
            <Route path="/RegisterSupplier" component={RegisterSupplier}/>
            <Route path="/RegisterSupplierNext" component={RegisterSupplierNext} />
            <Route path="/Search" component={Search}/>
            <Route path="/Testimoni" component={Testimoni}/>
            <Route path="/DetailTestimoni" component={DetailTestimoni}/>
          </Switch>
          <Footer></Footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
