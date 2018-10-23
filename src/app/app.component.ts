import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    
    /**
     * Título que va  a parecer en la Barra de Navegacion en el buscador
     */
    title: String;

    /**
     * Asigan el título de la página web
     */
    ngOnInit(): void {
        this.title = "s3-front-ServiciosHogar";
    }

    /**
     * @ignore
     */
    constructor() {}
}
