import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Referencia } from './referencia';

//Constantes
const API_URL = "../../assets/"; //Cambio de ruta, ahora está en la carpeta assets donde están los JSON
const referencia = '/referencia.json'; //JSON donde está la información de los prestadores


@Injectable({
  providedIn: 'root'
})
export class ReferenciaService {

  constructor(private http: HttpClient) { }
  
    getReferencias(): Observable<Referencia[]>
    {
        return this.http.get<Referencia[]>(API_URL + referencia)
    }
}
