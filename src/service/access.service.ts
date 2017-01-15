import { Injectable, OnInit } from 'angular2/core';
import { Http, HTTP_PROVIDERS, Headers } from 'angular2/http';
import 'rxjs/add/operator/map';
import { Constant } from '../config/constant';
import { Router } from 'angular2/router';
import { isEmpty } from '../common/general';
import { BaseService } from './base.service';

@Injectable()
export class AccessService extends BaseService {
  
  constructor(public router: Router, public http: Http) {
    super(router, http);
  }

  checkAccessAndRedirect(permission: string, returnUrl: string) {
    if (localStorage.getItem('token') == null) {
      localStorage.setItem('returnUrl', returnUrl);
      this.router.navigate(['Login']);
    }
  }
}
