import { Component, OnInit } from 'angular2/core';
import {AccessService} from '../service/access.service';
import { Router } from 'angular2/router';

@Component({
  selector: 'nav',
  templateUrl: './src/navigation/navigation.component.html',
})
export class NavigationComponent {
  permissions: any;


  constructor(public router: Router) {
  }

  ngOnInit(){
    this.permissions = JSON.parse(localStorage.getItem('permissions'));
  }
  
  
  logout(){
    localStorage.clear();
    this.router.navigate(['Login']);
  }
}
