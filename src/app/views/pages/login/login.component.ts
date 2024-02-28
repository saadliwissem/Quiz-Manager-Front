import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  email : string="";
  password : string="";
  
  constructor(private authService: AuthService) { }
  login(): void {
    this.authService.login(this.email, this.password)
      .subscribe(
        response => {
          // Handle successful login
          console.log(response);
          // For example, you can store the token in local storage
          localStorage.setItem('token', response.token);
        },
        error => {
          // Handle login error
          console.error(error);
        }
      );
  }

}
