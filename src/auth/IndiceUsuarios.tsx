import axios from "axios";
import Swal from "sweetalert2";
import Button from "../utils/Button";
import Confirmar from "../utils/Confirmar";
import { urlCuentas } from "../utils/endpoint";
import IndiceEntidad from "../utils/IndiceEntidad";
import { usuarioDTO } from "./auth.model";

export default function IndiceUsuarios(){

  async function hacerAdmin(id:string){
    await editarAdmin(`${urlCuentas}/hacerAdmin`,id);
  }

  async function removerAdmin(id:string){
    await editarAdmin(`${urlCuentas}/removerAdmin`,id);
  }

  async function editarAdmin(url:string,id:string){
    await axios.post(url,JSON.stringify(id),
      {
        headers:{'Content-Type':'application/json'}
      }
    )
    Swal.fire({
      title: 'Exito',
      text: 'Operacion realizada con exito',
      icon: 'success'
    })
  }
  return(
    <>
      <IndiceEntidad<usuarioDTO>
        url={`${urlCuentas}/listadoUsuarios`}
        titulo="Usuarios"
        >
          {usuarios => <>
            <thead>
              <tr>
                <th></th>
                <th>Nombre</th>
              </tr>
            </thead>
            <tbody>
              {usuarios?.map(usuario => <tr key={usuario.id}>
                <td>
                  <Button disabled={false} 
                  onClick={()=>Confirmar(()=>hacerAdmin(usuario.id),
                  `¿Desea hacer a ${usuario.email} admin?`,'Realizar')}>
                    Hacer Admin</Button>
                  <Button className="btn btn-danger"
                  style={{marginLeft:"1rem"}}
                  disabled={false} 
                  onClick={()=>Confirmar(()=>removerAdmin(usuario.id),
                    `¿Desea remover a ${usuario.email} como admin?`,'Realizar')}>Remover Admin</Button>
                </td>
                <td>
                  {usuario.email}
                </td>
              </tr>)}
            </tbody>
          </>}

      </IndiceEntidad>
    </>
  )
}