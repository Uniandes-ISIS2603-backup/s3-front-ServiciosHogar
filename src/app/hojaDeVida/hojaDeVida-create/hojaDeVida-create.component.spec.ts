import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HojaDeVidaCreateComponent } from './hojaDeVida-create.component';

describe('HojaDeVidaCreateComponent', () => {
  let component: HojaDeVidaCreateComponent;
  let fixture: ComponentFixture<HojaDeVidaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HojaDeVidaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HojaDeVidaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
