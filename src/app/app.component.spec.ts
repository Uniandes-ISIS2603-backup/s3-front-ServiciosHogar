import {ComponentFixture, TestBed, async} from '@angular/core/testing';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';

import {PrestadorListComponent} from './prestador/prestador-list/prestador-list.component';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, HttpClientModule],
        declarations: [AppComponent, PrestadorListComponent ],
      providers: [{provide: APP_BASE_HREF, useValue: ''}]
        })
            .compileComponents();
    }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 's3-front-ServiciosHogar'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('s3-front-ServiciosHogar');
  });

//  it('should render title in a h1 tag', () => {
//    const fixture = TestBed.createComponent(AppComponent);
//    fixture.detectChanges();
//    const compiled = fixture.debugElement.nativeElement;
//    expect(compiled.querySelector('h1').textContent).toContain('Welcome to s3-front-ServiciosHogar!');
//  });
  
  it('should render titles in the navbar', async(() => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('#prestadoresTag').textContent).toContain('Prestadores');
    }));
});
