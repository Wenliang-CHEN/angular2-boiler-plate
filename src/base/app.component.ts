import { Component, View }       from 'angular2/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from '../auth/login.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterLink, Router } from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AccessService} from '../service/access.service';


@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>`,
  providers: [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    AccessService
  ],
  directives: [ ROUTER_DIRECTIVES],
})


@RouteConfig([
  { path: 'dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
  { path: 'login', name:'Login', component: LoginComponent },
])

export class AppComponent {
  title:string;

  constructor(public router: Router) {
    this.title = 'App';
  }
}
