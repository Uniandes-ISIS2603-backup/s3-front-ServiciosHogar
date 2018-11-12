import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { CalificacionListComponent } from '../calificacion/calificacion-list/calificacion-list.component';
import { ClienteListComponent } from '../cliente/cliente-list/cliente-list.component';
import { ClienteDetailComponent } from '../cliente/cliente-detail/cliente-detail.component';
import { ClienteCreateComponent } from '../cliente/cliente-create/cliente-create.component';
import { PrestadorListComponent } from '../prestador/prestador-list/prestador-list.component';
import {PrestadorDetailComponent} from '../prestador/prestador-detail/prestador-detail.component';
import {PrestadorCreateComponent} from '../prestador/prestador-create/prestador-create.component';
import {SolicitudDetailComponent} from '../solicitud/solicitud-detail/solicitud-detail.component';
import {SolicitudCreateComponent} from '../solicitud/solicitud-create/solicitud-create.component';
import {SolicitudEditComponent} from '../solicitud/solicitud-edit/solicitud-edit.component';
import {SolicitudListComponent } from '../solicitud/solicitud-list/solicitud-list.component';
import { FacturaListComponent } from '../factura/factura-list/factura-list.component';
import {FacturaDetailComponent} from '../factura/factura-detail/factura-detail.component';
import { HojaDeVidaListComponent } from '../hoja-de-vida/hoja-de-vida-list/hoja-de-vida-list.component';
import { ReferenciaListComponent } from '../referencia/referencia-list/referencia-list.component';
import { TarjetaCreditoListComponent } from '../tarjeta-credito/tarjeta-credito-list/tarjeta-credito-list.component';


const routes: Routes = [

    {
        path: 'prestadores',
        children: [
            {
                path: 'list',
                component: PrestadorListComponent
            },
            {
                path: ':id',
                component: PrestadorDetailComponent,
                runGuardsAndResolvers: 'always'
            },
            {
                path: 'add',
                component: PrestadorCreateComponent,
                runGuardsAndResolvers: 'always'
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
                path: 'add',
                component: ClienteCreateComponent,
                runGuardsAndResolvers : 'always'
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
            },
            {
                path: 'id',
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
            },
            {
                path: 'referencias',
                component: ReferenciaListComponent
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
        path: 'solicitudes',
        children: [
            {
                path: 'list',
                component: SolicitudListComponent
            },
            {
                path: 'add',
                component: SolicitudCreateComponent,
                canActivate: [NgxPermissionsGuard]
            },
            {
                path: ':id/edit',
                component: SolicitudEditComponent,
                canActivate: [NgxPermissionsGuard]
            },
            {
                path: ':id',
                component: SolicitudDetailComponent,
                runGuardsAndResolvers: 'always'
            }
        ]
    },
    {
        path: 'tarjetascredito',
        children: [
            {
                path: 'list',
                component: TarjetaCreditoListComponent
            },
            {
                path: 'id',
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
