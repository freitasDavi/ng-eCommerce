import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface UserRegisterDTO {
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly urlLogin: string = "http://localhost:8080/api/usuarios/login";

  constructor(private httpClient: HttpClient) { }

  public userLogin(email: string, password: string) {
    return this.httpClient.post(this.urlLogin, {
      "name": email,
      "password": password
    }).pipe(res => {
      console.log(res);

      return res;
    })
  }

  public userRegister(dto: UserRegisterDTO) {
    return this.httpClient.post(this.urlLogin, {
      "nome": dto.name,
      "email": dto.email,
      "cidade": "",
      "rua": "",
      "bairro": "",
      "cep": "",
      "cpf": "",
      "senha": dto.password
    }).pipe(response => {
      console.log(response);

      return response;
    })
  }
}
