import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HojaDeVidaEditComponent } from './hojaDeVida-edit.component';

describe('HojaDeVidaEditComponent', () => {
  let component: HojaDeVidaEditComponent;
  let fixture: ComponentFixture<HojaDeVidaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HojaDeVidaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HojaDeVidaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
