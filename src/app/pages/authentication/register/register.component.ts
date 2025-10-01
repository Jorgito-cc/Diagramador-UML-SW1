import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class AppSideRegisterComponent {
  formData: any = {
    name: '',
    email: '',
    password: '',
  };
  errorMessage: string = '';

  constructor(
    private readonly userService: UsersService,
    private readonly router: Router
  ) {}

  async handleSubmit() {
    if (!this.formData.name || !this.formData.email || !this.formData.password) {
      this.showError('Inserte todos los datos');
      return;
    }

    const confirmRegistration = confirm('¿Confirmar registro?');
    if (!confirmRegistration) return;

    try {
      const response = await this.userService.register(this.formData);
      if (response && response.token) {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/dashboard']);
      } else {
        this.showError(response.message || 'Error al registrar');
      }
    } catch (error: any) {
      this.showError(error.message);
    }
  }

  showError(message: string) {
    this.errorMessage = message;
    setTimeout(() => {
      this.errorMessage = '';
    }, 3000);
  }
}
