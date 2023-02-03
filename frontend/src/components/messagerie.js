import react from 'react';
import {Component} from 'react';
import './style/messagerie.css'
import Nav from './nav';
import Footer from './footer';
import { json } from 'react-router-dom';


class Messagerie extends Component{
    constructor(){
        super();
    this.state={messages:[]}
    this.retrieiveMessage=this.retrieiveMessage.bind(this)
    this.retrieiveMessage()
    }
    pop = () => {
        console.log('omg !');
      };
    retrieiveMessage()
    {   let messages=[];
        fetch('http://127.0.0.1:8000/message/')
        .then(response => response.json())
        .then(result=> {
            fetch('http://127.0.0.1:8000/User/')
        .then(response => response.json())
        .then(users=> {
            result.map((msg=>{
                if(msg.recepteur===JSON.parse(window.localStorage.getItem('user')).id)
                {
                let sender=users.filter(user=>user.userId===msg.emiteur)
                messages.push({sender:sender[0].nom+" "+sender[0].prenom,contenu:msg.contenu})
                this.setState({messages:messages})
        }}))
        })
       
           
        })
    }
    render() {
        //console.log(this.state.messages);
        return (<div>
            <Nav/>
            <h1 class='header'>Messagerie</h1>
            <div class='messagerie'>
                <div class='messages'>
                <ul class='messages-list' >
                    <form>
                {this.state.messages.map(item => {
                return <li>
                    <button class='message-button' onClick= {this.pop}>
                <div class='message'>
                
                    <div class='sender'>
                    {item.sender+':'} 
                    </div>
                    <div class='message-content'>
                    {item.contenu}
                    
                    </div>
                    
                </div>
                </button>
                </li>;
            })}
                </form>
                </ul>
                </div>
                
                </div>
            <Footer/>
          </div>
        );
      }


}
export default Messagerie;