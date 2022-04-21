import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { urlGeneros } from "../utils/endpoint";
import MostrarErrores from "../utils/MostrarErrores";
import FormularioGeneros from "./FormularioGeneros";
import { generoCreacionDTO } from "./generos.model";

export default function CrearGenero() {
  const history = useNavigate();
  const [errores, setErrores] = useState<string[]>([]);

 async function crear(genero: generoCreacionDTO){
     try{
         await axios.post(urlGeneros, genero);
         history('/generos');
     }
     catch (error){
         setErrores(error.response.data);
     }
 }

 return (
     <>
         <h3>Crear Género</h3>
         <MostrarErrores errores={errores} />
         <FormularioGeneros modelo={{nombre: ''}} 
              onSubmit={async valores => {
                 await crear(valores);
              }}
         />
     </>
 )
}