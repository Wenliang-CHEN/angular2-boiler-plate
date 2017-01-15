export class Action {
  action_id: number;
  action_group_id: number;
  description: string;
  code: string;
  create_datetime: string;
  update_datetime: string;
  actionError: any;

  constructor(){
      this.actionError = {};
  }
}
