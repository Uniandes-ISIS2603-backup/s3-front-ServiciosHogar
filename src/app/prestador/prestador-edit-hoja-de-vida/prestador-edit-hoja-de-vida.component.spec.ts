import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadorEditHojaDeVidaComponent } from './prestador-edit-hoja-de-vida.component';

describe('PrestadorEditHojaDeVidaComponent', () => {
  let component: PrestadorEditHojaDeVidaComponent;
  let fixture: ComponentFixture<PrestadorEditHojaDeVidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestadorEditHojaDeVidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestadorEditHojaDeVidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
