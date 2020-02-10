import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Modal } from './modal';
import { map, catchError } from 'rxjs/operators';
import { LoadingService } from './loading/loading.service';


@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor {
    public loading: boolean = false;
    constructor(private modal: Modal, private route: Router, public loader: LoadingService,private auth: AuthService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {        
        const currentUser = this.auth.getToken();

        if (req.url.indexOf('login') === -1 && req.url.indexOf('register') === -1) {            
            if (currentUser) {
                
                
                //const token=this.auth.checkToken(currentUser);
                const token=currentUser;
                if(token){           
                    req = req.clone({
                        setHeaders: {
                            'Authorization': 'Bearer ' + token
                        }
                    });
                }else{
                    return throwError("Token inválido");
                }
            }
        }

        return next.handle(req).pipe(map(
            (data) => {
                if (data.type === HttpEventType.Sent) {
                    //console.log('iniciou');
                    this.loader.show();
                }

                if (data.type === HttpEventType.Response) {
                    //console.log('respondeu');
                    this.loader.hide();
                }
                
                return data;
            }
        ),catchError((err: HttpErrorResponse) => {
            alert('Erro ao efeuar a operação. \nDetalhes do Erro:' + err.error.error);
            console.log(err);
            this.loader.hide();
            return throwError(err.error.error);
        }));
        
    }
}
