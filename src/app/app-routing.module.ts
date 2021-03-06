import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component'
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'', component: AuthComponent
  },
  // {
  //   path: 'qrcode', component:AuthComponent, canActivate:[AuthGuard]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
