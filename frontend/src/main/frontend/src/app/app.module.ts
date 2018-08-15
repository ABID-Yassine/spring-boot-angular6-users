import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './navbar/navbar.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MyDashboardComponent} from './my-dashboard/my-dashboard.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ServiceApi} from "./core/service.api";
import {UserModule} from "./user/user.module";
import {SharedModule} from "./core/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MyDashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    UserModule,
    SharedModule
  ],
  entryComponents: [],
  providers: [ServiceApi],
  bootstrap: [AppComponent],
})
export class AppModule {
}
