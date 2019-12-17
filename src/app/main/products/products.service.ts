import { HttpClient }  from '@angular/common/http';
import { Injectable }  from '@angular/core';
import { Observable }  from 'rxjs';
import { environment } from '../../../environments/environment.hmr';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor(private http: HttpClient) {
    }

    getProducts(): Observable<any> {
        return this.http.put(environment.url + '/api/users/5df79e38153d791f9c4fc0a3', {
            name: 'julien'
        });
    }
}
