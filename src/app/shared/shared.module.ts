import { CommonModule }     from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule }         from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule }     from '@angular/router';
import { TranslateModule }  from '@ngx-translate/core';

@NgModule({
    declarations: [],
    imports     : [
        CommonModule,
        RouterModule,
        HttpClientModule,
        FlexLayoutModule
    ],
    exports: [
        FlexLayoutModule,
        TranslateModule
    ]
})
export class SharedModule {
}
