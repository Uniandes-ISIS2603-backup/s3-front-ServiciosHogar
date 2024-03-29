import { Component, OnInit, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';


import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';
import { ClienteDetail } from '../cliente-detail';
import { ClienteTarjetaComponent } from '../cliente-tarjetas/cliente-tarjeta.component';
import { ClienteAddTarjetaComponent } from '../cliente-add-tarjeta/cliente-add-tarjeta.component';
import { SolicitudDetailComponent } from '../cliente-detail-solicitud/cliente-detail-solicitud.component';
import { Solicitud } from '../solicitud';
import { Tarjeta } from '../tarjeta';

@Component({
    selector: 'app-cliente-detail',
    templateUrl: './cliente-detail.component.html',
    styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit, OnDestroy {

    /**
    * The constructor of the component
    * @param clienteService The cliente service which communicates with the API
    * @param route The route which helps to retrieves the id of the cliente to be shown
    * @param router The router which is needed to know when the component needs to reload
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private clienteService: ClienteService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        //This is added so we can refresh the view when one of the clientes in
        //the "Other clientes" list is clicked
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.ngOnInit();
            }
        });
    }

    /**
    * The cliente's id retrieved from the path
    */
    cliente_id: number;

    solicitud_actual_id: number;

    /**
    * The cliente whose details are shown
    */
    clienteDetail: ClienteDetail;

    /**
    * The other clientes shown in the sidebar
    */
    other_clientes: Cliente[];

    /**
     * Solicitudes del cliente
     */
    solicitudes: Solicitud[];

    /**
     * Tarjetas del cliente
     */
    tarjetas: Tarjeta[];

    /**
    * The suscription which helps to know when a new cliente
    * needs to be loaded
    */
    navigationSubscription;

    showEdit: boolean;

    showAddH: boolean;

    showSolicitudes: boolean;

    showTarjetas: boolean;


    /**
     * The child ClienteTarjetaListComponent
     */
    @ViewChild(SolicitudDetailComponent) solicitudDetailComponent: SolicitudDetailComponent;

    /**
     * The child ClienteTarjetaListComponent
     */
    @ViewChild(ClienteTarjetaComponent) tarjetaListComponent: ClienteTarjetaComponent;

    /**
     * The child ClienteTarjetaListComponent
     */
    @ViewChild(ClienteAddTarjetaComponent) tarjetaAddComponent: ClienteAddTarjetaComponent;


    toggleSolicitud(): void {
        this.solicitudDetailComponent.isCollapsed = !this.solicitudDetailComponent.isCollapsed;
        this.mostrarSolicitudes(this.solicitud_actual_id);
    }

    toggleCreateTarjeta(): void {
        if(this.showAddH == true)
        {
            this.showAddH = false;
        }
        else
        {
            this.showAddH = true;
        }
    }

    toggleCreateSolicitud(): void {
        if(this.showEdit == true)
        {
            this.showEdit = false;
        }
        else
        {
            this.showEdit = true;
        }
    }

    mostrarSolicitudes(id: number): void {
        this.solicitud_actual_id = id;
        console.log(this.solicitud_actual_id);
        this.showTarjetas = false;
        this.showSolicitudes = true;
    }
    
    mostrarTarjetas(): void {
        this.showTarjetas = true;
        this.showSolicitudes = false;
    }

    /**
    * The method which retrieves the details of the cliente that
    * we want to show
    */
    getClienteDetail(): void {
        this.clienteService.getClienteDetail(this.cliente_id)
            .subscribe(clienteDetail => {
                this.clienteDetail = clienteDetail;
                this.solicitudes = clienteDetail.solicitudes;
                this.tarjetas = clienteDetail.tarjetas;
                console.log(this.clienteDetail);
            });
            console.log(this.clienteDetail);
    }

    /**
    * This method retrieves all the clientes in the Servicioshogar to show them in the list
    */
    getOtherClientes(): void {
        this.clienteService.getClientes()
            .subscribe(clientes => {
                this.other_clientes = clientes;
                this.other_clientes = this.other_clientes.filter(cliente => cliente.id !== this.cliente_id);
            });
    }

    /**
    * The method which initilizes the component
    * We need to initialize the cliente and its factura so that
    * they are never considered undefined
    */
    ngOnInit() {
        this.cliente_id = +this.route.snapshot.paramMap.get('id');
        this.clienteDetail = new ClienteDetail();
        this.solicitudes = [];
        this.other_clientes = [];
        this.getClienteDetail();
        this.getOtherClientes();
        this.showEdit = false;
        this.showEdit = true;
        this.showSolicitudes = false;
        this.showTarjetas = false;
    }

    /**
    * This method helps to refresh the view when we need to load another cliente into it
    * when one of the other clientes in the list is clicked
    */
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
}
