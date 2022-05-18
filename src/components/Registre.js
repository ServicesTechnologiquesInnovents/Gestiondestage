import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import axios from 'axios'
import "./succes.css" 
import Login from "./Login";
// import '../../node_modules/bootstrap/dist/css/bootstrap.css';

function Registre() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirme, setConfirme] = useState("");
  const [phone, setPhone] = useState("");
  

  const [flag, setFlag] = useState(false);

  const [login, setLogin] = useState(true);
 


  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone || !confirme  ) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("sanskarEmail", JSON.stringify(email));
      localStorage.setItem(
        "sanskarPassword",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");
      axios.post('http://localhost/reactProject/insert.php',{name:name, email:email, password:password,confirme:confirme,phone:phone})
      .then(res=> console.log(res.data))
      .catch(error => {
        console.log(error.response)
    });

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

 
  

  return (
    <>
 
        <div className="App">
            <div className="outer">
          {" "}
          {login ? (
             <div className="inner">
            <form onSubmit={handleFormSubmit}>
              <h3 className="inner_control">Inscription</h3>

              <div className="form-group">
                <label>Nom</label>
                <input
                  type="text"
                  className="form_control"
                  placeholder="Entrer Votre Nom"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="form_group">
                <label>Email</label>
                <input
                  type="email"
                  className="form_control"
                  placeholder="Entrer votre email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Mot de passe</label>
                <input 
                  type="password"
                  minLength={8}
                  className="form-control"
                  placeholder="Entrer votre mot de passe"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Confirme mdp</label>
                <input
                  type="password"
                  minLength={8}
                  className="form-control"
                  placeholder="Entrer votre mot de passe"
                  onChange={(event) =>setConfirme(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Telephone.</label>
                <input
                  type="Phone"
                  pattern="[0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}"
                  className="form-control"
                  placeholder="Entrer votre numéro"
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>

              
            
              <button className="btn_inscrire " type="submit" > S'inscrire</button>
              <p onClick={handleClick} className="forgot-password text-right">
             si vous avez deja un compte cliquer sur, <span className="connecter" onClik={handleClick}>connectez-vous</span>
                
              </p>
              {flag && (
                <Alert color="danger" variant="danger">
                  <p className="message">Ici chaque champ est important!</p>
                </Alert>
              )}
            </form>
            </div>
          ) : (
            <Login />
          )}
         
        </div>
        </div>
    
    </>
  );
}

export default Registre;
