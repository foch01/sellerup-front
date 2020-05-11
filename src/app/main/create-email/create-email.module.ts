import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/fuse-shared.module';

import { CreateEmailComponent } from './create-email.component';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule, MatCheckboxModule } from '@angular/material';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

const routes = [
  {
      path     : 'create-email',
      component: CreateEmailComponent
  }
];

@NgModule({
  declarations: [CreateEmailComponent],
  imports: [
    RouterModule.forChild(routes),

    TranslateModule,

    FuseSharedModule,

    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatCheckboxModule,

    CKEditorModule,

  ],
  exports : [
    CreateEmailComponent,
]
  
})

export class CreateEmailModule { }

