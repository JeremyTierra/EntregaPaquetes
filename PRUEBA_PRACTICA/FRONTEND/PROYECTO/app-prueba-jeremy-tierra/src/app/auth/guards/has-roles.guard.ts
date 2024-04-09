import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, tap } from 'rxjs';

export const hasRolesGuard: CanActivateFn = (route, state) => {


  const allowedRoles = route.data?.['allowedRoles'];

  return inject(AuthService).getUserRoles().pipe(
    map(value => {
      const hasRequiredRole = allowedRoles.some((elemento: string) => value.includes(elemento));;
      console.log(value);
      if(!hasRequiredRole){
alert("Acesso Denegado");
      }
      return hasRequiredRole;
    })
  );

};

