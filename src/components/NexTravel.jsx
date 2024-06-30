import BoxTravel from "./BoxTravel";

import classes from './NextTravel.module.css';

function NextTravel(){
    return(
        <>
         <h1 className={classes.box__title}>Prochains voyage</h1>
         <div className={classes.next__travel}>

         <BoxTravel
         image="https://i.pinimg.com/originals/62/0a/ba/620aba4bc14cb6970f7889cd8e2dbc6d.png"
         nbplace="15 places disponible"
         visiteDate="10.11.2024"
         place="Sénégal"
         description="Le Sénégal, en forme longue la république du Sénégal, est un État d'Afrique de l'Ouest bordé à l'ouest par l'Océan Atlantique."
         />
         <BoxTravel
         image="https://tchadinfos.com/wp-content/uploads/2016/10/Capture-d%E2%80%99e%CC%81cran-2016-10-01-a%CC%80-19.28.23.jpg"
         nbplace="10 places disponible"
         visiteDate="20.10.2024"
         place="Tchad"
         description="Le Tchad, en forme longue la république du Tchad, est un pays d'Afrique centrale, sans accès à la mer, frontalier de la Libye au nord, du Soudan à l'est, de la République centrafricaine au sud, du Niger à l'ouest."
         />
         <BoxTravel
         image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/8e/7d/e0/monument-de-la-reunification.jpg?w=500&h=500&s=1"
         nbplace="20 places disponible"
         visiteDate="03.09.2024"
         place="Cameroun"
         description="Le Cameroun, en forme longue la république du Cameroun, est un État d'Afrique centrale et occidentale situé entre le Nigeria au nord-nord-ouest."
         />
         </div>  
        </>
    );
}


export default NextTravel;