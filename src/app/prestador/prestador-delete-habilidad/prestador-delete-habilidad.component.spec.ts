import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadorDeleteHabilidadComponent } from './prestador-delete-habilidad.component';

describe('PrestadorDeleteHabilidadComponent', () => {
  let component: PrestadorDeleteHabilidadComponent;
  let fixture: ComponentFixture<PrestadorDeleteHabilidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestadorDeleteHabilidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestadorDeleteHabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
