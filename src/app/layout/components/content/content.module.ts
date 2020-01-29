import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/fuse-shared.module';

import { ContentComponent } from 'app/layout/components/content/content.component';
import { SharedModule }     from '../../../shared/shared.module';

@NgModule({
    declarations: [
        ContentComponent
    ],
    imports     : [
        RouterModule,
        SharedModule,
        FuseSharedModule
    ],
    exports     : [
        ContentComponent
    ]
})
export class ContentModule
{
}
