import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IncludeEditUserComponent } from './include-edit-user/include-edit-user.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [IncludeEditUserComponent],
  imports: [CommonModule, UserRoutingModule]
})
export class UserModule { }
