import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/auth/token-storage.service';


@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
    constructor(private token: TokenStorageService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with basic auth credentials if available
        const currentUser = this.token.getToken();
        console.log(currentUser, 'cureentUSer');
        if (currentUser != null) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Basic ${currentUser}`
                }
            });
        }

        return next.handle(request);
    }
}