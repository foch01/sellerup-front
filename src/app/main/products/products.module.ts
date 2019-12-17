import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule }      from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { AuthGuard }        from '../authentication/login/auth.guard';

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
    MatTabsModule
} from '@angular/material';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product/product.service';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FuseWidgetModule } from '../../../@fuse/components';

const routes: Routes = [
    {
        path     : 'products',
        component: ProductsComponent,
        canActivate: [AuthGuard]
    },
    {
        path     : 'products/:id/:handle',
        component: ProductComponent,
        resolve  : {
            data: ProductService
        }
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

        ChartsModule,
        NgxChartsModule,

        FuseSharedModule,
        FuseWidgetModule,
    ],
    providers   : [
        ProductService
    ],
    exports     : [
        ProductsComponent
    ]
})

export class ProductsModule
{
}
