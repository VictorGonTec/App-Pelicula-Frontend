import CrearActores from "./actores/CrearActores";
import EditarActores from "./actores/EditarActores";
import IndiceActores from "./actores/IndiceActores";
import IndiceUsuarios from "./auth/IndiceUsuarios";
import Login from "./auth/Login";
import Registro from "./auth/Registro";
import CrearCine from "./cines/CrearCine";
import EditarCine from "./cines/EditarCine";
import IndiceCine from "./cines/IndiceCine";
import CrearGenero from "./generos/CrearGenero";
import EditarGenero from "./generos/EditarGenero";
import IndiceGeneros from "./generos/IndiceGeneros";
import LandingPage from "./LandingPage";
import CrearPeliculas from "./peliculas/CrearPelicula";
import DetallePelicula from "./peliculas/DetallePelicula";
import EditarPeliculas from "./peliculas/EditarPelicula";
import FiltroPeliculas from "./peliculas/FiltroPeliculas";
import RedireccionarALanding from "./utils/RedireccionarALanding";

const rutas=[
  {path: '/generos/crear', componente: CrearGenero,esAdmin:true},
    {path: '/generos/editar/:id(\\d+)', componente: EditarGenero,esAdmin:true},
    {path: '/generos', componente: IndiceGeneros, esAdmin:true},

    {path: '/actores/crear', componente: CrearActores,esAdmin:true},
    {path: '/actores/editar/:id(\\d+)', componente: EditarActores,esAdmin:true},
    {path: '/actores', componente: IndiceActores,esAdmin:true },

    {path: '/cines/crear', componente: CrearCine,esAdmin:true},
    {path: '/cines/editar/:id(\\d+)', componente: EditarCine,esAdmin:true},
    {path: '/cines', componente: IndiceCine, esAdmin:true},

    {path: '/pelicula/:id(\\d+)', componente: DetallePelicula},
    {path: '/peliculas/crear', componente: CrearPeliculas,esAdmin:true},
    {path: '/peliculas/editar/:id(\\d+)', componente: EditarPeliculas,esAdmin:true},
    {path: '/peliculas/filtrar', componente: FiltroPeliculas},    

    {path: '/registro',componente: Registro},
    {path: '/login',componente: Login},
    {path: '/usuarios',componente: IndiceUsuarios, esAdmin:true},

    {path: '/', componente: LandingPage, exact: true},
    {path: '*', componente: RedireccionarALanding}
];

export default rutas;