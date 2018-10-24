import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

//Se importa la interface con los datos de la calificacion
import {Calificacion} from './calificacion';

//Constantes
const API_URL = "../../assets/"; //Cambio de ruta, ahora está en la carpeta assets donde están los JSON
const calificaciones = '/calificaciones.json'; //JSON donde está la información de las calificaciones

@Injectable({
  providedIn: 'root'
})
export class CalificacionService 
{
    /**
     * Constructor del servicio
     * @param http The HttpClient - es necesario para el performance de los requerimientos
     */
    constructor(private http: HttpClient){}
    
    getCalificaciones(): Observable<Calificacion[]> {
        return this.http.get<Calificacion[]>(API_URL + calificaciones);
    }
 
}
