import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadorDetailComponent } from './prestador-detail.component';

describe('PrestadorDetailComponent', () => {
  let component: PrestadorDetailComponent;
  let fixture: ComponentFixture<PrestadorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestadorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestadorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
