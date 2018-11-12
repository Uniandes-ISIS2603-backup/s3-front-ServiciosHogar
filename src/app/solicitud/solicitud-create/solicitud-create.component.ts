import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {SolicitudService} from '../solicitud.service';
import {Solicitud} from '../solicitud';

@Component({
    selector: 'app-solicitud-create',
    templateUrl: './solicitud-create.component.html',
    styleUrls: ['./solicitud-create.component.css'],
    providers: [DatePipe]
})
export class SolicitudCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param solicitudService The solicitudes' services provider
    * @param authorService The authors' services provider
    * @param editorialService The editorials' services provider
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
    constructor(
        private dp: DatePipe,
        private solicitudService: SolicitudService,
        private toastrService: ToastrService,
        private router: Router
    ) {}

    /**
    * The new solicitud
    */
    solicitud: Solicitud;

    /**
    * Cancels the creation of the new solicitud
    * Redirects to the solicitudes' list page
    */
    cancelCreation(): void {
        this.toastrService.warning('The solicitud wasn\'t created', 'Solicitud creation');
        this.router.navigate(['/solicitudes/list']);
    }

    /**
    * Creates a new solicitud
    */
    createSolicitud(): Solicitud {
        const dateB: Date = new Date(this.solicitud.fecha.year,
            this.solicitud.fecha.month - 1, this.solicitud.fecha.day);
        this.solicitud.fecha = this.dp.transform(dateB, 'yyyy-MM-dd');
        this.solicitudService.createSolicitud(this.solicitud)
            .subscribe(solicitud => {
                this.solicitud.id = solicitud.id;
                this.router.navigate(['/solicitudes/' + solicitud.id]);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        console.log(this.solicitud);
        return this.solicitud;
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.solicitud = new Solicitud();
    }

}
