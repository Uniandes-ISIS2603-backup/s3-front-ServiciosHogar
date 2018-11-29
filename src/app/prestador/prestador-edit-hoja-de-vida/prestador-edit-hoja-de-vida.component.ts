import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PrestadorDetail } from '../prestador-detail';
import { HojaDeVida } from '../hojaDeVida';
import { PrestadorService } from '../prestador.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-prestador-edit-hoja-de-vida',
  templateUrl: './prestador-edit-hoja-de-vida.component.html',
  styleUrls: ['./prestador-edit-hoja-de-vida.component.css']
})
export class PrestadorEditHojaDeVidaComponent implements OnInit {

  constructor(
    private authorService: PrestadorService,
    private toastrService: ToastrService,) { }

  @Input()
  prestador: PrestadorDetail;

  @Input()
  hojaDeVida: HojaDeVida;

      /**
    * Updates the information of the author
    */
   editHojaDeVida(): void {
    this.authorService.updateHojaDeVida(this.prestador.id, this.hojaDeVida)
        .subscribe(() => {
            this.toastrService.success("The hoja de vida's information was updated", "Hoja De Vida edition");
            window.location.reload();
        });
}

  ngOnInit() {
    this.hojaDeVida;
  }

}
