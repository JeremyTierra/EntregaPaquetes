import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  user:any;
  constructor(private authService: AuthService, private router: Router) {
  }
  ngOnInit(): void {
this.authService.user$.subscribe((user)=>{
this.user=user;}
)
  }

  closeSection() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
