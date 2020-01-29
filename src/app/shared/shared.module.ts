import { CommonModule }     from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule }         from '@angular/core';
import { RouterModule }     from '@angular/router';

@NgModule({
    declarations: [],
    imports     : [
        CommonModule,
        HttpClientModule,
        RouterModule
    ],
    exports     : [
        HttpClientModule,
        RouterModule
    ]
})
export class SharedModule {
}
