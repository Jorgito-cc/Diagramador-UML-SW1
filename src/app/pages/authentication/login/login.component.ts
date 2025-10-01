import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],


})
export class AppSideLoginComponent {
  constructor(
    private readonly usersService: UsersService,
    private router: Router
  ) { }


  email: string = ''
  password: string = ''
  errorMessage: string = ''


async handleSubmit() {
  if (!this.email || !this.password) {
    this.showError("Email and Password are required");
    return;
  }

  try {
    const response = await this.usersService.login(this.email, this.password);

    if (response && response.token) {
      // guardar token
      localStorage.setItem('token', response.token);

      // opcional: guardar datos de usuario
      if (response.user) {
        localStorage.setItem('user', JSON.stringify(response.user));
      }

      console.log('Login exitoso');
      this.router.navigate(['/dashboard']);
    } else {
      this.showError(response.message || "Credenciales inválidas");
    }
  } catch (error: any) {
    this.showError(error.message || "Error en login");
  }
}

  showError(mess: string) {
    this.errorMessage = mess;
    setTimeout(() => {
      this.errorMessage = ''
    }, 3000)
  }

}
