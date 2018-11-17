import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';


import {Solicitud} from '../solicitud';
import {SolicitudService} from '../solicitud.service';
@Component({
    selector: 'app-solicitud-list',
    templateUrl: './solicitud-list.component.html',
    styleUrls: ['./solicitud-list.component.css']
})
export class SolicitudListComponent implements OnInit {

    /**
    * The list of solicitudes to display
    */
    @Input() solicitudes: Solicitud[];

    /**
    * The component's constructor
    */
    constructor(private solicitudService: SolicitudService, private route: ActivatedRoute) {}

    /**
    * This method retrieves all the solicitudes in the Solicitudestore to show them in the list
    */
    getSolicitudes(): void {
        this.solicitudService.getSolicitudes()
            .subscribe(solicitudes => {
                this.solicitudes = solicitudes;
            });
    }

    /**
    * The method which initializes the component
    */
    ngOnInit() {
            this.getSolicitudes();
    }

}
