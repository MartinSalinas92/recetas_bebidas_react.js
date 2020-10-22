import React,{Fragment} from 'react';
import Header from './components/header';
import Formulario from './components/formulario';
import ListaRecetas from './components/ListaReceta';
import CategoriaProvider from './context/categoria.context';

import RecetaProvider from './context/recetas.context';
import ModalProvider from './context/modal.context';



function App() {
  return (

    <CategoriaProvider> 
      <RecetaProvider>
        <ModalProvider>

        

      
      <Header />

        <div className="container mt-5">
          <div className="row">
            <Formulario />


          </div>
          <ListaRecetas/>

        </div>
        </ModalProvider>

        </RecetaProvider>


    </CategoriaProvider>
    
  );
}

export default App;
