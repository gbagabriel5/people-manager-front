import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserModule } from './user/user.module';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'user',
        loadChildren: async (): Promise<UserModule> =>
          (await import('./user/user.module')).UserModule,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
