import { Headers } from 'angular2/http';
import { isEmpty } from '../common/general';

export const contentHeaders = new Headers();

contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');

let token = localStorage.getItem('token');
if(!isEmpty(token)){
  contentHeaders.append('Authorization', 'Token '+token);
}
