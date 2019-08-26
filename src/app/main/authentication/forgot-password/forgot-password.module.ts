import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { FuseSharedModule } from '../../../../@fuse/shared.module';

const routes = [
    {
        path     : 'forgot-password',
        component: ForgotPasswordComponent
    }
];

@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    CommonModule,

      RouterModule.forChild(routes),

      MatButtonModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,

      FuseSharedModule,
  ]
})
export class ForgotPasswordModule { }
