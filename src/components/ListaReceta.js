import React, { useContext } from 'react';
import Receta from './receta';
import {RecetaContext} from '../context/recetas.context';

const ListaRecetas = () => {

    //extraer recetas
    const {recetas}=useContext(RecetaContext);

    console.log(recetas);



    return ( 

        <div className="row mt-5">
           {
               recetas.map(receta=>(

                   <Receta
                    key={receta.idDrink} 
                    value={receta}
                   
                   />

               ))}

        </div>
     );
}
 
export default ListaRecetas;