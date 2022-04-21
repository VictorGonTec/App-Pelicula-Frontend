
import EditarEntidad from "../utils/EditarEntidad";
import { urlActores } from "../utils/endpoint";
import { convertirActorAFormData } from "../utils/formDataUtil";
import { actorCreacionDTO, actorDTO } from "./actores.model";
import FormularioActores from "./FormularioActores";


export default function EditarActores(){

  const transformar = (actor:actorDTO)=>{
    return{
      nombre:actor.nombre,
      fotoUrl: actor.foto,
      biografia: actor.biografia,
      fechaNacimiento: new Date(actor.fechaNacimiento)
    }
  }
  return(
    <>
    <EditarEntidad<actorCreacionDTO,actorDTO>
        url={urlActores} urlIndice="/actores" nombreEntidad="Actores"
    
        transformarFormData={convertirActorAFormData}
        transformar={transformar}
      >
      {(entidad,editar)=> 
        <FormularioActores 
          modelo={entidad}
          onSubmit={async valores=>{
          await editar(valores)
        }}
      /> 
      }
    </EditarEntidad>
    </>
  )
}