import {Navigate} from 'react-router';

export default function RedireccionarALanding(){
  return <Navigate to={{pathname:'/'}}/>
}