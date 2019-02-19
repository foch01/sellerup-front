import { Injectable }                                                       from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService }                                                      from '../services/auth.service';

@Injectable()
export class NoAuthGuard implements CanActivate {
    constructor(private router: Router,
                private authService: AuthService) {
    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {
        const currentUser = this.authService.currentUserValue;
        if (!currentUser) {
            return true;
        } else {
            this.router.navigate([''], { queryParams: { returnUrl: state.url } });
            return false;
        }

    }
}
