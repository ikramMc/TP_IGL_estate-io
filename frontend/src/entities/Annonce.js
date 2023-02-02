export class Annonce{
    #id;
    #date;
    #user;
    #bien;
    #categorie;
    constructor(id,date,user,bien,categorie)
    {this.id=id;
     this.date=date;   
     this.user=user;
     this.bien=bien;
     this.categorie=categorie;
    }
    getId()
    {
        return this.id;
    }
    getDate()
    {
        return this.date;
    }
    getUser()
    {
        return this.user;
    }
    getBien()
    {
        return this.bien;
    }
    getCategorie()
    {
        return this.categorie;
    }
}