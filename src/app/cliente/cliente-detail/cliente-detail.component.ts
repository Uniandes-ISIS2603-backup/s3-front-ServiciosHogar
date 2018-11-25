import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';


import {ClienteService} from '../cliente.service';
import {Cliente} from '../cliente';
import {ClienteDetail} from '../cliente-detail';
import {ClienteTarjetaComponent} from '../cliente-tarjetas/cliente-tarjeta.component';
import {ClienteAddTarjetaComponent} from '../cliente-add-tarjeta/cliente-add-tarjeta.component';

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

    /**
    * The cliente whose details are shown
    */
    clienteDetail: ClienteDetail;

    /**
    * The other clientes shown in the sidebar
    */
    other_clientes: Cliente[];

    /**
    * The suscription which helps to know when a new cliente
    * needs to be loaded
    */
    navigationSubscription;

    showEdit: boolean;

    /**
     * The child ClienteTarjetaListComponent
     */
    @ViewChild(ClienteTarjetaComponent) tarjetaListComponent: ClienteTarjetaComponent;

    /**
     * The child ClienteTarjetaListComponent
     */
    @ViewChild(ClienteAddTarjetaComponent) tarjetaAddComponent: ClienteAddTarjetaComponent;

    toggleTarjetas(): void {
        if (this.tarjetaAddComponent.isCollapsed == false) {
            this.tarjetaAddComponent.isCollapsed = true;
        }
        this.tarjetaListComponent.isCollapsed = !this.tarjetaListComponent.isCollapsed;
    }

    toggleCreateTarjeta(): void {
        if (this.tarjetaListComponent.isCollapsed == false) {
            this.tarjetaListComponent.isCollapsed = true;
        }
        this.tarjetaAddComponent.isCollapsed = !this.tarjetaAddComponent.isCollapsed;
    }


    /**
    * The method which retrieves the details of the cliente that
    * we want to show
    */
    getClienteDetail(): void {
        this.clienteService.getClienteDetail(this.cliente_id)
            .subscribe(clienteDetail => {
                this.clienteDetail = clienteDetail;
            });
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
     * The function called when a tarjeta is posted, so that the child component can refresh the list
     */
    updateTarjetas(): void {
        this.getClienteDetail();
        this.tarjetaListComponent.updateTarjetas(this.clienteDetail.tarjetas);
        this.tarjetaListComponent.isCollapsed = false;
        this.tarjetaAddComponent.isCollapsed = true;
    }

    /**
    * The method which initilizes the component
    * We need to initialize the cliente and its factura so that
    * they are never considered undefined
    */
    ngOnInit() {
        this.cliente_id = +this.route.snapshot.paramMap.get('id');
        this.clienteDetail = new ClienteDetail();
        this.getClienteDetail();
        this.getOtherClientes();
        this.showEdit = true;
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
