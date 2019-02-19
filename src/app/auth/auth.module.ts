import { CommonModule }                                                       from '@angular/common';
import { NgModule }                                                           from '@angular/core';
import { ReactiveFormsModule }                                                from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { SharedModule }                                                       from '../shared/shared.module';
import { AuthRoutingModule }                                                  from './auth-routing.module';
import { LoginComponent }                                                     from './login/login.component';

@NgModule({
    declarations: [LoginComponent],
    imports     : [
        SharedModule,
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatCardModule
    ]
})
export class AuthModule {
}
