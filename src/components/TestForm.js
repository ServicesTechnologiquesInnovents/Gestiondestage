import React,{Component} from "react";
import { Link    } from "react-router-dom";
import "./TestForm.css";
import logo_ejd from "../img/logo222.png"
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

class App extends Component{
   state={
         nom:null,
         sexe:null, 
         email:null, 
         
       
   } ;
   change=e=>{
     this.setState({
      [e.target.id]: e.target.value   
     });  
   };
   submit=e=>{
     e.preventDefault();
       console.log(this.state);
   }; 
   render(){
     
   
    /*const [done, setDone] = useState(false)*/
   const sendEmail = (e) => {
       e.preventDefault();
   
       emailjs.sendForm('service_moqjpxk', 'template_bg5au9n', e.target, 'Ux2VA_gzw7U2XFvz7')
         .then((result) => {
             console.log(result.text);
             /*setDone(true);*/
         }, (error) => {
             console.log(error.text);
         });
     };
       return(
           
           <div>
             <img  className="img_logo" src={logo_ejd} alt="" />

              
             
           <form  onSubmit = {sendEmail} id="form" action="App.js">
           <h3 className="inner_control">Postuler</h3>
               <label htmlFor="prenom">Prénom:</label>
                   <input  type="text" name="prenom" required='required' placeholder="Prénom *" id="prénom" autoComplete="off" onChange={this.change} />
                   <label htmlFor="name">Nom:</label>
                   <input type="text" name="nom" required='required' placeholder="Nom *" id="nom" autoComplete="off" onChange={this.change} />
                
                   <label htmlFor=" date de naissance">Date de naissance:</label>
                   <input type="date" name="date" required='required' placeholder="Date de naissance " id="date de naissance" autoComplete="off" onChange={this.change}/>
                   <label htmlFor="lieu de naissance">Lieu de naissance:</label>
                   <input type="text"name="lieu" required='required'  id="lieu de naissance" placeholder=" Lieu de naissance*" autoComplete="off" onChange={this.change}/>
                   <div className="sexe">
                   <label htmlFor="sexe">Sexe:</label>
                   <select name="sexe" id="sexe">
                   <option >Sélectionner votre sexe</option>
                   <option value="féminin">Féminin</option>
                   <option value="masculin">Masculin</option>
                   </select>
                   </div>

                   <label htmlFor="adresse">Adresse:</label>
                   <input type="text" name="adresse" required='required' placeholder="adresse *" id="adresse" autoComplete="off" onChange={this.change} />
                   <label htmlFor="email">Email:</label>
                   <input type="email" name="email" required='required' id="email" placeholder="Email *" autoComplete="off" onChange={this.change}/>
                   
                   <label htmlFor="domaine">Domaine:</label>
                   <select name="domaine" id="domaine">
                      <option>Choisissez votre domaine</option>
                      <option value="dwm">Développement Web et Mobile</option>
                      <option value="sri">Système Reseau Informatique</option>
                      <option value="rt">Réseau Télécom</option>
                   </select>
                   <label for="phone">Téléphone:</label>
                   <input type="tel" id="phone" placeholder="Telephone *" autoComplete="off" name="phone" pattern="[0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}" required></input>
                  <div className="postuler">  
                  <button className="btn_inscriree" type="submit" >  Postuler</button>
                  <Link to ='/Valide'> <button className="btn_inscriree" type="submit" >Annuler</button></Link>
                  </div>
               </form>
              
           </div>
       )
   }
}

export default App;