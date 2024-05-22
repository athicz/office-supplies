import { Component } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;

  userName?:string;
  password?:string;
  active?:string;

  showBtn = true;

  constructor(private router: Router,  private route: ActivatedRoute) { 
   }

  ngOnInit() {
    const loggedIn = localStorage.getItem('loggedIn');
    this.showBtn = loggedIn !== 'true';
  }

  goToLoginPage():void {
    this.router.navigateByUrl('/login');
  }

  goToRegisterPage():void {
    this.router.navigateByUrl('/register');
  }

  goToHomePage():void {
    this.router.navigateByUrl('');
  }

  logout() {
    // Clear the logged-in state and navigate to the login page
    localStorage.removeItem('loggedIn');
    this.showBtn = true;
    this.router.navigate(['']);
  }
}
