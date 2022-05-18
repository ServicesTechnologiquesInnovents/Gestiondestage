import React from "react";
import footerLogo from "../../img/logo222.png";



function Footer() {
  return (
      
    <div
      className="footer d__flex align__items__center justify__content__space__between pz-10"
      style={{ padding: "10px 20px", zIndex: "100" }}
    >
        <div className="logo_ejd">
            <img className="logo" src={footerLogo} alt="" />
          </div>
      <span
        className="copyright"
        style={{ color: "#000", fontSize: "14px", opacity: "0.75" }}
      >
      
        Copyright © 2022 programmer par (EJD) Entreprises des Jeunes Developpeurs.
      </span> 
                
    </div>
  );
}

export default Footer;
