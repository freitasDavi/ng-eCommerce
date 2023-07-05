import { Component } from '@angular/core';
import { UserService } from './user.service';

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

  constructor(private userService: UserService) { }


  public registrar() {
    this.userService.userRegister({
      email: this.email,
      name: this.nome,
      password: this.password
    });
  }
}
