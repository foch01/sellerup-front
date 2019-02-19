import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoAuthGuard }          from '../core/guards/no-auth.guard';
import { LoginComponent }       from './login/login.component';

const routes: Routes = [
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'login'
    },
    {
        path       : 'login',
        component  : LoginComponent,
        canActivate: [NoAuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
