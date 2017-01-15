import {Action} from './action';

export class ActionGroup {
  action_group_id: number;
  description: string;
  actions: Action[];

  errors: any;

  constructor(){
      this.errors = {};
  }
}
