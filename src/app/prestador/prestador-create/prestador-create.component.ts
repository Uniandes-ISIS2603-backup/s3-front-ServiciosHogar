import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {PrestadorService} from '../prestador.service';
import {Prestador} from '../prestador';

@Component({
    selector: 'app-prestador-create',
    templateUrl: './prestador-create.component.html',
    styleUrls: ['./prestador-create.component.css']
})
export class PrestadorCreateComponent implements OnInit {

    /**
    * Constructor del componente
    * @param prestadorService El prestador de servicios de prestadores
    * @param router El router
    */
    constructor(
        private prestadorService: PrestadorService,
        private router: Router
    ) {}

    /**
    * El nuevo prestador
    */
    prestador: Prestador;

    /**
    * Cancela la creación del nuevo prestador
    * Redirige a la página de la lista de prestadores
    */
    cancelCreation(): void {
        this.router.navigate(['/prestadores/list']);
    }

    /**
    * Crea un nuevo prestador
    */
    createPrestadors(): Prestador {
        this.prestadorService.createPrestador(this.prestador)
            .subscribe(prestador => {
                this.prestador.id = prestador.id;
                this.router.navigate(['/prestadores/' + prestador.id]);
            });
        return this.prestador;
    }

    /**
    * Esta función inicializará el componente
    */
    ngOnInit() {
        this.prestador = new Prestador();
    }

}
