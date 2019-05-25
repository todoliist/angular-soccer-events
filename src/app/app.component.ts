import { Component } from '@angular/core';

@Component({
selector: 'pm-root',
 template:`
 <nav class='navbar navbar-expand navbar-light bg-light'>
  <a class='navbar-brand'>{{pageTitle}}</a>
      <ul class='nav nav-pill'>
        <li><a class='nav-link' [routerLink]="['/welcome']">Home</a></li>
        <li><a class='nav-link' [routerLink]="['/products']">Events & Equipment List</a></li>
      </ul>
 </nav>
<div class='container'>
<router-outlet></router-outlet>
</div>
 `
})
export class AppComponent {
  pageTitle:string='Events Booking: 403-354-5896';
}
//<router-outlet></router-outlet>页面的占位符，动态加载，会被替换掉的。当点击 home、about、 dashboard 时， 在导航栏的下方，会被对应的 XX.component.html 替换掉。