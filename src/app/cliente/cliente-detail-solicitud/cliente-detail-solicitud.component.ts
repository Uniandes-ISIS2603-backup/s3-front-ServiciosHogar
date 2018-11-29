import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Solicitud} from '../solicitud';
import {SolicitudDetail} from '../solicitud-detail';
import {ClienteService} from '../cliente.service';
import { Cliente } from '../../cliente/cliente';

@Component({
    selector: 'app-solicitud-detail',
    templateUrl: './cliente-detail-solicitud.component.html',
    styleUrls: ['./cliente-detail-solicitud.component.css']
})
export class SolicitudDetailComponent implements OnInit {

    /**
    * The component's constructor
    * @param clienteService The cliente's service
    * @param route The route element which helps to obtain the solicitud's id
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private clienteService: ClienteService,
        private route: ActivatedRoute
    ) { }
    
    /**
    * The cliente's id
    */
   @Input() cliente_id: number;

    /**
    * The solicitud whose details we want to show
    */
    solicitudDetail: SolicitudDetail;
    
    solicitud: Solicitud;

    /**
    * The solicitud's id retrieved from the address
    */
   @Input() solicitud_id: number;

       /**
     * Shows or hides the edit component.
     */
    showEdit: boolean;

    public isCollapsed = false;
    
    /**
    * The method which retrieves the servicios of an solicitud
    */
    getSolicitudDetail(): void {
        this.clienteService.getSolicitudDetail(this.cliente_id,this.solicitud_id)
            .subscribe(solicitudDetail => {
                this.solicitudDetail = solicitudDetail
            });
    }

    /**
    * The method which initializes the component
    * We need to initialize the solicitud so it is never considered as undefined
    */
    ngOnInit() {
        this.solicitudDetail = new SolicitudDetail();
        this.getSolicitudDetail();
    }

}
