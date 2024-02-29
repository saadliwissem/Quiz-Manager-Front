import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  email: string = "";
  password: string = "";
  errorMessage: string = "";

  constructor(private authService: AuthService, private router: Router) { }
  
  login(): void {
    this.authService.login(this.email, this.password)
      .subscribe(
        response => {
          // Handle successful login
          console.log(response);
          // Store the token in local storage
          localStorage.setItem('token', response.token);
          // Navigate to the dashboard upon successful login
          this.router.navigate(['/dashboard']);
        },
        error => {
          // Handle login error
          console.error(error);
          // Display error message
          this.errorMessage = error.error.error;
        }
      );
  }
}
