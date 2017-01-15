import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Http, Headers } from 'angular2/http';
import {AccessService} from '../service/access.service';
import {NavigationComponent} from '../navigation/navigation.compoment';
@Component({
  selector: 'my-dashboard',
  templateUrl: '../src/dashboard/dashboard.component.html',
  styleUrls: ['../css/dashboard.component.css'],
  directives: [NavigationComponent]
})
export class DashboardComponent {
  name: string;


  constructor(public router: Router, public http: Http, private _accessChecker: AccessService) {
  }

  ngOnInit(){
    this._accessChecker.checkAccessAndRedirect('viewDashboard', 'Dashboard');
    this.name = localStorage.getItem('name');
  }
}
