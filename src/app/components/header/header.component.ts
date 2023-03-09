import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isShowHeaderMenu: boolean = false;

  showBurgerMenu(): void {    
    this.isShowHeaderMenu = !this.isShowHeaderMenu;
    console.log(2);
  }

}
