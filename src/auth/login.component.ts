import { Component, View, OnInit } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import { Http, Headers } from 'angular2/http';
import { Constant } from '../config/constant';
import { contentHeaders } from '../common/headers';
import { isEmpty } from '../common/general';

@Component({
  selector: 'login'
})


@View({
  directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES],
  templateUrl: './src/auth/login.html',
  styles: ['./login.css']
})

export class LoginComponent {
  constructor(private _router: Router, public http: Http) {
  }

  ngOnInit() {
    let currentToken = localStorage.getItem('token');
    if (!isEmpty(currentToken)) {
      this._router.navigate(['Dashboard']);
    }
  }

  login(event, name, accessCode) {
    event.preventDefault();

    /*
    let body = JSON.stringify({ name, accessCode });
    this.http.post(Constant.baseUrl + 'auth/login' , body, { headers: contentHeaders })
      .subscribe(
        response => {
          let tokenModel = response.json();

          if(!isEmpty(tokenModel.token)){
              localStorage.setItem('token',tokenModel.token);
              localStorage.setItem('permissions', tokenModel.permissions);

              let returnUrl = localStorage.getItem('returnUrl') != null? localStorage.getItem('returnUrl'):'Dashboard';
              localStorage.setItem('returnUrl', null);

              this._router.navigate([returnUrl]);
          } else {
              alert('incorrect accessCode or name');
          }
        },
        error => {
          console.log(error);
        }
      );
    */

    this.http.request('data/userToken.json').subscribe(
      response => {
        let tokenModel = response.json();
        if (accessCode == tokenModel.accessCode) {
          localStorage.setItem('token', tokenModel.token);
          localStorage.setItem('permissions', JSON.stringify(tokenModel.permissions));
          localStorage.setItem('name', name);

          let returnUrl = localStorage.getItem('returnUrl') != null ? localStorage.getItem('returnUrl') : 'Dashboard';
          localStorage.setItem('returnUrl', null);

          this._router.navigate([returnUrl]);
        } else {
          alert('incorrect access code!');
        }
      }

    );
  }
}
