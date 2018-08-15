import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserRoutes} from "./user.routing";

import {UserComponent} from "./user.component";
import {ServiceApi} from "../core/service.api";

import {MaterialModule} from "../core/material-module";
import {DialogForm} from "./dialogForm/dialog.form";
import {DialogConfirm} from "./dialogConfirm/dialog.confirm";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  entryComponents: [
    DialogForm, DialogConfirm],
  providers: [ServiceApi],
  declarations: [
    UserComponent,

    DialogForm, DialogConfirm
  ],
  exports:[
    DialogForm,  DialogConfirm
  ]
})
export class UserModule {
}
