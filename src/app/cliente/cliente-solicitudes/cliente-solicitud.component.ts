import { Component, OnInit, Input, } from '@angular/core';
import { Solicitud } from '../solicitud';
import { Tarjeta } from '../tarjeta';
@Component({
    selector: 'app-cliente-solicitudes',
    templateUrl: './cliente-solicitud.component.html',
})
export class ClienteSolicitudComponent implements OnInit {
    @Input() clienteSolicitudes: Solicitud[];
    @Input() cliente_id: string;

    public isCollapsed = false;

    /**
    * Shows or hides the create component
    */
    showCreate: boolean;

    /**
     * Shows or hides the edit component.
     */
    showEdit: boolean;

    /**
     * The id of the solicitud being edited.
     */
    solicitud_edit_id: number;


    /**
     * The function called when a solicitud is posted to update the solicitud
     */
    updateSolicitudes(solicitudes: Solicitud[]): void {
        this.clienteSolicitudes = solicitudes;
    }

    /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        this.showEdit = false;
        this.showCreate = !this.showCreate!
    }

    /**
    * Shows or hides the create component
    */
    showHideEdit(solicitud_id: number): void {
        if (!this.showEdit || (this.showEdit && solicitud_id != this.solicitud_edit_id)) {
            this.showCreate = false;
            this.showEdit = true;
            this.solicitud_edit_id = solicitud_id;
        }
        else {
            this.showEdit = false;
        }
    }

    updateSolicitud(): void {
        this.showEdit = false;
    }


    ngOnInit() {
        this.showCreate = false;
        this.showEdit = false;
    }
}