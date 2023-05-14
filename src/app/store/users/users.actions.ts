import { Action } from "@ngrx/store";

export enum UsersActionType  {
  loadUsers = '[USERS] load users trigger',
  loadUsersDone = '[USERS] load users done',
  loadUsersFailed = '[USERS] load users failed'
}


export class loadUsers implements Action {
 readonly type = UsersActionType.loadUsers;
 constructor(public payload: any) {

 }

}

export type UsersActions = | loadUsers
