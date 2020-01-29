import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable }                                           from '@angular/core';
import { Router }                                               from '@angular/router';
import { Observable }  from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService,
                private router: Router) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.url.includes('/api')) {
            if (this.authService.isAuthenticated()) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${this.authService.getCurrentUserToken()}`
                    }
                });
            } else {
                this.router.navigate(['/login']);
            }
        }
        return next.handle(request);
    }
}
