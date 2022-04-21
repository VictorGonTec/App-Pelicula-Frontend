import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { urlActores } from "../utils/endpoint";
import { convertirActorAFormData } from "../utils/formDataUtil";
import MostrarErrores from "../utils/MostrarErrores";
import { actorCreacionDTO } from "./actores.model";
import FormularioActores from "./FormularioActores";

export default function CrearActores(){
  const navigate = useNavigate();
  const [errores,setErrores]=useState<string[]>([]);

  async function crear(actor:actorCreacionDTO){
    try{
      const formData = convertirActorAFormData(actor);
      await axios({
        method:'post',
        url:urlActores,
        data:formData,
        headers:{'Content_type': 'multipart/form-data'}
      });
      
      navigate('/actores');
    }
    catch(error){
      setErrores(error.response.data);
    }
  }
  return(
    <>
      <h3>crear actor</h3>
      <MostrarErrores errores={errores}/>
      <FormularioActores
        modelo={{nombre:'',fechaNacimiento:undefined}}
        onSubmit={async valores=>await crear(valores)}
      />
    </>
  )
}