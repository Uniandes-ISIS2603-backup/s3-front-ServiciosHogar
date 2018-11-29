import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClienteCreateComponent } from './cliente-create.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AuthModule } from '../../auth/auth.module';



@NgModule({
    imports: [AuthModule, FormsModule, CommonModule, BrowserModule, AppRoutingModule, HttpClientModule, NgbModule,
        NgxPermissionsModule.forRoot(),
        NgxPermissionsModule,],
    declarations: [ClienteCreateComponent],
    exports: [ClienteCreateComponent,
        CommonModule, FormsModule]
})
export class SharedModule { }