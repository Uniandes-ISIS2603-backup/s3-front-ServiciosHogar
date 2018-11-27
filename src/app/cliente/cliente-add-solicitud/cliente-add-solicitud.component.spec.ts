import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteAddSolicitudComponent } from './cliente-add-solicitud.component';

describe('ClienteAddSolicitudComponent', () => {
  let component: ClienteAddSolicitudComponent;
  let fixture: ComponentFixture<ClienteAddSolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteAddSolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteAddSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
