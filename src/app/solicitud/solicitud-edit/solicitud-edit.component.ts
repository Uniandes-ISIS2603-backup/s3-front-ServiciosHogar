import {Component, OnInit, ViewChild} from '@angular/core';
import {DatePipe} from '@angular/common';
import {Router, ActivatedRoute} from '@angular/router';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

import {SolicitudService} from '../solicitud.service';

import {SolicitudDetail} from '../solicitud-detail';

@Component({
    selector: 'app-solicitud-edit',
    templateUrl: './solicitud-edit.component.html',
    styleUrls: ['./solicitud-edit.component.css'],
    providers: [DatePipe]
})
export class SolicitudEditComponent implements OnInit {

    /**
    * The constructor of the component
    * @param solicitudService The solicitud service which communicates with the API
    * @param authorService The author service which communicates with the API
    * @param editorialService The editorial service which communicates with the API
    * @param toastrService The toastr to show messages to the user
    * @param router The router which is needed to know when the component needs to reload
    * @param route The route which helps to retrieves the id of the solicitud to be shown
    */
    constructor(
        private dp: DatePipe,
        private solicitudService: SolicitudService,
        private toastrService: ToastrService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    model: any;
    /**
    * The solicitud which will be updated
    */
    solicitud: SolicitudDetail;

    solicitud_id: number;

    @ViewChild('instance') instance: NgbTypeahead;
    focus$ = new Subject<string>();
    click$ = new Subject<string>();

    formatter = (x: {name: string}) => x.name;

    /**
    * Retrieves the information of the solicitud which will be updated
    */
    getSolicitud(): void {
        this.solicitudService.getSolicitudDetail(this.solicitud_id).subscribe(solicitud => {
            solicitud.fecha = solicitud.fecha.substring(0, 10);
            var date = {
                day: +solicitud.fecha.split('-')[2],
                month: +solicitud.fecha.split('-')[1],
                year: +solicitud.fecha.split('-')[0]
            };
            this.solicitud = solicitud;
            this.solicitud.fecha = date;
        });
    }

    /**
    * Cancels the edition of the solicitud
    */
    cancelEdition(): void {
        this.toastrService.warning('The solicitud wasn\'t edited', 'Solicitud edition');
        this.router.navigate(['/solicitudes/' + this.solicitud.id]);
    }

    /**
    * This function updates the solicitud
    */
    updateSolicitud(): void {
            let dateB: Date = new Date(this.solicitud.fecha.year,
                this.solicitud.fecha.month - 1, this.solicitud.fecha.day);
            this.solicitud.fecha = this.dp.transform(dateB, 'yyyy-MM-dd');
            this.solicitudService.updateSolicitud(this.solicitud)
                .subscribe(() => {
                    this.router.navigate(['/solicitudes/' + this.solicitud.id]);
                    this.toastrService.success('The solicitud was successfully edited', 'Solicitud edition');
                });
    }

    /**
    * The function which initilizes the component
    */
    ngOnInit() {
        this.solicitud_id = +this.route.snapshot.paramMap.get('id');
        this.getSolicitud();
    }


}
