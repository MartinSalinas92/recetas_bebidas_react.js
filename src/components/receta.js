import React,{useContext, useState} from 'react';
import {ModalContext} from '../context/modal.context';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Receta = ({value}) => {


    //configuracion del modal
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();
    
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    //context
    const{guardarIdReceta, guardarRecetas,informacion}=useContext(ModalContext);

    const guardaridReceta=()=>{
        guardarIdReceta(value.idDrink)
        handleOpen();

    }
    //funcion para mostrar los ingredientes

    const mostrarIngredientes=informacion=>{
        let ingredientes= [];

        for(let i=1; i<16; i++){
            if(informacion[`strIngredient${i}`]){
                ingredientes.push(
                <li>{informacion[`strIngredient${i}`]} {informacion[`strMeasure${i}`]}</li>
                )
            }

        }
        return ingredientes;

    }



    return (
        <div className="col-md-4">
            <div className="card">
                <h2 className="card-header">{value.strDrink}</h2>

                <img className="card-img-top" src={value.strDrinkThumb} alt={`Imagen de ${value.strDrink}`} />

                <div className="card-body"> 
                    <button
                        type="button"
                        className="btn btn-block btn-success"
                        onClick={guardaridReceta}
                      
                    
                    
                    >

                        Ver Receta

                    </button>

                    <Modal

                        open={open}
                        onClose={()=>{

                            guardarIdReceta(null);
                            guardarRecetas({});
                            
                            handleClose()
                        }
                            
                            }
                                            
                    
                    
                    >
                        <div style={modalStyle} className={classes.paper}>
                        <h2>{informacion.strDrink}</h2>
                        <h3 className="mt-4">Instrucciones</h3>

                        <p>
                            {informacion.strInstructions}
                        </p>

                        <img className="img-fluid my-4" src={informacion.strDrinkThumb} />

                        <h3>Ingredientes y Cantidades</h3>
                        <ul>
                            {mostrarIngredientes(informacion)}
                        </ul>

                        </div>
                        
                        
                     </Modal>
                
                </div>

                </div>

            </div>



    



         );
}
 
export default Receta;