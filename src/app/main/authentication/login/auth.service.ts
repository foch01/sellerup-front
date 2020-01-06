import { HttpClient }       from '@angular/common/http';
import { Injectable }       from '@angular/core';
import { Router }           from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment }      from '../../../../environments/environment.hmr';
import { Token }            from './token.model';

@Injectable()
export class AuthService {
    resourceUrl = '/login';

    constructor(private httpClient: HttpClient,
                private router: Router,
                private jwtHelper: JwtHelperService) {
    }

    public login(email: string, password: string) {
        const body = { email: email, password: password };
        return this.httpClient.post(environment.url + this.resourceUrl, body);
    }

    public logout(): void {
        this.removeFromLocalStorage();
    }

    addToLocalStorage(token) {
        localStorage.setItem('token', token);
    }

    removeFromLocalStorage() {
        localStorage.removeItem('token');
    }

    getCurrentUserToken(): string {
        return localStorage.getItem('token');
    }

    isAuthenticated(): boolean {
        return !this.jwtHelper.isTokenExpired(this.getCurrentUserToken());
    }

    getCurrentUSer(): Token {
        return this.jwtHelper.decodeToken(this.getCurrentUserToken());
    }

    signOut() {
        this.removeFromLocalStorage();
        this.router.navigate(['/login']);
    }
}
