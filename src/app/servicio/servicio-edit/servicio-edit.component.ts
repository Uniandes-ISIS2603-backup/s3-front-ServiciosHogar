import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {ServicioService} from '../servicio.service';
import {ServicioDetail} from '../servicio-detail';


@Component({
    selector: 'app-servicio-edit',
    templateUrl: './servicio-edit.component.html',
    styleUrls: ['./servicio-edit.component.css']
})
export class ServicioEditComponent implements OnInit {

    /**
    * The component's constructor
    * @param servicioService The servicio's service
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private servicioService: ServicioService,
        private toastrService: ToastrService
    ) {}

    /**
    * The id of the servicio that the user wants to edit
    * This is passed as a parameter by the parent component
    */
    @Input() servicio_id: number;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an servicio
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new servicio
    */
    @Output() update = new EventEmitter();

    /**
    * The servicio to edit
    */
    servicio: ServicioDetail;

    /**
    * Retrieves the information of the servicio
    */
    getServicio(): void {
        this.servicioService.getServicioDetail(this.servicio_id)
            .subscribe(servicio => {
                this.servicio = servicio;
            });
    }

    /**
    * Updates the servicio's information
    */
    editServicio(): void {
        this.servicioService.updateServicio(this.servicio)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("The servicio's information was updated", "Servicio edition");
            });
    }

    /**
    * Informs the parent component that the user no longer wants to update the servicio
    */
    cancelEdition(): void {
        this.cancel.emit();
    }

    /**
    * The function which initializes the component
    */
    ngOnInit() {
        this.servicio = new ServicioDetail();
        this.getServicio();
    }

    /**
    * The function which is called every time the user chooses to edit a different servicio
    */
    ngOnChanges() {
        this.ngOnInit();
    }
}
