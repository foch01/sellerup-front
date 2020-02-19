import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { FuseSharedModule } from '../../../@fuse/fuse-shared.module';
import { NoAuthGuard } from '../../core/guards/no-auth.guard';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NoAuthGuard],
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [NoAuthGuard],
    }
];

export function tokenGetter() {
    return localStorage.getItem('token');
}

@NgModule({
    declarations: [LoginComponent, RegisterComponent],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        FuseSharedModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
            },
        }),
    ],
    providers: [JwtHelperService],
})
export class AuthModule {}
