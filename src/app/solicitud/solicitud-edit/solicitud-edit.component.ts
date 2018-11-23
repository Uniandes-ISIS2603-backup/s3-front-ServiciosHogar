import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {SolicitudService} from '../solicitud.service';
import {SolicitudDetail} from '../solicitud-detail';


@Component({
    selector: 'app-solicitud-edit',
    templateUrl: './solicitud-edit.component.html',
    styleUrls: ['./solicitud-edit.component.css']
})
export class SolicitudEditComponent implements OnInit {

    /**
    * The component's constructor
    * @param solicitudService The solicitud's service
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private solicitudService: SolicitudService,
        private toastrService: ToastrService
    ) {}

    /**
    * The id of the solicitud that the user wants to edit
    * This is passed as a parameter by the parent component
    */
    @Input() solicitud_id: number;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an solicitud
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new solicitud
    */
    @Output() update = new EventEmitter();

    /**
    * The solicitud to edit
    */
    solicitud: SolicitudDetail;

    /**
    * Retrieves the information of the solicitud
    */
    getSolicitud(): void {
        this.solicitudService.getSolicitudDetail(this.solicitud_id)
            .subscribe(solicitud => {
                this.solicitud = solicitud;
            });
    }

    /**
    * Updates the solicitud's information
    */
    editSolicitud(): void {
        this.solicitudService.updateSolicitud(this.solicitud)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("The solicitud's information was updated", "Solicitud edition");
            });
    }

    /**
    * Informs the parent component that the user no longer wants to update the solicitud
    */
    cancelEdition(): void {
        this.cancel.emit();
    }

    /**
    * The function which initializes the component
    */
    ngOnInit() {
        this.solicitud = new SolicitudDetail();
        this.getSolicitud();
    }

    /**
    * The function which is called every time the user chooses to edit a different solicitud
    */
    ngOnChanges() {
        this.ngOnInit();
    }
}
