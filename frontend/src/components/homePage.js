import react from 'react';
import {Component} from 'react';
import Nav from './nav';
import Footer from './footer';
import HomeBody from './homeBody';

class HomePage extends Component{

  render()
  {
    return <div>
        <Nav/>
        <HomeBody/>
        <Footer/>
        </div>
  }


}
export default HomePage;