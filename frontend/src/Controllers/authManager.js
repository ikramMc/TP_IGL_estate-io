import { RequeteController } from "./requeteController";
export class AuthManager{
    login(user){
        let requeteController=new RequeteController();
        window.localStorage.setItem('requeteController',JSON.stringify(requeteController))
        requeteController.getAllAnnonces();
        requeteController.createUser(user);

    }
    logOut(){
        window.localStorage.clear();
        window.location = '/'
    }
  
}