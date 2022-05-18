import React from "react";
import "./Localisation.css";
import Map1 from '../..//img/mapisep.png';
import Map2 from '../..//img/mapvolkeno.png';
import Map3 from '../..//img/mapedep.png';




function Localisation() {
  return (
    <div className="blog component__space" id="Localisation">
      <div className="heading">
        <h1 className="heading">Localisation</h1>
        <p className="heading p__color">
        Trouver notre emplacement sur (Google Maps) le moyen le plus simple 
        </p>
        <p className="heading p__color">
        pour découvrir des lieux des Entreprises en temps réel.
        </p>
      </div>
      <div className="container">
          <div className="row">
              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img">
                             <img src={Map1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h4 className="project__text">Isep</h4>
                         <h5 className="project__text">Institut Supérieur d'Enseignement Professionnel</h5>
                         <a href="https://www.google.sn/maps/place/Institut+Sup%C3%A9rieur+d'Enseignement+Professionnel+
                         (ISEP)/@14.8359663,-16.9034735,17z/data=!3m1!4b1!4m5!3m4!1s0xec1c099cd325a05:0xd3c8ce67ba07acc2!8
                         m2!3d14.8359611!4d-16.9012848?hl=fr" className="blog project__btn btn">En savoir plus</a>
                       </div>
                 </div>
              </div>

              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Map2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h4 className="project__text">Volkeno</h4>
                         <h5 className="project__text">Est une entreprise numérique et une startup studio</h5>
                         <a href="https://www.google.com/maps/place/Volkeno/@14.7437597,-17.4553681,17z/data=!3
                         m1!4b1!4m5!3m4!1s0xec10d43bf53eca9:0x3b82f22203a8a02d!8m2!3d14.7437545!4d-17.4531848"
                          className="blog project__btn btn">En savoir plus</a>
                       </div>
                 </div>
              </div>

              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img">
                             <img src={Map3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h4 className="project__text">Edep</h4>
                         <h5 className="project__text"> Entreprise d'Entrainement Professionnel.</h5>
                         <a href="https://www.google.com/maps/place/EDEP+(Entreprise+d'Entrainement+Professionnel
                         )/@14.7910104,-16.9380437,17z/data=!3m1!4b1!4m5!3m4!1s0xec1bfd0a2a2b343:0x32c424dd1b678
                         d9e!8m2!3d14.7910052!4d-16.9358604" className="blog project__btn btn">En savoir plus</a>
                       </div>
                 </div>
              </div>

          </div>
      </div>
    </div>
  );
}

export default Localisation;
