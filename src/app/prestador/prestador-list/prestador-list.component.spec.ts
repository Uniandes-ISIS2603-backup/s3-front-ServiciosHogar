import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadorListComponent } from './prestador-list.component';

describe('PrestadorListComponent', () => {
  let component: PrestadorListComponent;
  let fixture: ComponentFixture<PrestadorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestadorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestadorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
