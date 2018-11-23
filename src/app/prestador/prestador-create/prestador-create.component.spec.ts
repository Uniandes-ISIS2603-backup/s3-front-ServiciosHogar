import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadorCreateComponent } from './prestador-create.component';

describe('PrestadorCreateComponent', () => {
  let component: PrestadorCreateComponent;
  let fixture: ComponentFixture<PrestadorCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestadorCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestadorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
