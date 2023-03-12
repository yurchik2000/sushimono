import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isShowHeaderMenu: boolean = false;
  isShowUserLogIn: boolean = false;
  userEmail: string = '';
  userPassword: string = '';

  constructor(private router: Router ) {

  }

  showBurgerMenu(): void {    
    this.isShowHeaderMenu = !this.isShowHeaderMenu;
    console.log(2);
  }

  showUserLogIn(): void {
    this.isShowUserLogIn = true;
  }
  hideUserLogIn(): void {
    this.isShowUserLogIn = false;
  }
  signIn(email: string, password:string): void {
    if (email === 'admin@gmail.com' && password === 'admin') {
      this.router.navigateByUrl('/admin');
    }
  }

}
