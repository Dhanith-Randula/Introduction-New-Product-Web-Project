import './App.css';
import Desktop1 from './Components/Home,Landing Page/Desktop1';
import ProductDashboard from './Components/Productashboard';
import AboutUs from './Components/AboutUs Page/aboutUs';
import Footer from './Components/Footer/footer';
import Login from './Components/Login, signUP/loging';
import { Contact } from './Components/Contact Page/Contact';
import M1 from './Components/Navigatio,Menu Bar/MenuBar';
import SearchResultPage from './Components/search';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductAll from './Components/All Product Page/Allproduct'  ;
import Catagorie from './Components/catagories/catagorie';

/*<MenuBar1 />
        
        <Footer />*/
function App() {
  return (
    <Router>
      <M1 />
      <div>
        <Routes>

          <Route path='/' exact Component={Desktop1} />
          <Route path='/addproduct' exact Component={ProductDashboard} />
          <Route path='/login' exact Component={Login}  />
          <Route path='/aboutus' exact Component={AboutUs} />
          <Route path='/search/:search' element={<SearchResultPage />} />
          <Route path='/link' element={<ProductAll/>}/>
          <Route path='/contact' element={<Contact />} />
          <Route path='/catogories' element={<Catagorie />} /> 
          
          
        </Routes>

        
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
