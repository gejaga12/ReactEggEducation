import { API_RM } from './../constants/Api.constans';

class RickAndMortyService {

    async traerTodosLosPersonajes(){
        const resp = await fetch(API_RM.PERSONAJES());
        //Interceptor
        return resp.json();
    };

    async traerPersonajesPorId(id){
        const resp = await fetch(API_RM.PERSONAJES_BY_ID(id));
        return resp.json();
    };

}

export default new RickAndMortyService();