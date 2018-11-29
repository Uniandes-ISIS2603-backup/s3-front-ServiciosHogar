import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { ClienteSolicitudComponent } from '../cliente/cliente-solicitudes/cliente-solicitud.component';
import { FacturaDetailComponent } from '../factura/factura-detail/factura-detail.component';
import { FacturaCreateComponent } from '../factura/factura-create/factura-create.component';
import { FacturaListComponent } from '../factura/factura-list/factura-list.component';
import { FacturaEditComponent } from '../factura/factura-edit/factura-edit.component';
import { SolicitudDetailComponent } from '../cliente/cliente-detail-solicitud/cliente-detail-solicitud.component';
import { ClienteAddSolicitudComponent } from '../cliente/cliente-add-solicitud/cliente-add-solicitud.component';
import { ServicioListComponent } from '../servicio/servicio-list/servicio-list.component';
import { ServicioDetailComponent } from '../servicio/servicio-detail/servicio-detail.component';
import { PrestadorListComponent } from '../prestador/prestador-list/prestador-list.component';
import { PrestadorDetailComponent } from '../prestador/prestador-detail/prestador-detail.component';
import { PrestadorCreateComponent } from '../prestador/prestador-create/prestador-create.component';
import { ClienteListComponent } from '../cliente/cliente-list/cliente-list.component';
import { ClienteDetailComponent } from '../cliente/cliente-detail/cliente-detail.component';
import { ClienteCreateComponent } from '../cliente/cliente-create/cliente-create.component';
import { ClienteEditComponent } from '../cliente/cliente-edit/cliente-edit.component';
import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { ClienteTarjetaComponent } from '../cliente/cliente-tarjetas/cliente-tarjeta.component';

const routes: Routes = [

    {
        path: 'clientes',
        children: [
            {
                path: 'list',
                component: ClienteListComponent,
                data: {
                    permissions: {
                        only: ['ADMIN']
                    }
                }
            },
            {
                path: 'add',
                component: ClienteCreateComponent,
                runGuardsAndResolvers: 'always'
            },
            {
                path: ':id/solicitudes',
                children: [
                    {
                        path: 'list',
                        component: ClienteSolicitudComponent,
                        canActivate: [NgxPermissionsGuard]
                    },
                    {
                        path: 'add',
                        component: ClienteAddSolicitudComponent,
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
                path: ':id/edit',
                component: ClienteEditComponent                
            },
            {
                path: ':id',
                component: ClienteDetailComponent,
                runGuardsAndResolvers: 'always'
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
                path: 'add',
                component: FacturaCreateComponent
            },
            {
                path: ':id',
                component: FacturaDetailComponent,
                runGuardsAndResolvers: 'always'
            },
            {
                path: ':id/edit',
                component: FacturaEditComponent
            }
        ]
    },
    {
        path: 'servicios',
        children: [
            {
                path: 'list',
                component: ServicioListComponent
            },
            {
                path: 'add',
                component: ClienteCreateComponent,
                data: {
                    permissions: {
                        only: ['ADMIN', 'CLIENTE']
                    }
                }
            },
            {
                path: ':id',
                component: ServicioDetailComponent,
                runGuardsAndResolvers: 'always'
            }
        ]
    },
    {
        path: 'prestadores',
        children: [
            {
                path: 'list',
                component: PrestadorListComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN']
                    }
                }
            },
            {
                path: 'add',
                component: PrestadorCreateComponent,
                runGuardsAndResolvers: 'always'
            },
            {
                path: ':id',
                component: PrestadorDetailComponent,
                runGuardsAndResolvers: 'always'
            }
        ]
    },
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: AuthLoginComponent,
            },
            {
                path: ':sign-up',
                component: AuthSignUpComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
