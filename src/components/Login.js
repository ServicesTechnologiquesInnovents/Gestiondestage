import React, { useState } from "react";
//import { Link    } from "react-router-dom";
import { Alert } from "react-bootstrap";
import Valide from "./Valide";

function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("sanskarPassword")
      .replace(/"/g, "");
    let mail = localStorage.getItem("sanskarEmail").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }

  return (
    <div>
      {home ? (
        <div className="inner">
        <form onSubmit={handleLogin}>
          <h3 className="inner_control">Connexion</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Entrer votre email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Mot de passe</label>
            <input
              type="password"
              className="form-control"
              placeholder="Entrer votre mot de  passe"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>
         
        <button className="btn_inscrire" type="submit" >  Connecter</button>

          {flag && (
            <Alert color="primary" variant="danger">
               <p className="message">Nom d'utilisateur ou mot de passe est incorrectes!</p>
            </Alert>
          )}
        </form>
        </div>
      ) : (
        <Valide/>
      )}
    </div>
  );
}

export default Login;
