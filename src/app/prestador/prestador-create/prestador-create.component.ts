import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {PrestadorService} from '../prestador.service';
import {Prestador} from '../prestador';
import {Servicio} from '../../servicio/servicio';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'app-prestador-create',
    templateUrl: './prestador-create.component.html',
    styleUrls: ['./prestador-create.component.css'],
    providers: [DatePipe]
})
export class PrestadorCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param prestadorService The prestadores' services provider
    * @param servicioService The servicios' services provider
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
    constructor(
        private authService: AuthService,
        private dp: DatePipe,
        private prestadorService: PrestadorService,
        private toastrService: ToastrService,
        private router: Router
    ) {}

    /**
    * The new prestador
    */
    prestador: Prestador;

    /**
    * The list of all the servicios in the PrestadorStore
    */
    servicios: Servicio[];

    /**
    * The servicios of the new prestador
    * This list is passed as a parameter to the child two-list component
    * It is also updated by that child component
    */
    prestadorServicios: Servicio[];

    /**
    * Cancels the creation of the new prestador
    * Redirects to the prestadores' list page
    */
    cancelCreation(): void {
        this.toastrService.warning('The prestador wasn\'t created', 'Prestador creation');
        this.router.navigate(['/prestadores/list']);
    }

    /**
    * Creates a new prestador
    */
    createPrestador(): Prestador {
        this.prestadorService.createPrestador(this.prestador)
            .subscribe(prestador => {
                this.prestador.id = prestador.id;
                this.router.navigate(['/prestadores/' + prestador.id]);
            }, err => {
                this.toastrService.error(err, 'Error');
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
