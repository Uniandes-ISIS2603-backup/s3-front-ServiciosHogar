import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteAddTarjetaComponent } from './cliente-add-tarjeta.component';

describe('ClienteAddTarjetaComponent', () => {
  let component: ClienteAddTarjetaComponent;
  let fixture: ComponentFixture<ClienteAddTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteAddTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteAddTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
