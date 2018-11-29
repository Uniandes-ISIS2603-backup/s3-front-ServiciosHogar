import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {DatePipe} from '@angular/common';
import {Router, ActivatedRoute} from '@angular/router';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

import {PrestadorService} from '../prestador.service';
import {ServicioService} from '../../servicio/servicio.service';

import {PrestadorDetail} from '../prestador-detail';
import {Servicio} from '../../servicio/servicio';

@Component({
    selector: 'app-prestador-edit',
    templateUrl: './prestador-edit.component.html',
    styleUrls: ['./prestador-edit.component.css'],
    providers: [DatePipe]
})
export class PrestadorEditComponent implements OnInit {

    /**
    * The constructor of the component
    * @param prestadorService The prestador service which communicates with the API
    * @param servicioService The servicio service which communicates with the API
    * @param toastrService The toastr to show messages to the user
    * @param router The router which is needed to know when the component needs to reload
    * @param route The route which helps to retrieves the id of the prestador to be shown
    */
    constructor(
        private dp: DatePipe,
        private prestadorService: PrestadorService,
        private servicioService: ServicioService,
        private toastrService: ToastrService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    model: any;
    /**
    * The prestador which will be updated
    */
    prestador: PrestadorDetail
    
    @Input()
    prestador_id: number;
    /**
    * The list of every servicio in the PrestadorStore
    */
    servicios: Servicio[];


    /**
    * Retrieves the information of the prestador which will be updated
    */
    getPrestador(): void {
        this.prestadorService.getPrestadorDetail(this.prestador_id).subscribe(prestador => {
            this.prestador = prestador;
            this.servicios = prestador.servicios;
        });
    }

    /**
    * Cancels the edition of the prestador
    */
    cancelEdition(): void {
        this.toastrService.warning('The prestador wasn\'t edited', 'Prestador edition');
        this.router.navigate(['/prestadores/' + this.prestador.id]);
        window.location.reload();
    }

    addServicio(): void {
        if (this.model != undefined && this.model.id != undefined) {
            this.prestador.servicios.push(this.model);
            for (let i = 0; i < this.servicios.length; i++) {
                if (this.servicios[i].id === this.model.id) {
                    this.servicios.splice(i, 1);
                }
            }
            this.model = new Servicio();
        }

    }

    removeServicio(servicio): void {
        this.servicios.push(servicio);
        for (let i = 0; i < this.prestador.servicios.length; i++) {
            if (this.prestador.servicios[i].id == servicio.id) {
                this.prestador.servicios.splice(i, 1);
            }
        }
    }

    /**
    * This function updates the prestador
    */
    updatePrestador(): void {
        this.prestadorService.updatePrestador(this.prestador)
            .subscribe(() => {
                this.router.navigate(['/prestadores/' + this.prestador.id]);
                this.toastrService.success("The prestador was successfully edited", 'Prestador edition');
            });
        this.router.navigate(['/prestadores/' + this.prestador.id]);
        window.location.reload();
    }

    /**
    * The function which initilizes the component
    */
    ngOnInit() {
        this.prestador_id = +this.route.snapshot.paramMap.get('id');
        this.getPrestador();
        this.model = new Servicio();
    }


}
