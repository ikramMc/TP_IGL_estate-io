export class SearchController{
    search (motsClés){
        fetch('http://127.0.0.1:8000/Annonce/filter/'+motsClés).then(response=>response.json()).then((result)=>{
        return "jean"
      },)
   
    }
}