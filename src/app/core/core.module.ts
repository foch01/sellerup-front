import { CommonModule }                  from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserAnimationsModule }       from '@angular/platform-browser/animations';
import { SharedModule }                  from '../shared/shared.module';
import { NoAuthGuard }                   from './guards/no-auth.guard';
import { ApiService }                    from './services/api.service';
import { AuthService }                   from './services/auth.service';
import { JwtService }                    from './services/jwt.service';
import { UserService }                   from './services/user.service';

@NgModule({
    declarations: [],
    imports     : [
        CommonModule,
        BrowserAnimationsModule
    ],
    exports     : [],
    providers   : [
        NoAuthGuard,
        UserService,
        ApiService,
        SharedModule,
        JwtService,
        AuthService
    ]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule : CoreModule,
            providers: []
        };
    }
}
