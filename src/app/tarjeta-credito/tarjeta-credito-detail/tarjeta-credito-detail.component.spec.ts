import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaCreditoDetailComponent } from './tarjeta-credito-detail.component';

describe('TarjetaCreditoDetailComponent', () => {
  let component: TarjetaCreditoDetailComponent;
  let fixture: ComponentFixture<TarjetaCreditoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaCreditoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaCreditoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
