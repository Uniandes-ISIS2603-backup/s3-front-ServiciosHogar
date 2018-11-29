import {Component, OnInit} from '@angular/core';
import { AuthService } from './auth/auth.service';

import { Router } from '@angular/router';
import { Location } from '@angular/common';

/**
 * The app component. This component is the base of the ServiciosHogar
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    /**
     * The title that appears on the NavBar and the web browser
     */
    title: String;

    route: string;

  constructor(private authService: AuthService, location: Location, router: Router) {
    router.events.subscribe((val) => {
      if(location.path() != ''){
        this.route = location.path();
      } else {
        this.route = 'Home'
      }
    });
  }

  printRole(): void{
    this.authService.printRole();
  }
    /**
     * Assigns a title to the web page
     */
    ngOnInit(): void {
        this.title = "ServiciosHogar";
        this.authService.start();
        this.printRole();
    }

    logout(): void {
        this.authService.logout()
    }

}





