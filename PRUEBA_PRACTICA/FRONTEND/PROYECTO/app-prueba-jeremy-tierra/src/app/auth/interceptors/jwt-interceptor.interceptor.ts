import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // Clonar la solicitud y agregar el encabezado de autorización si el usuario está autenticado
    if (this.authService.isLoggedIn()) {
      const authRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.getToken()}`,
        },
      });


      return next.handle(authRequest);
    }

    // Si el usuario no está autenticado, simplemente continúa con la solicitud original
    return next.handle(request);
  }
}
