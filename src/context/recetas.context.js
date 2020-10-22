import React,{createContext, useState, useEffect} from 'react';
import axios from 'axios';


//crear context

export const RecetaContext=createContext();


//Provider donde se encuentran las funciones y el state

const RecetaProvider = (props) => {

    
    //crear state context

    const [recetas, guardarRecetas]=useState([]);
    const [consultar, guardarConsultar]=useState(false);
    const [busquedas, buscarRecetas]=useState({
        nombre:'',
        categoria:''


    });


    const {nombre,categoria}=busquedas;
    //ejercutamos el llamado de la api
    useEffect(() => {
       const obtenerRecetas= async()=>{

            if(consultar){
               const url=`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;

                const recetas= await axios.get(url);

                //console.log(recetas.data.drinks);

                guardarRecetas(recetas.data.drinks);



            }
          


            

            




       }
       obtenerRecetas();

       

   
    }, [busquedas])




    return ( 

        <RecetaContext.Provider

            value={{

                recetas,
                buscarRecetas,
                guardarConsultar
            }}
        
        >

            {props.children}

        </RecetaContext.Provider>



     );
}
 
export default RecetaProvider;


