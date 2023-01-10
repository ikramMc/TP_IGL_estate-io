import './try.scss';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import FooterTry from './footertry';
import lc from './images/location.png'
import pr from './images/person.png'
import ph from './images/phone.png'
import ma from './images/email.png'
import "./footertry.css";

import ProductImagesSlider from './product-images-slider';
import { productImages } from './assets'
import { useParams } from 'react-router-dom';
import React,{ useState, useEffect} from 'react';
import axios from 'axios'

function Try() {

  let params = useParams();
  const [postsA, setPostsA] = useState([])
  const [postsB, setPostsB] = useState([])
  const [postsU, setPostsU] = useState([])
  let idbien = 0;
  let idContact = 0;

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/Annonce/')
      .then(res => {
            for (let i = 0; i < res.data.length; i++) {
                if (res.data[i].annonceId == params.slideId) {
                   idbien = res.data[i].bienId
                   idContact = res.data[i].userId
                   setPostsA(res.data[i])
                }
            }

            axios.get('http://127.0.0.1:8000/bienImob/')
                .then(res2 => {
                console.log(res2.data)
                for (let j = 0; j < res2.data.length; j++) {
                    if (res2.data[j].bienImmobilierId == idbien ) {
                      setPostsB(res2.data[j])
                    }
                }        
                })
                .catch(err => {
                  console.log(err)
                })


            axios.get('http://127.0.0.1:8000/User/')
                .then(res3 => {
                console.log(res3.data)
                for (let k = 0; k < res3.data.length; k++) {
                    if (res3.data[k].userId == idContact ) {
                      setPostsU(res3.data[k])
                    }
                }        
                })
                .catch(err => {
                  console.log(err)
                })

      })
      .catch(err => {
        console.log(err)
      })
  })

  
  


  return (
    <>
    <div className="yo">
        <div  className="yoyo">
           <ProductImagesSlider images={productImages} />
        </div>
        <div className="contentdetails">
            <h1 className='bigtitle'>{postsB.titre}</h1>
            <h1 className='bigtitle1'>{postsA.date}</h1>
            <p className='simpletext'>Location pour vacances.</p>
            <div class="trait_dessus"> </div>
            <p className='t1'>Surface</p>
            <p className='simpletext1' >{postsB.surface}</p>
            <p className='t1'>Description</p> 
            <p className='simpletext1' >{postsB.description}</p>
            <p className='t1'>Localisation</p>
            <p className='simpletext1'>Wilaya : {postsB.wilaya}</p>
            <p className='simpletext1'>Commune : {postsB.commune}</p>
            <p className='simpletext1'>Adresse : {postsB.adresse}</p>
      </div>
    
    </div>
    <div className="footer1">
        <div className="footer_container1">
            <h1 className="contactetcoord">
                Contact & coordonnees
            </h1>
            <div className="footer_social1">
                <img src={pr} className="icon1"></img> <a className='infoo'>{postsU.nom} {postsU.prenom}</a>
                <img src={ma} className="icon1"></img> <a className='infoo'>{postsU.email}</a>
                <img src={lc} className="icon1"></img> <a className='infoo'>{postsU.adresse}</a>
                <img src={ph} className="icon1"></img> <a className='infoo'>{postsU.tel}</a>
            </div>

            <button class="button-75" role="button" ><span class="text">Envoyer message</span></button>
        </div>
      </div>
    </>
  );
   
}

export default Try;
