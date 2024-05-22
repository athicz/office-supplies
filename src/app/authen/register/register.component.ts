import { Component } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  userName!: string;
  password!: string;
  name!: string;
  status!: Date;
  serialNumberTemp!: string;
  idTemp!: number;
  active!: string;

  constructor(private router: Router, private api: ApiService) { }

  createAcc() {
    if (!this.userName || !this.password) {
      alert('Please enter username and password.');
      return;
    }

    const status = '1';
    const createDate = new Date();
    const updateDate = new Date();
    this.api.create(this.userName, this.password, this.name, status, createDate, updateDate).subscribe(
      (response) => {
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Create failed:', error);
        alert('Please try again.');
      }
    );
  }
}
