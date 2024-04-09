import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UserService } from './auth/services/user.service';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app-prueba-jeremy-tierra';
  isLoginPage = false;

  constructor(private router: Router, private userService: UserService,private authService:AuthService) {}

  ngOnInit() {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const urlTree = this.router.parseUrl(event.url);
        const urlSegmentGroup = urlTree.root.children['primary'];

        // Verificar si la ruta principal es "/login"
        this.isLoginPage =
          (urlSegmentGroup && urlSegmentGroup.segments[0]?.path === 'login') ||
          (urlSegmentGroup && urlSegmentGroup.segments[0]?.path === 'register');;
      }
    });
    this.authService.pushNewUser();
  }
}
