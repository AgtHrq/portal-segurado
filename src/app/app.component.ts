import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleAnalyticsService } from 'angular-ga';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{ 

  constructor(private router: Router, private gaService: GoogleAnalyticsService){ 

  }
  
  ngOnInit(){
    this.gaService.configure('UA-133561597-1');
    this.router.events.subscribe(event => {

      if (event instanceof NavigationEnd){

        this.gaService.pageview.emit({ page: event.urlAfterRedirects });
      }
    });
  }
}
