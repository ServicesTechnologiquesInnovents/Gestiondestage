import React from 'react';
import './Contact.css';
import contactImg from "../../img/contact9.png"
import contactmg from "../../img/contact11.png"
import contact from "../../img/contact7.png"
import  { useState } from "react";
import {GrSend} from "react-icons/gr";
import  { useRef } from 'react';
import emailjs from 'emailjs-com'
import {FiMapPin} from "react-icons/fi";
import {IoMailOutline , IoLogoLinkedin } from "react-icons/io5";
import {IoCallOutline} from "react-icons/io5";
import {FaFacebookSquare, FaTwitterSquare, FaInstagramSquare} from "react-icons/fa";


 

function Contact() {
    const form = useRef () ;
     const [done, setDone] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_nrosarp', 'template_f2iqpiq', form.current, 'Ux2VA_gzw7U2XFvz7')
          .then((result) => {
              console.log(result.text);
              setDone(true);
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Contact</h1>
                            <p className="hire__text white">Nous sommes toujours là pour vous entendre:</p>
                           <div className="hire-text">
                              <h6> <IoCallOutline  color='orangered' /><span>(+221) 77 0659267 </span><br/></h6>
                              <h6><FiMapPin color='orangered'/><span>Thies,keur saib ndoye</span></h6></div>
                              <h6><IoMailOutline color='orangered'/><span><a href="mailto:developpeurejd@gmail.com"> developpeurejd@gmail.com</a></span><br/></h6>

                        </div>
                        <form ref={form} onSubmit = {sendEmail}>
                        <div className="input__box">
                           <input type="text" name="nom" className="contact name" placeholder="Nom *" required  />
                           <input type="text" name="prenom" className="contact prenom" placeholder="prenom *" required  />
                           <input type="email"  name="email" className="contact email" placeholder=" Email *" required />
                           <textarea name="message" id="message"  placeholder="Rédigez votre message" required ></textarea>
                           <button className="btn contact pointer" type="submit" >Envoyer<GrSend /></button>
                           <span> {done && " Merçi de m'envoyer un message!"} </span>

                        </div>
                        </form>
                    </div>
                </div>
                <div className="contact-img">
                    <img src={contactImg} alt="" className="contact__img" />
                </div>
                <div className="contact-me">
                    <img src={contactmg} alt="" className="contact__img" />
                </div>
                <div className="contact-img">
                    <img src={contact} alt="" className="contact__img" />
                </div>
            </div>
            <div className='icone'>
            <h1 ><a href="" className="icons">  <FaTwitterSquare /></a></h1>
            <h1 ><a href="" className="icons">  <IoLogoLinkedin  /></a></h1>
            <h1 ><a href="" className="icons">  <FaFacebookSquare  /></a></h1>
            <h1 ><a href="" className="icons">  <FaInstagramSquare /></a></h1>
            </div>
            
        </div>
        
    )
}

export default Contact
