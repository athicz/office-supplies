import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userName!: string;
  password!: string;
  name!: string;
  status!: Date;
  serialNumberTemp!: string;
  idTemp!: number;
  active!: string;

  constructor(private router: Router, private api: ApiService) { }

  login() {
    if (!this.userName || !this.password) {
      alert('Please enter username and password.');
      return;
    }
    this.api.login(this.userName, this.password).subscribe(
      (response) => {
        console.log(response);
        
        if (response.length>0) {
          this.active = response[0].status;
          const params = { userName: this.userName, password: this.password, active:this.active };
          console.log('login: ',params);
          localStorage.setItem('loggedIn', 'true');
          this.router.navigate([''], { queryParams: params });
          setTimeout(() => {
            window.location.reload();
          }, 100) 
        } else {
          alert('Login failed. Please try again.');
        }
      },
      (error) => {
        console.error('Login failed:', error);
        alert('Login failed. Please try again.');
      }
    );
  }

  goToRegisterPage() {
    this.router.navigate(['/register']);
  }
}
