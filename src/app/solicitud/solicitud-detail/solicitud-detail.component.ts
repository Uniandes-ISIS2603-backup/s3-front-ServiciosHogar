import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SolicitudDetail } from '../solicitud-detail';
import { SolicitudService } from '../solicitud.service';


@Component({
    selector: 'app-solicitud-detail',
    templateUrl: './solicitud-detail.component.html',
    styleUrls: ['./solicitud-detail.component.css']
})
export class SolicitudDetailComponent implements OnInit {

    /**
    * The solicitud
    */
    solicitudDetail: SolicitudDetail;
    /**
    * Constructor for the component
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param solicitudService The solicitud's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private route: ActivatedRoute,
        private solicitudService: SolicitudService
    ) { }

    /**
    * El id del solicitud que viene en el path get .../solicituds/solicitud_id
    */
    solicitud_id: number;
    /**
    * The method which obtains the solicitud whose details we want to show
    */
    getSolicitudDetail(): void {
        this.solicitudService.getSolicitudDetail(this.solicitud_id)
            .subscribe(solicitudDetail => {
                this.solicitudDetail = solicitudDetail;
            });
    }

    /**
    * The method which initializes the component.
    * We need to create the solicitud so it is never considered as undefined
    */
    ngOnInit() {
        this.solicitud_id = +this.route.snapshot.paramMap.get('id');
        if (this.solicitud_id){
        this.solicitudDetail = new SolicitudDetail();
        this.getSolicitudDetail();
        }
    }
}
