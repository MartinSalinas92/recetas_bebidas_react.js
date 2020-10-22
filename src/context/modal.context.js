import React,{useState, useEffect,createContext} from 'react';
import axios from 'axios';


//crear context

export const ModalContext=createContext();

//provider

const ModalProvider = (props) => {

    //state del provider
    const[idreceta, guardarIdReceta]=useState(null);

    const[informacion, guardarRecetas]=useState({});


    //ejecutamos el llamado a la api

    useEffect(() => {
        const obtenerReceta= async()=>{
            if(!idreceta) return;

            const url=`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;

            const resultado= await axios.get(url);

            guardarRecetas(resultado.data.drinks[0]);

            console.log(resultado.data.drinks[0]);




        }
        obtenerReceta();
        
    }, [idreceta])


    return (
        
        <ModalContext.Provider

        value={{

            informacion,
            guardarRecetas,
            guardarIdReceta
        }}
        
        >

            {props.children}


        </ModalContext.Provider>



     );
}
 
export default ModalProvider;


