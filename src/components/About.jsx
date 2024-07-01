import { GiCommercialAirplane } from 'react-icons/gi';
import classes from './About.module.css';


function AboutUs(){

    return(
        <>
        
        <div className={classes.logo__div}>
            <GiCommercialAirplane className={classes.logo} />
            <h1 className={classes.logo__title} > à propos de nous</h1>
            </div>
        <div className={classes.about}>
           <div className={classes.about__containte}>
           <h1>Travel Mali</h1>
            <p>
            Meilleur Tarif Garanti — Réservez dans 85 000 destinations dans l'Afrique. Réservation rapide et facile.
            Passez des vacances mémorables avec notre location de vacance avec piscine.
            Séjours en formule tout-inclus — Réservez l'esprit léger avec Jet tours, spécialiste en vacances réussies. À vous de choisir votre vision du voyage, selon vos envies du moment. Service client 7j/7. Paiement sécurisé.
            </p>
           </div>
            {/* <div className={classes.about__image}> */}
                <img className={classes.about__image} src="https://cdn.mos.cms.futurecdn.net/hQkZQ8QfQshhubnAodqT9G.jpg" alt="about us" />
            {/* </div> */}
        </div>
        </>
    );
}


export default AboutUs;