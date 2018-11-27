import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadorAddHojaDeVidaComponent } from './prestador-add-hojaDeVida.component';

describe('PrestadorAddHojaDeVidaComponent', () => {
  let component: PrestadorAddHojaDeVidaComponent;
  let fixture: ComponentFixture<PrestadorAddHojaDeVidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestadorAddHojaDeVidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestadorAddHojaDeVidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
