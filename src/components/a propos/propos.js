import React from "react";
import "./A propos.css";
import Propos from "../../img/img4.jpg";
import Apropos from "../../img/img3.jpg";

const propos = () =>  {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="propos">
      <div className="container">
        <div className="row">
          <div className="col__2">
          <img src={Propos} alt="" className="about__img" />
          <img src={Apropos} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">A propos de nous</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                EJD (entreprise des jeunes developpeurs) est une entreprise crée en avril 2022 par des apprenants
                 de l’ISEP-Thies. Notre objectif est de participer aux développements numériques du pays.
              </p>
              <p className="about__text p__color">
                En effet, on met en place des solutions informatiques dans le but d’aider les jeunes et les PME-PMI
                à attirer plus de monde qui s’intéressent à ce qu’ils font. En effet, on conçoit des sites et des
                applications web comme mobiles qui donnent des solutions à des difficultés des clients.
              </p>
              <p className="about__text p__color">
                On vous accompagne sur vos projets de mises en place des plateformes (sites ou applications 
                web et mobiles), de l’analyse des attentes du projet, en passant par la production du cahier 
                des charges et la production la plateforme jusqu’à l’hébergement.
              </p>
              <p className="about__text p__color">
                EJD vous accompagne sur toutes les étapes de votre projet et peut vous suivre pour la maintenance
                du projet après sa réalisation.

              </p>
              {/*
              <div className="about__button d__flex align__items__center">
                <a href="#">
                  <button className="about btn pointer">Télécharger le CV</button>
                </a>
              </div>
                */}
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill=""
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default propos;
