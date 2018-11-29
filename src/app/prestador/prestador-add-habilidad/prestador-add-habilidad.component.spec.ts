import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadorAddHabilidadComponent } from './prestador-add-habilidad.component';

describe('PrestadorAddHabilidadComponent', () => {
  let component: PrestadorAddHabilidadComponent;
  let fixture: ComponentFixture<PrestadorAddHabilidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestadorAddHabilidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestadorAddHabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
