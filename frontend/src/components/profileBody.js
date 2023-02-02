
import { Component } from 'react';
import './style/profileBody.css'
import pfp from './images/blue.jpg'
import AnnoncesSlider from './AnnoncesSlider';

class ProfileBody extends Component{
    
  render()
  {
    return <div class='profile-body'>
        <div class='profile'>
            <div class='profile-pic profile-content'>
                <img src={pfp} class='pfp'/>
            </div>
            <div class='profile-info profile-content'>
                <div class='profile-name'>REY Potato</div>
                <div class='profile-text'>Rey@gmail.com</div>
                <div class='profile-text'>0669696969</div>
                <div class='btns'>
                    <button class='modify-btn'>Modifier mon profile</button>
                    <button class='deconnect-btn'>Déconnecter</button>
                </div>
            </div>
        </div>
        <div class='profile-line'></div>
        <AnnoncesSlider/>
    </div>

  }


}

export default ProfileBody;