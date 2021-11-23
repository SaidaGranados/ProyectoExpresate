import { HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest , HttpEvent} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req:HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
    console.log('Interceptor')

    const requestOptions =  {
      headers: new HttpHeaders({

      }),
      withCredentials:true // Para que las peticiones se vayan con las cookies
    }

    const reqClone = req.clone(requestOptions)
    return next.handle(reqClone)
  }

}
