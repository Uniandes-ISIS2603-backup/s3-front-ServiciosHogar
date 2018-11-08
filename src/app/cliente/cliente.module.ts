import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteService } from './cliente.service';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [ClienteListComponent, ClienteDetailComponent, ClienteCreateComponent],
  providers: [ClienteService],
  exports: [ClienteListComponent, ClienteDetailComponent, ClienteCreateComponent ]
})
export class ClienteModule { }
