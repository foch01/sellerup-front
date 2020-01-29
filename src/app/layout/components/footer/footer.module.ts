import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/fuse-shared.module';

import { FooterComponent } from 'app/layout/components/footer/footer.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [FooterComponent],
    imports: [RouterModule, SharedModule, MatButtonModule, MatIconModule, MatToolbarModule, FuseSharedModule],
    exports: [FooterComponent],
})
export class FooterModule {}
