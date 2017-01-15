import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Http, Headers } from 'angular2/http';
import {AccessService} from '../service/access.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: '../views/dashboard.component.html',
  styleUrls: ['../css/dashboard.component.css']
})
export class DashboardComponent {
  constructor(public router: Router, public http: Http, private _accessChecker: AccessService) {
  }

  ngOnInit(){
    this._accessChecker.checkAccessAndRedirect('Dashboard');
  }
  //TO DO: nav bar
}
