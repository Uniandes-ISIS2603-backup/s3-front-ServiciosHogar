import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PrestadorListComponent } from '../prestador/prestador-list/prestador-list.component';
import { HabilidadListComponent } from '../habilidad/habilidad-list/habilidad-list.component';
import { CalificacionListComponent } from '../calificacion/calificacion-list/calificacion-list.component';
import { ClienteListComponent } from '../cliente/cliente-list/cliente-list.component';
import { FacturaListComponent } from '../factura/factura-list/factura-list.component';
import { HojaDeVidaListComponent } from '../hoja-de-vida/hoja-de-vida-list/hoja-de-vida-list.component';
import { ReferenciaListComponent } from '../referencia/referencia-list/referencia-list.component';
import { ServicioListComponent } from '../servicio/servicio-list/servicio-list.component';
import { SolicitudListComponent } from '../solicitud/solicitud-list/solicitud-list.component';
import { TarjetaCreditoListComponent } from '../tarjeta-credito/tarjeta-credito-list/tarjeta-credito-list.component';
import { SolicitudDetailComponent } from '../solicitud/solicitud-detail/solicitud-detail.component';
import { ClienteDetailComponent } from '../cliente/cliente-detail/cliente-detail.component';

const routes: Routes = [

    {
        path: 'prestadores',
        children: [
            {
                path: 'list',
                component: PrestadorListComponent
            }
        ]
    },
    {
        path: 'habilidades',
        children: [
            {
                path: 'list',
                component: HabilidadListComponent
            }
        ]
    },
    {
        path: 'calificaciones',
        children: [
            {
                path: 'list',
                component: CalificacionListComponent
            }
        ]
    },
    {
        path: 'clientes',
        children: [
            {
                path: 'list',
                component: ClienteListComponent
            },
            {
                path: ':id',
                component: ClienteDetailComponent
            }
        ]
    },
    {
        path: 'facturas',
        children: [
            {
                path: 'list',
                component: FacturaListComponent
            }
        ]
    },
    {
        path: 'hojasdevida',
        children: [
            {
                path: 'list',
                component: HojaDeVidaListComponent
            }
        ]
    },
    {
        path: 'referencias',
        children: [
            {
                path: 'list',
                component: ReferenciaListComponent
            }
        ]
    },
    {
        path: 'servicios',
        children: [
            {
                path: 'list',
                component: ServicioListComponent
            }
        ]
    },
    {
        path: 'solicitudes',
        children: [
            {
                path: 'list',
                component: SolicitudListComponent
            },
            {
                path: ':id',
                component: SolicitudDetailComponent
            }
        ]
    },
    {
        path: 'tarjetascredito',
        children: [
            {
                path: 'list',
                component: TarjetaCreditoListComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
