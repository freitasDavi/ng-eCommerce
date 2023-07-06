import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public nome: string = "";
  public email: string = "";
  public password: string = "";
  public passwordM: string = "";

  constructor(private userService: UserService, private router: Router) { }


  public registrar() {
    this.userService.userRegister({
      email: this.email,
      name: this.nome,
      password: this.password
    });

    this.router.navigateByUrl("/");
  }
}
