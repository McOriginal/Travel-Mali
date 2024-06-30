import BoxTravel from "./BoxTravel";

import classes from './NextTravel.module.css';

function LastTravel(){
    return(
        <>
         <h1 className={classes.box__title}>Voyage Précédent</h1>
         <div className={classes.next__travel}>

         <BoxTravel
         image="https://i.pinimg.com/originals/3a/a3/23/3aa3238f4e56603be7721a762bb14321.jpg"
         nbplace="15 personnes ont visité"
         visiteDate="10.11.2024"
         place="Siby"
         description="Siby est une commune du Mali, dans le Cercle de Kati et la région de Koulikoro. le village de Siby est situé à près de 50 km au sud-ouest de Bamako"
         />
         <BoxTravel
         image="https://levoyageducalao.com/wp-content/uploads/2018/09/Hotel-Ivoire-Abidjan-1024x640.jpg"
         nbplace="10 personnes ont visité"
         visiteDate="20.10.2024"
         place="Abidjan"
         description="Abidjan est une ville du littoral Atlantique sud de la Côte d'Ivoire, en Afrique de l'Ouest. C'est le principal centre urbain du pays"
         />
         <BoxTravel
         image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQskulcUMU6tEuGhuPA0USs_loojq8u1JRYEA&s"
         nbplace="20 personnes ont visité"
         visiteDate="03.09.2024"
         place="Guinée Konakry"
         description="La Guinée est un pays d'Afrique de l'Ouest bordé par l'océan Atlantique à l'ouest."
         />
         </div>  
        </>
    );
}


export default LastTravel;