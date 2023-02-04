import './App.scss';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

//import ProductImagesSlider from './components/product-images-slider';
//import { productImages } from './components/assets'
import Try from './components/Try.jsx';
//import NavBarLogin from './components/NavBarLogin';
import AnnoncesSlider from './components/AnnoncesSlider';
//import Login from './components/Login';
//import Footer from './components/footer';
//import Apropos from './components/Apropos';
import AddPage from './components/AddPage';
import AuthPage from './components/authPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";
import HomePage from './components/homePage';
import { Component } from 'react';
import SearchPage from './components/searchPage'
import ProfilePage from './components/profilePage';
import Messagerie from './components/messagerie';


class App extends Component {
 render(){ return <div>
      <Router>
        <Routes>
          <Route path='/ajouterAnnonce' element={<AddPage />} />
          <Route path='/' element={<AuthPage />} />
          <Route path="/slider" element={<AnnoncesSlider />} />
          <Route path="/slider/:annonceId" element={<Try  />} />
          <Route path="/pageuser" element={<HomePage />} />
          <Route path="/searchPage" element={<SearchPage />} />
          <Route path="/notifications" element={<Messagerie/>} />
          <Route path="/Profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </div>

}
}
export default App;
