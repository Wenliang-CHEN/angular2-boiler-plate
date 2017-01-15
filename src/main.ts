import {AppComponent} from './base/app.component';
import { bootstrap } from 'angular2/platform/browser';
import { provide } from 'angular2/core';
import { FORM_PROVIDERS } from 'angular2/common';
import { ROUTER_PROVIDERS } from 'angular2/router';
import { Http, HTTP_PROVIDERS } from 'angular2/http';

bootstrap(
  AppComponent,
  [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
  ])
