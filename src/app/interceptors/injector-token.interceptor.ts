import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InjectorTokenInterceptor implements HttpInterceptor {
  constructor() {}


  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    try {
      const tokken = window.sessionStorage.getItem("tokken");
      const id = window.sessionStorage.getItem("id");
    
      let peticionFiltrada = request;
      peticionFiltrada = request.clone({
        setHeaders: {
          tokken: `${tokken}`,
          id: `${id}`
        },
      });

      return next.handle(peticionFiltrada);
    } catch (e) {
      console.log('ERROR EN EL INTERCEPTOR! ', e);
      return next.handle(request);
    }
  }
}
