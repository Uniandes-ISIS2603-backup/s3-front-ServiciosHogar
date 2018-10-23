import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadListComponent } from './habilidad-list.component';

describe('HabilidadListComponent', () => {
  let component: HabilidadListComponent;
  let fixture: ComponentFixture<HabilidadListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabilidadListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilidadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
