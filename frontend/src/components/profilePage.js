import react from 'react';
import {Component} from 'react';
import NavP from './navP';
import Footer from './footer';
import HomeBody from './homeBody';
import ProfileBody from './profileBody';
import Nav from './nav';

class ProfilePage extends Component{
    getData(){
        fetch('http://127.0.0.1:8000/Annonce/').then(response=>response.json()).then((result)=>{
            console.log(result)
        })
    }
  render()
  {
    return <div>
        <Nav/>
        <ProfileBody/>
        <Footer/>
         </div>
  }


}
export default ProfilePage;