import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  fullName: string = "";
  email: string = "";
  password: string = "";
  errorMessage: string = "";

  constructor(private authService: AuthService) { }

  register(): void {
    this.authService.register(this.fullName, this.email, this.password)
      .subscribe(
        response => {
          // Handle success response
          console.log(response);
          // For example, you can navigate to another page upon successful registration
        },
        error => {
          // Handle error response
          console.error(error.error);
          this.errorMessage = error.error.error; // Display error message
        }
      );
  }
}
