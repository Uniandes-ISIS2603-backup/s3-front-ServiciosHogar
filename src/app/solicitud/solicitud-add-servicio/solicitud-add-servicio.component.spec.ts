import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudAddServicioComponent } from './solicitud-add-servicio.component';

describe('SolicitudAddServicioComponent', () => {
  let component: SolicitudAddServicioComponent;
  let fixture: ComponentFixture<SolicitudAddServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudAddServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudAddServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
