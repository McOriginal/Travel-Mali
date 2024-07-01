import { createPortal } from 'react-dom';
import ImagesGalerie from './ImagesGalerie';


const { forwardRef, useRef, useImperativeHandle } = require("react");

const ShowDialogue = forwardRef(
    function  ShowDialogue({title}, ref) {

        const dialog = useRef();

        useImperativeHandle(ref, () =>{
            return{
                open(){
                    dialog.current.showModal();
                }
            }
        })


        return createPortal(

            <dialog ref={dialog} className="show_dialog">
                <h1 className='show_dialog_title'>{title} </h1>

                <form method="dialog">

                <div className='galerie' >
                    <ImagesGalerie 
                    imgTitle="Sénégal" 
                    image="https://www.lechotouristique.com/wp-content/uploads/2019/06/adobestock_45217170.jpg" 
                    />
                    <ImagesGalerie 
                    imgTitle="Sénégal" 
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr1XgI4RVYPIZoDRIlas9BSIJJ7eOXe59yxg&s"
                    />
                    <ImagesGalerie 
                    imgTitle="Mauritanie" 
                    image="https://static.latribune.fr/full_width/1165869/tourisme.jpg"
                    />
                    <ImagesGalerie 
                    imgTitle="Algerie" 
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgcz7-MJj6NurXgJHf4mAjfhtnJr5VygvAwA&s" 
                    />
                    <ImagesGalerie 
                    imgTitle="Mali" 
                    image="https://www.visa-office.fr/blog/wp-content/uploads/2022/01/0F9EB194-60B3-4CB6-9371-D6AA84502977.jpeg" 
                    />
                    <ImagesGalerie 
                    imgTitle="Mauritanie" 
                    image="https://files.point-voyages.com/pictures/mauritanie-le-train-du-desert-philippe-freund_0000015884oyj6j7yqnf_m.jpg" 
                    />
                    <ImagesGalerie 
                    imgTitle="Algerie" 
                    image="https://www.echoroukonline.com/wp-content/uploads/2021/10/tourisme.jpg" 
                    />
                    <ImagesGalerie 
                    imgTitle="Mali" 
                    image="https://images.mnstatic.com/2c/0d/2c0d234f8b824a0f97261cab8aa3e1de.jpg?quality=75&format=pjpg&fit=crop&width=980&height=880&aspect_ratio=980%3A880" 
                    />
                    <ImagesGalerie 
                    imgTitle="Mauritanie" 
                    image="https://www.youngpioneertours.com/wp-content/uploads/2018/11/Fish_market_in_Nouakchott_-_Mauritania-1024x683.jpg" 
                    />
                    <ImagesGalerie 
                    imgTitle="Côte d'ivoire" 
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-5nCiO5wBl-M8hiRwvx5kMRuEKFyXd-sD1g&s" 
                    />
                    <ImagesGalerie 
                    imgTitle="Côte d'ivoire" 
                    image="https://discover-ivorycoast.com/wp-content/uploads/2019/01/elephant-family-2776148_960_720-1-1024x624.jpg" 
                    />
                    <ImagesGalerie 
                    imgTitle="Côte d'ivoire" 
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFV9Z2TnQs_TWZYE6ifD9vtlbvoBscr9Fx8g&s" 
                    />

                    <button> Fermer </button>

                </div>
                </form>
            </dialog>,
            document.getElementById('root')
        );
    }
)

export default ShowDialogue;