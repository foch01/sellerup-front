import { HTTP_INTERCEPTORS, HttpClientModule }                              from '@angular/common/http';
import { NgModule }                                                         from '@angular/core';
import { MatButtonModule, MatIconModule }                                   from '@angular/material';
import { MatMomentDateModule }                                              from '@angular/material-moment-adapter';
import { BrowserModule }                                                    from '@angular/platform-browser';
import { BrowserAnimationsModule }                                          from '@angular/platform-browser/animations';
import { RouterModule, Routes }                                             from '@angular/router';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { FuseModule }           from '@fuse/fuse.module';
import { FuseSharedModule }     from '@fuse/shared.module';
import { TranslateModule }      from '@ngx-translate/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from 'app/app.component';

import { fuseConfig }           from 'app/fuse-config';
import { LayoutModule }         from 'app/layout/layout.module';
import { SampleModule }         from 'app/main/sample/sample.module';
import 'hammerjs';
import { FakeDbService }        from './fake-db/fake-db.service';
import { ForgotPasswordModule } from './main/authentication/forgot-password/forgot-password.module';
import { AuthGuard }            from './main/authentication/login/auth.guard';
import { AuthService }          from './main/authentication/login/auth.service';
import { JwtInterceptor }       from './main/authentication/login/jwt.interceptor';
import { LoginModule }          from './main/authentication/login/login.module';
import { NoAuthGuard }          from './main/authentication/login/no-auth.guard';
import { ProductsModule }       from './main/products/products.module';

const appRoutes: Routes = [
    {
        path      : '**',
        redirectTo: 'sample'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay             : 0,
            passThruUnknownUrl: true
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
        LoginModule,
        ForgotPasswordModule,

        // App modules
        LayoutModule,
        SampleModule,
        ProductsModule
    ],
    bootstrap   : [
        AppComponent
    ],
    providers   : [
        AuthGuard,
        NoAuthGuard,
        AuthService,
        {
            provide : HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi   : true
        }
    ]
})
export class AppModule {
}
