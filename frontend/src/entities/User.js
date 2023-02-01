export class User{
    #id;
    #email;
    #nom;
    #prenom;
   constructor(id,email,nom,prenom)
   {
    this.id=id;
    this.email=email;
    this.prenom=prenom;
    this.nom=nom;
    

   }
   setId(id){
    this.id=id;
   }
    getId(){
    return this.id;
   }
   getEmail(){
    return this.email;
   }
   getNom(){
    return this.nom;
   }
   getPrenom(){
    return this.prenom;
   }


}
