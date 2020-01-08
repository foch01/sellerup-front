import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { CreateEmailComponent } from './create-email.component';
import { MatIconModule, MatButtonModule } from '@angular/material';

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

    MatIconModule,
    MatButtonModule,

    CKEditorModule,

  ],
  exports : [
    CreateEmailComponent,
]
  
})

export class CreateEmailModule { }
