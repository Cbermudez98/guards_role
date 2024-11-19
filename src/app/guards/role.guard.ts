import { CanActivateFn } from '@angular/router';
import { ROLE } from '../enums/role.enum';
import { inject } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { CONSTANT } from '../enums/constants';

export const roleGuard: CanActivateFn = (route, state) => {
  // Inject storage service to get into local storage and get the information there
  const storageService = inject(StorageService);

  // Get the roles into route.data sended from the app-routing.module.ts
  const roles: ROLE[] = route.data['roles'];

  // get the information from localstorage
  const role: ROLE | null = storageService.get<ROLE>(CONSTANT.ROLE);

  // Ensure the role is well set at local storage
  if (!role) return false;

  // Validate if the roles array contains the role got from local storage
  const isPermitted = roles.includes(role);

  // If it was not contain then return false
  if (!isPermitted) return false;

  // If it is everything is well, then return true and continuous to the page
  return true;
};
