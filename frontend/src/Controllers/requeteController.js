import axios from "axios";
import { Annonce } from "../entities/Annonce";
export class RequeteController{
    getAnnonceById(id)
     {let annonce='heh';
    fetch('http://127.0.0.1:8000/Annonce/')
    .then(response => response.json())
    .then(annonces => {
           annonce=annonces.find((an)=>an.annonceId==id)
           let annonceobj=new Annonce(annonce.annonceId,annonce.date,annonce.userID,annonce.bienId,annonce.categorie)
           console.log(annonceobj)
           return annonceobj;
    })
    

    }
    getAllAnnonces()
    {
        fetch('http://127.0.0.1:8000/bienImob/')
      .then(response => response.json())
      .then(biens => {
         window.localStorage.setItem('biens',JSON.stringify(biens.reverse())); 
      })
       fetch('http://127.0.0.1:8000/Annonce/')
       .then(response => response.json())
       .then(annonces => {
           window.localStorage.setItem('annonces',JSON.stringify(annonces.reverse()));
       })
    }

    addNewAnnonce(annonce,bien,images)
    {console.log(bien);
        console.log(annonce)
        let id;
        fetch('http://127.0.0.1:8000/bienImob/',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                bienImmobilierId:null,
                titre:bien.getTitre(),
                description:bien.getDescription(),
                surface:bien.getSurface(),
                prix:bien.getPrix(),
                wilaya:bien.getWilaya(),
                commune:bien.getCommune(),
                adresse:bien.getAdresse(),
                latitude:bien.getLocation().lat,
                longitude:bien.getLocation().lng,
                type:bien.getType(),
            })
        }).then(response=>response.json())
        .then((result)=>{
          id=result[1];
          this.createImage(id,images);
          this.createAnnonce(id,annonce)
            alert(result[0]);
          window.location.reload();
        },
        (error)=>{
            alert("Failed");
            window.location.reload();
        });
       
    }
    createAnnonce(id,annonce)
        { console.log(id)
          fetch('http://127.0.0.1:8000/Annonce/',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                annonceId:null,
                date:annonce.getDate(),
                user:annonce.getUser(),
                bien:id,
                categorie:annonce.getCategorie(),
            })
        }).then(response=>response.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert("Failed to add announce -_-");
            
        });
        }



        createImage(id,images)
        {
          let formData=new FormData();
          for (var i=0;i<images.length;i++)
          { formData.append('image', images[i],images[i].name);
            formData.append('id', null);
            formData.append('bien',id);
                let url = 'http://localhost:8000/Image/';
                axios.post(url, formData, {
                  headers: {
                    'content-type': 'multipart/form-data'
                  }
                }).then(res => {
                      console.log(res.data);
                    })
                    .catch(err => console.log(err))
                   
                  }   
      
        }

    createUser(user)
    {
        fetch('http://127.0.0.1:8000/User/',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                userId:null,
                nom:user.getNom(),
                prenom:user.getPrenom(),
                email:user.getEmail(),
                tel:null,
                adresse:null,
            })
        }).then(response=>response.json())
        .then((result)=>{
            user.setId(result[0].userId);
            window.localStorage.setItem('user',JSON.stringify(user));
            window.location = '/pageuser';
        },
        (error)=>{
            alert("Failed to add user");
            
        });
    }
    getAnnondceById(id,annonce,bien,images,owner,isLoading)
    {
        fetch('http://127.0.0.1:8000/Annonce/')
     .then(response => response.json())
     .then(annonces => {
            annonce=annonces.find((annonce)=>annonce.annonceId==id)

         fetch('http://127.0.0.1:8000/bienImob/')
    .then(response => response.json())
    .then(biens => {
       bien=biens.find((bien)=>bien.bienImmobilierId==annonce.bienId)
        fetch('http://127.0.0.1:8000/User/')
        .then(response => response.json())
        .then(users => {
            owner=users.find((user)=>user.userId==annonce.userId)
              
          
            let formData=new FormData();
    axios.get('http://localhost:8000/Image/', formData, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }).then(res => {

      let images2=[];
      
      for(let i=0;i<res.data.length;i++)
      {
        if(res.data[i].bienid==this.state.annonce.bienId)images2.push(res.data[i].image)

      }
       
      images=images2;
      isLoading=false
     
          
        })
        .catch(err => console.log(err))
         
        })
    })
   
    
       
     })
    
  
    }
}