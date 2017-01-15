import {Http, Response,Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import { isEmpty } from '../common/general';
import { Router } from 'angular2/router';

export class BaseService{
    constructor(public router: Router, public http: Http) {}

    authHeaders() {
        let contentHeaders = new Headers();

        contentHeaders.append('Accept', 'application/json');
        contentHeaders.append('Content-Type', 'application/json');

        let token = localStorage.getItem('token');
        if(!isEmpty(token)){
          contentHeaders.append('Authorization', 'Token '+token);
        }

        return contentHeaders;
    }

    handleError(error: Response, returnUrl: string = '') {
      console.log(error);
      localStorage.clear();
      localStorage.setItem('returnUrl', !isEmpty(returnUrl)? returnUrl:'Dashboard');
      this.router.navigate(['Login']);
    }
}
