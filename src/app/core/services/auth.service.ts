import { HttpClient }                  from '@angular/common/http';
import { Injectable }                  from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map }                         from 'rxjs/operators';
import { environment }                 from '../../../environments/environment';
import { User }                        from '../models/user.model';

export interface LoginResponse<T> {
    expiration: number;
    payload: T;
    token: string;
}

@Injectable()
export class AuthService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string) {
        console.log('dfqzdqz');
        return this.http.post<User>(`${environment.apiUrl}/login`, { email, password })
        .pipe(map(user => {
            if (user && user.token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
            }

            return user;
        }));
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}

