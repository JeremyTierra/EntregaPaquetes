// register.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,


    private http: HttpClient
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
