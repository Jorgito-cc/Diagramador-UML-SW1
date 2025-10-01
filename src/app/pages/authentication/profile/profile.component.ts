import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class AppSideProfileComponent implements OnInit {

  hidden = false;
  token: any;
  profileInfo: any;
  errorMessage: string = '';

  constructor(
    private readonly userService: UsersService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    // 👇 Lógica para cargar perfil
    const token = localStorage.getItem('token');
    if (token) {
      this.userService.getYourProfile(token)
        .then(user => this.profileInfo = user)
        .catch(err => this.showError('No se pudo cargar el perfil'));
    }
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  showError(mess: string) {
    this.errorMessage = mess;
    setTimeout(() => {
      this.errorMessage = '';
    }, 3000);
  }
}
