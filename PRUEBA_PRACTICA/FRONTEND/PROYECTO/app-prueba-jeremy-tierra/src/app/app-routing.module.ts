import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { authGuard } from './auth/guards/auth.guard';
import { hasRolesGuard } from './auth/guards/has-roles.guard';
import { DashboardUsersComponent } from './pages/dashboard-users/dashboard-users.component';

import { UserListComponent } from './pages/user-list/user-list.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistrarPaqueteComponent } from './pages/registrar-paquete/registrar-paquete.component';
import { RepartidorComponent } from './pages/repartidor/repartidor.component';
import { EntregasEjecutadasComponent } from './pages/entregas-ejecutadas/entregas-ejecutadas.component';
import { AsignarRutaEntregaComponent } from './pages/asignar-ruta-entrega/asignar-ruta-entrega.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },


  {
    path: 'datos',
    pathMatch: 'full',
    component: DashboardUsersComponent,
  },
 
  {
    path: 'registrar-paquete',
    pathMatch: 'full',
    component: RegistrarPaqueteComponent,
  },
 
  {
    path: 'entregas-ejecutadas',
    pathMatch: 'full',
    component: EntregasEjecutadasComponent,
  },
  {
    path: 'rutas',
    pathMatch: 'full',
    component: AsignarRutaEntregaComponent,
  },
  {
    path: 'paquetes',
    pathMatch: 'full',
    component: RepartidorComponent,
  },

  {
    path: 'users',
    pathMatch: 'full',
    canActivate: [authGuard, hasRolesGuard],
    data: { allowedRoles: ['ADMINISTRADOR'] },
    component: UserListComponent,
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirigir a login por defecto
  { path: '**', redirectTo: '/login' }, // Manejo de rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
