import { useState, useEffect } from "react";
import ListadoPeliculas from './peliculas/ListadoPeliculas';
import axios, { AxiosResponse } from "axios";
import { landingPageDTO } from "./peliculas/pelicula.model";
import { urlPeliculas } from "./utils/endpoint";
import AlertaContext from "./utils/AlertarContext";



export default function LandingPage() {

    const [peliculas, setPeliculas] = useState<landingPageDTO>({})

    useEffect(() => {
       cargarDatos();
    }, [])

    function cargarDatos(){
        axios.get(urlPeliculas)
        .then((respuesta: AxiosResponse<landingPageDTO>)=>{
            setPeliculas(respuesta.data);
        })
    }
    return (
        <>
        <AlertaContext.Provider value={()=>cargarDatos()}>

            <h3>En Cartelera</h3>
            <ListadoPeliculas peliculas={peliculas.enCines} />

            <h3>Próximos Estrenos</h3>
            <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
        </AlertaContext.Provider>
        </>
    )
}