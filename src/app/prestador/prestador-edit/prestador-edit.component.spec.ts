import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadorEditComponent } from './prestador-edit.component';

describe('PrestadorEditComponent', () => {
  let component: PrestadorEditComponent;
  let fixture: ComponentFixture<PrestadorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestadorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestadorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
