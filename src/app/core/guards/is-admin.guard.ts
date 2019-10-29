import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate  {
  canActivate(): Promise<boolean>  {
    return new Promise((resolve) => {
      return resolve(true);
    });
  }
}
