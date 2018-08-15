import {Routes} from '@angular/router';
import {MyDashboardComponent} from './my-dashboard/my-dashboard.component';


export const appRoutes: Routes = [
  {path: '', redirectTo: '/user', pathMatch: 'full'},
  {path: 'dashboard', component: MyDashboardComponent},
  {path: 'user', loadChildren: "./user/user.module#UserModule"},
  {path: '**', redirectTo: 'dashboard'}
];
