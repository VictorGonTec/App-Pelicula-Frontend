import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { urlCines } from "../utils/endpoint";
import MostrarErrores from "../utils/MostrarErrores";
import { cineCreacionDTO } from "./cine.models";
import FormularioCine from "./FormularioCine";


export default function CrearCines() {

    const history = useNavigate();
    const [errores, setErrores] = useState<string[]>([]);

    async function crear(cine: cineCreacionDTO){
        try{
            await axios.post(urlCines, cine);
            history('/cines');
        } 
        catch(error){
            setErrores(error.response.data);
        }
    }

    return (
        <>
            <h3>Crear cine</h3>
            <MostrarErrores errores={errores} />
            <FormularioCine
                modelo={{nombre: ''}}
                onSubmit={async valores => await crear(valores)}
            />
        </>

    )
}