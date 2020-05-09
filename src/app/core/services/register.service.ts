import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../../environments/environment.hmr';

@Injectable()
export class RegisterService {
    resourceUrl = '/users';

    constructor(private httpClient: HttpClient, private router: Router, private jwtHelper: JwtHelperService) {}

    public register(email: string, password: string) {
        const body = { email: email, password: password };
        return this.httpClient.post(environment.url + this.resourceUrl, body);
    }
}
