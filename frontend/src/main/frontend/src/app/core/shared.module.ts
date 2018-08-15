import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MaterialModule} from "./material-module";
import {ChangeColorDirective} from "./directives/change-color.directive";


@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  entryComponents: [],
  declarations: [
    ChangeColorDirective

  ],
  exports: [
    ChangeColorDirective,
    MaterialModule
  ]
})
export class SharedModule {
}
