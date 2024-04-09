import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private cookieService: CookieService, private router: Router) { }



  login(event: Event): void {
    event.preventDefault();
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        this.router.navigate(['/datos']);
      },
      (error) => {
        alert('Credenciales Incorrectas, porvafor revisar');
        console.error('Error de inicio de sesión:', error);
        this.username = '';
        this.password = '';
      }
    );
  }
}
