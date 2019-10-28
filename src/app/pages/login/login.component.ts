import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from "@angular/router"

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  loginForm: {
    username: string,
    password: string
  } = {
      username: "",
      password: ""
    }

  constructor(
    private auth: AuthService,
    private router: Router) { }

  login() {
    return this.auth.login(this.loginForm)
      .then(() => {
        return this.router.navigate(['/'])
      })
  }

}