import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';

  private user = new BehaviorSubject<any | null>(null);
  user$ = this.user.asObservable();
  isLoggedIn$: Observable<boolean> = this.user$.pipe(map(Boolean));

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  login(username: string, password: string): Observable<HttpResponse<any>> {
    const loginDto = { username, password };
    return this.http
      .post<any>(`${this.apiUrl}/login`, loginDto, {
        observe: 'response',
      })
      .pipe(
        tap((response) => {
          console.log(response);

          if (response && response.headers) {
            // Obtener el token de las cabeceras de la respuesta
            const authToken = response.headers.get('Authorization');

            if (authToken) {
              this.cookieService.set('token', authToken);
              this.pushNewUser();
            } else {
              console.error(
                'No se encontró el token en las cabeceras de la respuesta.'
              );
            }
          } else {
            console.error('Respuesta o cabeceras no definidas.');
          }
        })
      );
  }
  pushNewUser() {
    const token = this.getToken();
    const decodedToken: any = jwtDecode(token);
    const username = decodedToken.sub;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    this.http
      .get<string[]>(`http://localhost:8080/api/users/${username}`, { headers })
      .subscribe((user) => this.user.next(user)
      );

  }

  setToken(token: string): void {
    this.cookieService.set('token', token);
  }

  getToken(): string {
    return this.cookieService.get('token');
  }

  getUserRoles(): Observable<string[]> {
    const token = this.getToken();
    const decodedToken: any = jwtDecode(token);
    const username = decodedToken.sub;

    // Configurar el encabezado con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    // Realizar la solicitud HTTP para obtener los roles del usuario
    return this.http.get<string[]>(
      `http://localhost:8080/api/users/roles/${username}`,
      { headers }
    );
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }


  logout(): void {
    this.cookieService.delete('token');
      this.user.next(null);
  }
}
