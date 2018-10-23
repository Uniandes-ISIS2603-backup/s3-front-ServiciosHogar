import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

/**
 * Interface con los datos básicos de la habilidad
 */
import {Habilidad} from './habilidad';

const API_URL = "../../assets/"; //Cambio de ruta, ahora está en la carpeta assets donde están los JSON
const habilidades = '/habilidades.json'; //JSON donde está la información de las habilidades

@Injectable()
export class HabilidadService{
    
    /**
     * Constructor del servicio
     * @param http The HttpClient - es necesario para el performance de los requerimientos
     */
    constructor(private http: HttpClient){}
    
    /**
     * Retorna un objeto Observable que contiene una lista de habilidades recuperados del API
     * @returns La lista de habilidades en tiempo real
     */
    getHabilidades(): Observable<Habilidad[]> {
        return this.http.get<Habilidad[]>(API_URL + habilidades);
    }
}

