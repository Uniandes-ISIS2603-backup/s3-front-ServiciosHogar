import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciaListComponent } from './referencia-list.component';

describe('ReferenciaListComponent', () => {
  let component: ReferenciaListComponent;
  let fixture: ComponentFixture<ReferenciaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenciaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenciaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
