
import classes from './NavBar.module.css';

function NavBar(){

    return (
        <div className={classes.nav__box} >
            <ul className={classes.nav__list}>
                <li>
                    <a href="home" > Accueil</a>
                </li>
                <li>
                    <a href="about" > A propos</a>
                </li>
                <li>
                    <a href="contact" > Contact</a>
                </li>
            </ul>
        </div>
    );

}


export default NavBar;