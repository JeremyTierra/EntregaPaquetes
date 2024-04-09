  // user.service.ts
  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { EMPTY, Observable, switchMap } from 'rxjs';
  import { User } from '../models/user.model';

  @Injectable({
    providedIn: 'root',
  })
  export class UserService {
    private apiUrl = 'http://localhost:8080/api/users';
    private sincUsersUrl = 'https://api.escuelajs.co/api/v1/users';

    constructor(private http: HttpClient) {}

    saveUser(user: User): Observable<User> {
      return this.http.post<User>(`${this.apiUrl}`, user);
    }

    sincUser(): Observable<any> {
      return this.http.get<any>(this.sincUsersUrl).pipe(
        switchMap((syncedUser) => {
          // Verificar si syncedUser.users es un arreglo y tiene elementos
          if (Array.isArray(syncedUser) ) {
            // Seleccionar solo los campos deseados y especificar el tipo
            const transformedData: any[] = syncedUser.map(
              (user: any) => ({
                name: user.name,
                email: user.email,
                password: user.password,
                image: user.avatar,
                office: this.generateRandomOffice(),
                role: 'USER',
                maquina: this.generarMaquina
              })
            );

            console.log(transformedData);

            // Realizar la solicitud POST con los datos transformados
            return this.http.post<any>(`${this.apiUrl}/all`, transformedData);
          } else {
            // Manejar el caso donde no hay usuarios o la estructura es diferente
            console.error('La estructura de datos recibida no es la esperada.');
            return EMPTY; // Puedes devolver un Observable vacío o manejarlo según tus necesidades
          }
        })
      );
    }

    getUserByUsername(username: string): Observable<User> {
      return this.http.get<User>(`${this.apiUrl}/${username}`);
    }

    getAllUsers(): Observable<User[]> {
      return this.http.get<User[]>(`${this.apiUrl}/all`);
    }
    getUsersByOffice(office:String): Observable<User[]> {
      return this.http.get<User[]>(`${this.apiUrl}/office/${office}`);
    }
    getUserRolesByUsername(username: string): Observable<string[]> {
      return this.http.get<string[]>(`${this.apiUrl}/roles/${username}`);
    }


    deleteUserByUsername(username: string): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${username}`);
    }

    updateUser(username: string, updatedUser: User): Observable<void> {
      return this.http.put<void>(`${this.apiUrl}/${username}`, updatedUser);
    }

    generateRandomOffice(): string {
      const offices = ['7', '11', 'Urdesa'];
      const randomIndex = Math.floor(Math.random() * offices.length);
      return offices[randomIndex];
    }

    idMaquina=0;
    generarMaquina(){
      return this.idMaquina++;
    }
  }
