import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { ProductsComponent } from './products.component';
import {
    MatButtonModule,
    MatChipsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSelectModule,
    MatSortModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule } from '@angular/material';
import { ProductComponent } from './product/product.component';

const routes = [
    {
        path     : 'products',
        component: ProductsComponent
    },
    {
        path     : 'products/:id/:handle',
        component: ProductComponent,
    },
];

@NgModule({
    declarations: [
        ProductsComponent,
        ProductComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,
        FuseSharedModule,
        MatButtonModule,
        MatChipsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatRippleModule,
        MatSelectModule,
        MatSortModule,
        MatSnackBarModule,
        MatTableModule,
        MatTabsModule,
    ],
    exports     : [
        ProductsComponent
    ]
})

export class ProductsModule
{
}
