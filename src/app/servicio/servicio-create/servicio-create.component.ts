import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {ToastrService} from 'ngx-toastr';

import {ServicioService} from '../servicio.service';

import {Servicio} from '../servicio';

@Component({
    selector: 'app-servicio-create',
    templateUrl: './servicio-create.component.html',
    styleUrls: ['./servicio-create.component.css']
})
export class ServicioCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param servicioService The servicios' services provider
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private servicioService: ServicioService,
        private toastrService: ToastrService
    ) {}

    /**
    * The new servicio
    */
    servicio: Servicio;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an servicio
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new servicio
    */
    @Output() create = new EventEmitter();

    /**
    * Creates a new servicio
    */
    createServicio(): Servicio {
        this.servicioService.createServicio(this.servicio)
            .subscribe((servicio) => {
                this.servicio = servicio;
                this.create.emit();
                this.toastrService.success("The servicio was created", "Servicio creation");
            }, err => {
                this.toastrService.error(err, "Error");
            });
        return this.servicio;
    }

    /**
    * Informs the parent component that the user no longer wants to create an servicio
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.servicio = new Servicio();
    }
}
