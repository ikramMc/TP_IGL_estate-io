export class AuthManager{
    Constructor(){}
    login(user){
        console.log("hey");
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
                email:user.getNom(),
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
    logOut(){
        window.location = '/'
    }
  
}