export class Bien{
    #id;
    #titre;
    #description;
    #prix;
    #surface;
    #location;
    #wilaya;
    #commune;
    #adresse;
    #type;
    constructor(id,titre,des,prix,surface,location,wilaya,commune,adresse,type)
    {
        this.id=id;
        this.titre=titre;
        this.description=des;
        this.prix=prix;
        this.surface=surface;
        this.location=location;
        this.wilaya=wilaya;
        this.commune=commune;
        this.adresse=adresse;
        this.type=type;
    }
    getTitre()
    {
        return this.titre;
    }
    getDescription()
    {
        return this.description;
    }
    getPrix()
    {
        return this.prix;
    }
    getSurface()
    {
        return this.surface;
    }
    getWilaya()
    {return this.wilaya;}
    getCommune()
    {
        return this.commune;
    }
    getLocation()
    {
        return this.location;
    }
    getAdresse()
    {
        return this.adresse;
    }
    getType(){
    return this.type;
    }
}