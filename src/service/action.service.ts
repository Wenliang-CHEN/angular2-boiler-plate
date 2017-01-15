import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Action} from '../model/action';
import {ActionGroup} from '../model/actionGroup';
import {Constant} from '../config/constant';

@Injectable()
export class ActionService {
   constructor(private _http: Http) {}

   getAllActionGroups(){
     return this._http.get(Constant.baseUrl + 'action_group/Getallactiongroups')
         .map(res => res.json());
   }

    validateAllActions(actionGroups: ActionGroup[]){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post(Constant.baseUrl + 'actiongroup/validateallactions', JSON.stringify(actionGroups), {headers: headers})
         .map(res => res.json());
    }

    saveAllActions(actionGroups: ActionGroup[]){
                var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post(Constant.baseUrl + 'actiongroup/saveallactions', JSON.stringify(actionGroups), {headers: headers})
         .map(res => res.json());
    }
}
