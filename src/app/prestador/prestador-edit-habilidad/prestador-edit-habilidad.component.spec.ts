import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadorEditHabilidadComponent } from './prestador-edit-habilidad.component';

describe('PrestadorEditHabilidadComponent', () => {
  let component: PrestadorEditHabilidadComponent;
  let fixture: ComponentFixture<PrestadorEditHabilidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestadorEditHabilidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestadorEditHabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
