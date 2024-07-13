import { FaPhoneVolume } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import classes from './Contact.module.css';
import { useState } from "react";


function Contact(){

    const [isSending, seIsSending] = useState(false);


    function sendingForm(event){
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        
        // const fullname = data.get('fullname');
        // const phone = data.get('phone');
        // const message = data.get('message');
        
        console.log(data);

        seIsSending(true);

        setTimeout(() =>{
            seIsSending(false);
        }, 5000);
    }
    
    
    

    return (
        <>
        <div className={classes.logo__div}>
        <FaPhoneVolume  className={classes.logo} />
        <h1 className={classes.logo__title} > Contactez-nous</h1>
        </div>

        <div className={classes.contact__container}>

            <div className={classes.contact__box}>
                <div className={classes.contact__containte}>
                    <FaMapMarkerAlt className={classes.contact__icon} />
                    <h3> Hamdallaye ACI 2000</h3>
                </div>
                <div className={classes.contact__containte}>
                    <FaPhoneVolume className={classes.contact__icon} />
                    <h3>(+223) 72 11 56 99</h3>
                </div>
                <div className={classes.contact__containte}>
                    <MdEmail className={classes.contact__icon} />
                    <h3>travelmali223@gmail.com</h3>
                </div>
            </div>

        <div className={classes.contact__form}>
            <form onSubmit={sendingForm}>
                <div className={classes.contact__inputbox}>
                    <label htmlFor="name">Nom complèt</label>
                    <input type="text" required name="fullname" id="name" />
                </div>
                <div className={classes.contact__inputbox}>
                    <label htmlFor="phone">Téléphone</label>
                    <input  type="number" required name="phone" id="phone" />
                </div>
                <div className={classes.contact__inputbox}>
                    <label htmlFor="message">Message</label>
                    <textarea  required name="message" id="message" placeholder="quel message souhaitez-vous nous faire parvenir ?"/>
                </div>
               {!isSending && <button className={classes.contact__btn}>Envoyer </button> }
               {isSending && <p>En cours d'envoie... </p> }
            </form>
        </div>
        
        </div>
        
        </>
    );
}

export default Contact;