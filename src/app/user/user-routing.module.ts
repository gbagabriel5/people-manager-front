import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncludeEditUserComponent } from './include-edit-user/include-edit-user.component';

const routes: Routes = [
  {
    path: 'include',
    component: IncludeEditUserComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }
