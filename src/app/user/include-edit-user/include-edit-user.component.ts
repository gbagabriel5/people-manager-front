import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/shared/service/user.service';
import { User } from 'src/app/shared/model/user.model';

@Component({
  templateUrl: './include-edit-user.component.html',
  styleUrls: ['./include-edit-user.component.css']
})
export class IncludeEditUserComponent implements OnInit {
  public userForm!: FormGroup;
  public user!: User;
  
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.formBuilder();
    this.setUser;
    this.userService.saveUser(this.user).subscribe({
      next: (): void => {
        this.getForm().reset();
        this.router.navigateByUrl('/');
      }});
  }
  
  public getForm(): FormGroup | FormControl {
    return this.userForm;
  }

  private formBuilder(): void {
    this.userForm = new FormGroup(
      {
        name: new FormControl(null, Validators.required),
        email: new FormControl(null, Validators.email),
        password: new FormControl(null, Validators.required),
        sex: new FormControl(null),
        birthdate: new FormControl(null),
        naturalness: new FormControl(null),
        nationality: new FormControl(null),
        cpf: new FormControl(null, Validators.required),
      }
    );
  }

  private setUser(): void {
    this.user = {
      name: this.userForm.value.name,
      email: this.userForm.value.email,
      password: this.userForm.value.password,
      sex: this.userForm.value.sex,
      birthdate: this.userForm.value.birthdate,
      naturalness: this.userForm.value.naturalness,
      nationality: this.userForm.value.nationality,
      cpf: this.userForm.value.cpf,
    };
  }
}
