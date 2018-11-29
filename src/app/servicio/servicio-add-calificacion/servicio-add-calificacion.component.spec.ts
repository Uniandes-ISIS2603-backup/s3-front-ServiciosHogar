import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioAddCalificacionComponent } from './servicio-add-calificacion.component';

describe('ServicioAddCalificacionComponent', () => {
  let component: ServicioAddCalificacionComponent;
  let fixture: ComponentFixture<ServicioAddCalificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioAddCalificacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioAddCalificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
