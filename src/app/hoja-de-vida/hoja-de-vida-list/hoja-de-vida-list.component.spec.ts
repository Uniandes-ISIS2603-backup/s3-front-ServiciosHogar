import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HojaDeVidaListComponent } from './hoja-de-vida-list.component';

describe('HojaDeVidaListComponent', () => {
  let component: HojaDeVidaListComponent;
  let fixture: ComponentFixture<HojaDeVidaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HojaDeVidaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HojaDeVidaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
