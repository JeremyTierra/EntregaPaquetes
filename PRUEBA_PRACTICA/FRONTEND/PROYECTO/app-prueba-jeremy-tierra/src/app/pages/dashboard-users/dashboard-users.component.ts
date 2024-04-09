// dashboard-users.component.ts
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UserService } from 'src/app/auth/services/user.service';

@Component({
  selector: 'app-dashboard-users',
  templateUrl: './dashboard-users.component.html',
  styleUrls: ['./dashboard-users.component.scss'],
})
export class DashboardUsersComponent implements OnInit {
requestMachine() {
  if(confirm("Enviar peticion")){
    alert("solicitud enviada")
  }else(alert("solicitud Cancelada"))

}
  newPassword = '';

  user: any;
  showChangePasswordModal: boolean = false;
  machinesUser:any[]=[];

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private http:HttpClient
  ) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      this.user = user;
      this.http.get<any[]>(`http://localhost:8080/api/usermaquinas/user/${user.username}`).subscribe(
       (machines)=> this.machinesUser=machines
      )
    });


  }

  openChangePasswordModal() {
    this.showChangePasswordModal = true;
  }

  closeChangePasswordModal() {
    this.showChangePasswordModal = false;
  }
  changePassword() {
    this.user.password = this.newPassword;
    this.userService.updateUser(this.user.username, this.user).subscribe(e=>alert("contraseña cambiada con exito"),(e)=>alert("Ocurrio un error"));
    ;
  }
}
