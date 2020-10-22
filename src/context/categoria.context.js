import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

//Crear el context
export const CategoriaContext= createContext();

//Provider es donde se encuentran las funciones y el state

const CategoriaProvider = (props) => {
    //crear el state context

    const [categorias, guardarCategoria]= useState([]);

    //ejecutamos el llamado a la api
    useEffect(() => {
        const obtenerCategorias= async()=>{
            const url='https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

            const categorias= await axios.get(url);

            guardarCategoria(categorias.data.drinks);
        }
        obtenerCategorias();
    }, []);





    return ( 

        <CategoriaContext.Provider

            value={{

                categorias
              
            }}
        
        
        >

            {props.children}


        </CategoriaContext.Provider>





     );
}
 
export default CategoriaProvider;