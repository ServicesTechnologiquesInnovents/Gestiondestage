import React, {useState} from "react";
import "./Accueil.css";
import logo_ejd from  "../../img/logo222.png";
import {IoLocationOutline} from "react-icons/io5"; 
import {HiOutlineOfficeBuilding} from "react-icons/hi";
import {HiOutlineMenu} from "react-icons/hi";
import { AiOutlineContacts, AiOutlineQuestionCircle,
 AiOutlineHome} from "react-icons/ai";
 //import Propos from "../../img/dev.png";
//import {FaHome} from "react-icons/fa";


function Accueil() {
  // fixed Header
  
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle Menu
  const [show, setShow] = useState(true);
  return (

    
    <div className="home" id="Accueil">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
       
          <div className="logo_ejd">
            <img className="logo" src={logo_ejd} alt="" />
          </div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Accueil">
                <li className="nav__items mx__15"><AiOutlineHome color="orange"fontSize={23} /><span>Accueil</span></li>
              </a>
              <a href="#propos">
                <li className="nav__items mx__15"><AiOutlineQuestionCircle color="orange" fontSize={23}/><span>A propos</span></li>
              </a>
              <a href="#Entreprise">
                <li className="nav__items mx__15"><HiOutlineOfficeBuilding color="orange"fontSize={23}/><span>Entreprises</span></li>
              </a>
              <a href="#Localisation">
                <li className="nav__items mx__15"><IoLocationOutline color="orange"fontSize={23}/><span>Localisation</span></li>
              </a>
              <a href="#Contact">
                <li className="nav__items mx__15"><AiOutlineContacts color="orange" fontSize={23}/><span>Contact </span></li>
              </a>
            </ul>
          </div>
         
          {/* Toogle Menu */}
          {
          <div className="toggle__menu">
            < svg onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="25"
            
              fill="currentColor"
              class="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
               
              <HiOutlineMenu />
            </svg>
          </div >
          }
          {show ?(
          <div className="sideNavbar">
              <ul className="sidebar d__flex">
            
            <li className="sideNavbar">
              <a href="#Accueil"><AiOutlineHome color="orange"/><span>Accueil</span></a>
            </li>
            <li className="sideNavbar">
              <a href="#propos"><AiOutlineQuestionCircle color="orange" /><span>A propos</span></a>
            </li>
            <li className="sideNavbar">
              <a href="#Entreprise"><HiOutlineOfficeBuilding color="orange"/><span>Entreprises</span></a>
            </li>
            <li className="sideNavbar">
              <a href="#Localisation "><IoLocationOutline color="orange"/><span>Localisation</span></a>
            </li>
            <li className="sideNavbar">
              <a href="#Contact"><AiOutlineContacts color="orange"/><span>Contact </span></a>
            </li>
              </ul>
          </div>
          ) : null}
        </div>
        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz_10">BIENVENUE CHEZ VOUS !</h1>
              <h2 className="home__text pz__10">Nous sommes une Entreprise </h2>
              <div className="i-title">
                  <div className="i-title-wrapper">
                    <div className="i-title-item">De Gestion de Stage</div>
                    <div className="i-title-item">Chercche une stage immediat</div>
                    <div className="i-title-item">Demande de Stage</div>
                    <div className="i-title-item">En Gestion des Entreprises</div>
                    <div className="i-title-item">En tout securite</div>
                    <div className="i-title-item"></div>
                  </div>
              </div>
              <h2 className="home__text pz__10">Une Entreprise.</h2>
              <h4 className="home__text pz__10">Base au sénégal.</h4>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  );
}

export default Accueil;
