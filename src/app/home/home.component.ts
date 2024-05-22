import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  userName?:string;
  password?:string;
  active?:string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.userName = params['userName'];
      this.password= params['password'];
      this.active = params['active'];
    });
  }

  goToNextPage():void {
    const params = { userName: this.userName, password: this.password, active:this.active };
    console.log('home: ',params);

    this.router.navigate(['/search'], { queryParams: params });
  }
  
}
