import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/auth/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface User {
  id: number;
  name: string;
  email: string;
  blocked: boolean;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  registerForm: FormGroup;

  constructor(private http: HttpClient,private userService: UserService,   private formBuilder: FormBuilder,
  ) {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      image:[''],
      birthDate: [null, [Validators.required]],
      role: ['', [Validators.required]],
      ip: '186.43.245.174',
      office: userService.generateRandomOffice(),
    });
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  toggleBlock(user: User): void {

    user.blocked = !user.blocked;


  }

  
  get formControls() {
    return this.registerForm.controls;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const user = this.registerForm.value;
      console.log(user);

      this.userService.saveUser(user).subscribe(
        (response) => {
          console.log('Usuario registrado exitosamente:', response);
          // Redirigir o mostrar mensaje de éxito
          alert('Registrado con éxito ' + response.username);
        },
        (error) => {
          alert('Error al registrar, inténtelo de nuevo');
          console.error('Error al registrar usuario:', error);
          // Mostrar mensaje de error al usuario
        }
      );
    } else {
      alert('Formulario mal llenado');
    }
  }
}
