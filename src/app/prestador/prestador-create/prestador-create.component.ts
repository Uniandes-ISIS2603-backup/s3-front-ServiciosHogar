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
    * Constructor for the component
    * @param prestadorService The prestadores services provider
    * @param router The router
    */
    constructor(
        private prestadorService: PrestadorService,
        private router: Router
    ) {}

    /**
    * The new prestador
    */
    prestador: Prestador;

    /**
    * Cancels the creation of the new prestador
    * Redirects to the prestadores list page
    */
    cancelCreation(): void {
        this.router.navigate(['/prestadores/list']);
    }

    /**
    * Creates a new prestador
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
    * This function will initialize the component
    */
    ngOnInit() {
        this.prestador = new Prestador();
    }

}
