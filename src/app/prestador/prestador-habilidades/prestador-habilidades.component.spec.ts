import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadorHabilidadesComponent } from './prestador-habilidades.component';

describe('PrestadorHabilidadesComponent', () => {
  let component: PrestadorHabilidadesComponent;
  let fixture: ComponentFixture<PrestadorHabilidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestadorHabilidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestadorHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
