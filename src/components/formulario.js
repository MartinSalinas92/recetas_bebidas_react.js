import React,{useContext, useState} from 'react';
import {CategoriaContext} from '../context/categoria.context';
import{RecetaContext} from '../context/recetas.context';

const Formulario = () => {


    const [busqueda, guardarBusqueda]= useState({
        nombre:'',
        categoria:''


    });

    //context

    const {categorias} = useContext(CategoriaContext);

    const { buscarRecetas,guardarConsultar}= useContext(RecetaContext);



    //console.log(categorias);

    //funcion para leer contenidos

    const obtenerRecetas= e =>{
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    //funcion onSubmit

    const guardarBusquedaReceta= e=>{
        e.preventDefault();

        buscarRecetas(busqueda);
        guardarConsultar(true);

        
    }



   




    return ( 
        
        <form
            className="col-12"
            onSubmit={guardarBusquedaReceta}
        
        >
            <fieldset className="text-center">
                <legend>Buscar bebidas por Categorias</legend>

            </fieldset>
            
        <div className="row mt-5" >
            <div className="col-md-4">
                 <input
                    type="text"
                    name="nombre"
                    className="form-control"
                    placeholder="bebidas"
                    onChange={obtenerRecetas}
            
            
            
            />


         </div>

         <div className="col-md-4">
                <select 
                    className="form-control"
                    name="categoria"
                    onChange={obtenerRecetas}
                
                
                
                >

                <option>Seleccionar Categoria</option>
                {categorias.map(categoria=>(
                    <option
                        key={categoria.strCategory}
                        value={categoria.strCategory}
                    
                    >
                        {categoria.strCategory}


                    </option>

                ))}

                </select>

            </div>

        <div className="col-md-4">
            <input 
            type="submit"
            className="btn btn-danger"
            value="Buscar Recetas"

            
            
            />

        </div>

        </div>

        
            
        
         

        </form> 

        
    );
}
 
export default Formulario;