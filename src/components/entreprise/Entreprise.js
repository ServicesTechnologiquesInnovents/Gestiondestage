import React from "react";
import "./Entreprise.css";
import isep from '../../img/isepp.png';
import volkeno from '../../img/volkeno.png';
import edep from '../../img/edepp.png';

function Entreprise () {
  return (
    <div className="service component__space" id="Entreprise">
      <div className="space-zise">
      
      <div className="heading">
        <h1 className="heading">Entreprises</h1>
        <p className="heading p__color">
        Une unité de production juridiquement autonome dont l'objectif est
        </p>
        <p className="heading p__color">
        de produire des biens et/ou des services à destination de personnes
        </p>
        <p className="heading p__color">
        physiques ou morales afin d'en tirer un bénéfice.
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="service__box pointer">
              <div className="img">
              <img src={isep} alt="" className="project__img" />
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  >
                </svg>
              </div>
              <div className="text-desc">
                <h1>ISEP</h1>
              </div>
              <p className="text-descc">Est un institut public d’enseignement supérieur et de formation professionnelle
               qui offre des formations en alternance école entreprise dans plusieurs domaines. Il a pour mission de 
                contribuer à la diversification de l’offre de formation supérieure professionnelle, d’offrir 
                des opportunités de poursuite d’études professionnelles aux bacheliers ou tout titulaire d’un
                diplôme admis en équivalence; de participer à la formation des techniciens supérieurs de
                niveau Bac + 2ans
                </p>
                <div className="my-button">
                <ul className="button-lire">
              <a href="/TestForm"> <button  className=" lire_me" >Postuler </button>  </a>
              </ul>
              </div>
            </div>
          </div>


          <div className="col__3">
            <div className="service__box pointer">
              <div className="img">
              <img src={volkeno} alt="" className="project__img" />
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"

                >
                 
                </svg>
              </div>
              <div className="text-desc">
                <h1>VOLKENO</h1>
              </div>
              
              <p className="text-descc">Est une entreprise numérique et une startup studio. Elle a 
                pour vocation de créer et d'aider à créer des produits et services numériques. Volkeno est bien 
                connu pour créer des applications web et mobiles et de plateformes 
                les plus innovantes et accrocheuses pour des startups, entreprises, organisations et multinationales.
                Notre équipe qualifiée et expérimentée est toujours prête à relever les défis afin de créer des
                 produits à fortes valeurs ajoutées qui sont conçus pour apporter de la croissance à votre projet.
              </p> 
              <div className="my-button">
                <ul className="button-lire">
              <a href="/TestForm"> <button  className=" lire_me" >Postuler </button>  </a>
              </ul>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
            <div className="img">
              <img src={edep} alt="" className="project__img" />
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                >
                </svg>
              </div>
              <div className="text-desc">
                <h1> EDEP</h1>
              </div>
              <p className="text-descc">Entreprise d’Entraînement Professionnel est une Association à but non 
              lucratif reconnue par l’État du Sénégal, L’objectif principal de l’Association(EDEP) est de maintenir
              les jeunes dans leur terroir en stimulant leurs compétences afin qu’ils puissent exploiter les 
              opportunités locales.Nous disposons d’un cadre sécurisé, Pouvant recevoir des
              séances d’activités qui permettent de réveiller lescompétences des jeunes engagés pour le
              développement du Sénégal et de leur localité.
              </p>
              <div className="my-button">
                <ul className="button-lire">
              <a href="/TestForm"> <button  className=" lire_me" >Postuler </button>  </a>
              </ul>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
    </div>
  );
}

export default Entreprise;
