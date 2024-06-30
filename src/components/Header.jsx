import { GiCommercialAirplane } from "react-icons/gi";
import classes from './Header.module.css';
// import NavBar from "./NavBar";

function Header(){
    return(
        <section className={classes.header}>
           {/* <NavBar /> */}

            <div className={classes.shadow}>
            <div className={classes.logo__div}>
            <GiCommercialAirplane className={classes.logo} />
            <h1 className={classes.logo__title} >Travel Mali</h1>
            </div>
               
               <div className={classes.header__text}>
               <h1 className={classes.header__title}>Amusez-vous pendant votre vacances</h1>
                <p>Explorer les meilleurs de l'Afrique et de ses cultures </p>

               </div>

            </div>
        </section>
    );
}

export default Header;