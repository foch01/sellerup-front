import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/fuse-shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from 'app/app.component';

import { fuseConfig } from 'app/fuse-config';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import 'hammerjs';
import { CoreModule } from './core/core.module';
import { FakeDbService } from './fake-db/fake-db.service';
import { CreateEmailModule } from './main/create-email/create-email.module';
import { AuthModule } from './main/authentication/auth.module';
import { AuthService } from './core/services/auth.service';
import { RegisterService } from './core/services/register.service';
import { ForgotPasswordModule } from './main/authentication/forgot-password/forgot-password.module';
import { ProductsModule } from './main/products/products.module';
import { SharedModule } from './shared/shared.module';

const appRoutes: Routes = [
    {
        path: '**',
        redirectTo: 'sample',
    },
];

@NgModule({
    declarations: [AppComponent],
    imports: [
        CoreModule,
        SharedModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, { useHash: true }),

        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay: 0,
            passThruUnknownUrl: true,
        }),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // Authentication
        AuthModule,
        ForgotPasswordModule,

        // App modules
        LayoutModule,
        SampleModule,
        ProductsModule,
		CreateEmailModule,
    ],
    bootstrap: [AppComponent],
    providers: [AuthService, RegisterService],
})
export class AppModule {}
