import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { roleGuard } from './guards/role.guard';
import { ROLE } from './enums/role.enum';

// Array of routes
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  /*
  Check canActive is an array, I send the roleGuard, o maybe an array of guards I needed

  Notice, in data object, I'm sending an object which contains roles array,
  basically It is an array of roles I want to allow to access to the route, in this case only Admin role can view the path admin
  */
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminPageModule),
    canActivate: [roleGuard],
    data: { roles: [ROLE.ADMIN] },
  },
  /*
  Here the only role that is permitted to navigate to user view is user role,

  Notice how I send it to the guard, inside de data object at roles array
  */
  {
    path: 'user',
    loadChildren: () =>
      import('./pages/user/user.module').then((m) => m.UserPageModule),
    canActivate: [roleGuard],
    data: { roles: [ROLE.USER] },
  },
  /*
  In this case, event admin and user role, can navigate to both view, due to, I'm sending both role, admin and user
  */
  {
    path: 'both',
    loadChildren: () =>
      import('./pages/both/both.module').then((m) => m.BothPageModule),
    canActivate: [roleGuard],
    data: { roles: [ROLE.USER, ROLE.ADMIN] },
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
