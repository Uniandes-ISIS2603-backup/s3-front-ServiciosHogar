import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';


import {SolicitudService} from '../solicitud.service';
import {Solicitud} from '../solicitud';
import {SolicitudDetail} from '../solicitud-detail';
import {SolicitudServicioComponent} from '../solicitud-servicios/solicitud-servicio.component';
import {SolicitudAddServicioComponent} from '../solicitud-add-servicio/solicitud-add-servicio.component';

@Component({
    selector: 'app-solicitud-detail',
    templateUrl: './solicitud-detail.component.html',
    styleUrls: ['./solicitud-detail.component.css']
})
export class SolicitudDetailComponent implements OnInit, OnDestroy {

    /**
    * The constructor of the component
    * @param solicitudService The solicitud service which communicates with the API
    * @param route The route which helps to retrieves the id of the solicitud to be shown
    * @param router The router which is needed to know when the component needs to reload
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private solicitudService: SolicitudService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        // This is added so we can refresh the view when one of the solicitudes in
        // the "Other solicitudes" list is clicked
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.ngOnInit();
            }
        });
    }

    /**
    * The solicitud's id retrieved from the path
    */
    solicitud_id: number;

    /**
    * The solicitud whose details are shown
    */
    solicitudDetail: SolicitudDetail;

    /**
    * The other solicitudes shown in the sidebar
    */
    other_solicitudes: Solicitud[];

    /**
    * The suscription which helps to know when a new solicitud
    * needs to be loaded
    */
    navigationSubscription;

    showEdit: boolean;

    /**
     * The child SolicitudServicioListComponent
     */
    @ViewChild(SolicitudServicioComponent) servicioListComponent: SolicitudServicioComponent;

    /**
     * The child SolicitudServicioListComponent
     */
    @ViewChild(SolicitudAddServicioComponent) servicioAddComponent: SolicitudAddServicioComponent;

    toggleServicios(): void {
        if (this.servicioAddComponent.isCollapsed == false) {
            this.servicioAddComponent.isCollapsed = true;
        }
        this.servicioListComponent.isCollapsed = !this.servicioListComponent.isCollapsed;
    }

    toggleCreateServicio(): void {
        if (this.servicioListComponent.isCollapsed == false) {
            this.servicioListComponent.isCollapsed = true;
        }
        this.servicioAddComponent.isCollapsed = !this.servicioAddComponent.isCollapsed;
    }


    /**
    * The method which retrieves the details of the solicitud that
    * we want to show
    */
    getSolicitudDetail(): void {
        this.solicitudService.getSolicitudDetail(this.solicitud_id)
            .subscribe(solicitudDetail => {
                this.solicitudDetail = solicitudDetail;
            });
    }

    /**
    * This method retrieves all the solicitudes in the Solicitudestore to show them in the list
    */
    getOtherSolicitudes(): void {
        this.solicitudService.getSolicitudes()
            .subscribe(solicitudes => {
                this.other_solicitudes = solicitudes;
                this.other_solicitudes = this.other_solicitudes.filter(solicitud => solicitud.id !== this.solicitud_id);
            });
    }

    /**
     * The function called when a servicio is posted, so that the child component can refresh the list
     */
    updateServicios(): void {
        this.getSolicitudDetail();
        this.servicioListComponent.updateServicios(this.solicitudDetail.servicios);
        this.servicioListComponent.isCollapsed = false;
        this.servicioAddComponent.isCollapsed = true;
    }

    /**
    * The method which initilizes the component
    * We need to initialize the solicitud and its editorial so that
    * they are never considered undefined
    */
    ngOnInit() {
        this.solicitud_id = +this.route.snapshot.paramMap.get('id');
        this.solicitudDetail = new SolicitudDetail();
        this.getSolicitudDetail();
        this.getOtherSolicitudes();
        this.showEdit = true;
    }

    /**
    * This method helps to refresh the view when we need to load another solicitud into it
    * when one of the other solicitudes in the list is clicked
    */
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
}
