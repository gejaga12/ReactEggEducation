//servicio que es una capa especializada en comunicarse con apis
import { API_RM } from './../constants/Api.constans';

class RickAndMortyService {

    async traerTodosLosPersonajes(){
        const resp = await fetch(API_RM.PERSONAJES()); //API_RM.PERSONAJES() es una funcion, va con ()
        return resp.json(); //si no lo convierto a json nos trae el response y puedo ver el status, body, etc
    };

    async traerPersonajesPorId(id){
        const resp = await fetch(API_RM.PERSONAJES_BY_ID(id)); //API_RM.PERSONAJES_BY_ID() es una funcion, va con ()
        return resp.json();
    };

}

export default new RickAndMortyService();