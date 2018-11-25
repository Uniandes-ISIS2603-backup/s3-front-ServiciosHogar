import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { SolicitudListComponent } from '../solicitud/solicitud-list/solicitud-list.component';
import { SolicitudDetailComponent } from '../solicitud/solicitud-detail/solicitud-detail.component';
import { SolicitudCreateComponent } from '../solicitud/solicitud-create/solicitud-create.component';
import { ServicioListComponent } from '../servicio/servicio-list/servicio-list.component';
import { ServicioDetailComponent } from '../servicio/servicio-detail/servicio-detail.component';
import { PrestadorListComponent } from '../prestador/prestador-list/prestador-list.component';
import { PrestadorDetailComponent } from '../prestador/prestador-detail/prestador-detail.component';
import { PrestadorCreateComponent } from '../prestador/prestador-create/prestador-create.component';
import { ClienteListComponent } from '../cliente/cliente-list/cliente-list.component';
import { ClienteDetailComponent } from '../cliente/cliente-detail/cliente-detail.component';
import { ClienteCreateComponent } from '../cliente/cliente-create/cliente-create.component';
import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';

const routes: Routes = [

    {
        path: 'clientes',
        children: [
            {
                path: 'list',
                component: ClienteListComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN']
                    }
                }
            },
            {
                path: ':id',
                component: ClienteDetailComponent,
                runGuardsAndResolvers: 'always'
            },
            {
                path: 'add',
                component: ClienteCreateComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN', 'CLIENT']
                    }
                }
            }
        ]
    },
    {
        path: 'solicitudes',
        children: [
            {
                path: 'list',
                component: SolicitudListComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['CLIENT']
                    }
                }
            },
            {
                path: ':id',
                component: SolicitudDetailComponent,
                runGuardsAndResolvers: 'always'
            },
            {
                path: 'add',
                component: SolicitudCreateComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['CLIENT']
                    }
                }
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
                path: ':id',
                component: PrestadorDetailComponent,
                runGuardsAndResolvers: 'always'
            },
            {
                path: 'add',
                component: PrestadorCreateComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN', 'PRESTADOR']
                    }
                }
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
