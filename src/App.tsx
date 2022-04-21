import { Routes ,Route } from 'react-router-dom';
import './App.css';
import Menu from './utils/Menu';
import rutas from './route-config'
import configurarValidaciones from './validaciones';
import { useEffect, useState } from 'react';
import AutenticacionContext from './auth/AutenticacionContext';
import { claim } from './auth/auth.model';
import { obtenerClaims } from './auth/manejadorJWT';
import { configurarInterceptor } from './utils/interceptores';

configurarValidaciones();
configurarInterceptor();

function App() {

  const [claims,setclaims]=useState<claim[]>([]);

  useEffect(()=>{
    setclaims(obtenerClaims());
  },[])

  function actualizar(claims:claim[]){
    setclaims(claims);
  }

  function esAdmin(){
    return claims.findIndex(claim=>claim.nombre==="role" && claim.valor==="admin") > -1;
  }

  return (
    <>
    <AutenticacionContext.Provider value={{claims,actualizar}}>
    
        <Menu/>
        <div className="container">
        <Routes>
            {rutas.map(ruta=>
            <Route 
              key={ruta.path} 
              path={ruta.path}
              
              
              element={ruta.esAdmin && !esAdmin() ? <>
                No estas Autorizado par acceder a este componente
              </> : <ruta.componente/>}
            
            />)}
        </Routes>  
        </div> 
      </AutenticacionContext.Provider>
    </>
  );
}

export default App;

