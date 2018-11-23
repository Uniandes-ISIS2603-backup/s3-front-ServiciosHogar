import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SolicitudService } from '../solicitud.service';
import { Solicitud } from '../solicitud';
import { SolicitudDetail } from '../solicitud-detail';

@Component({
    selector: 'app-solicitud-detail',
    templateUrl: './solicitud-detail.component.html',
    styleUrls: ['./solicitud-detail.component.css']
})
export class SolicitudDetailComponent implements OnInit {

    /**
    * The component's constructor
    * @param solicitudService The solicitud's service
    * @param route The route element which helps to obtain the solicitud's id
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private solicitudService: SolicitudService,
        private route: ActivatedRoute
    ) { }

    /**
    * The solicitud whose details we want to show
    */
    solicitudDetail: SolicitudDetail;



    /**
    * The solicitud's id retrieved from the address
    */
    solicitud_id: number;

    /**
    * The method which retrieves the servicios of an solicitud
    */
    getSolicitudDetail(): void {
        this.solicitudService.getSolicitudDetail(this.solicitud_id)
            .subscribe(solicitudDetail => {
                this.solicitudDetail = solicitudDetail
            });
    }

    /**
    * The method which initializes the component
    * We need to initialize the solicitud so it is never considered as undefined
    */
    ngOnInit() {
        this.solicitud_id = +this.route.snapshot.paramMap.get('id');
        this.solicitudDetail = new SolicitudDetail();
        this.getSolicitudDetail();
    }

}
