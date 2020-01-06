import { CommonModule }                from '@angular/common';
import { NgModule }                    from '@angular/core';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
}                                      from '@angular/material';
import { RouterModule }                from '@angular/router';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { FuseSharedModule }            from '../../../../@fuse/shared.module';
import { AuthService }                 from './auth.service';
import { LoginComponent }              from './login.component';
import { NoAuthGuard }                 from './no-auth.guard';

const routes = [
    {
        path       : 'login',
        component  : LoginComponent,
        canActivate: [NoAuthGuard]
    }
];

export function tokenGetter() {
    return localStorage.getItem('token');
}
@NgModule({
    declarations: [
        LoginComponent
    ],
    imports     : [
        CommonModule,
        RouterModule.forChild(routes),
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        FuseSharedModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter
            }
        })
    ],
    providers   : [
        AuthService,
        JwtHelperService
    ]

})
export class LoginModule {
}
