import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  //template: `<button>Click Me</button>` can use single template if only one is used
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

user: Object;

  constructor(
    private router: Router,
    private session: SessionService,
    private auth: AuthService
  ) {
    this.user = this.session.getUser();
   }

  ngOnInit() {

  }

  login() {
    return this.router.navigate(['/login']);
  }

  isLoggedIn() {
    this.session.getIsLoggedIn();
  }

  logout(){
    return this.auth.logout()
    .then(()=>{
      return this.router.navigate(['/login']);
    });
  }
}