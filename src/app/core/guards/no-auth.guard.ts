import { Injectable }          from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { AuthService }       from '../services/auth.service';

@Injectable()
export class NoAuthGuard implements CanActivate {

    constructor(private authService: AuthService,
                private router: Router) {
    }

    canActivate() {
        if (isNullOrUndefined(this.authService.getCurrentUserToken())) {
            return true;
        } else {
            this.router.navigate(['/products']);
        }
    }
}
