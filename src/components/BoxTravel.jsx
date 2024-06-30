import { FaRegCalendarAlt } from "react-icons/fa";
import { TbUsersGroup } from "react-icons/tb";
import classes from './NextTravel.module.css';

function BoxTravel({image , nbplace, visiteDate, place, description}){

    return(
        <>

         <div className={classes.box}>
            
                <img className={classes.image} src={image} alt="prochain voyage" />
            
            <div className={classes.box__containte}>
                <TbUsersGroup />
                <p> {nbplace} </p>
                
                <FaRegCalendarAlt />
                <p>{visiteDate}</p>
            </div>

            <h1 className={classes.place}>{place} </h1>

            <p className={classes.description}> {description} </p>
            <button className={classes.btn}>Rejoint le groupe</button>
         </div>
        
        </>
    );
}

export default BoxTravel;