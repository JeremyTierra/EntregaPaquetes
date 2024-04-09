import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { CookieService } from 'ngx-cookie-service';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JwtInterceptorInterceptor } from './auth/interceptors/jwt-interceptor.interceptor';
import { ShowForRolesDirective } from './auth/directives/show-for-roles.directive';
import { DashboardUsersComponent } from './pages/dashboard-users/dashboard-users.component';

import { UserListComponent } from './pages/user-list/user-list.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistrarPaqueteComponent } from './pages/registrar-paquete/registrar-paquete.component';
import { RepartidorComponent } from './pages/repartidor/repartidor.component';
import { EntregasEjecutadasComponent } from './pages/entregas-ejecutadas/entregas-ejecutadas.component';
import { AsignarRutaEntregaComponent } from './pages/asignar-ruta-entrega/asignar-ruta-entrega.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    ShowForRolesDirective,
    DashboardUsersComponent,
    UserListComponent,
    HomeComponent,
    RegistrarPaqueteComponent,
    RepartidorComponent,
    EntregasEjecutadasComponent,
    AsignarRutaEntregaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
