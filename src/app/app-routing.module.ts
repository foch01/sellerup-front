import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }         from './app.component';

const routes: Routes = [
    {
        path        : 'auth',
        loadChildren: 'src/app/auth/auth.module#AuthModule'
    },
    {
        path     : '',
        component: AppComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
