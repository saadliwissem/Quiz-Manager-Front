import { Component } from '@angular/core';
import {AuthService} from "../../../services/auth.service"
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  fullName : string="";
  email : string="";
  password : string="";

  constructor(private authService: AuthService) { }
  register(): void {
    this.authService.register(this.fullName, this.email, this.password)
      .subscribe(
        response => {
          console.log(response); // Handle success response
        },
        error => {
          console.error(error); // Handle error response
        }
      );
  }

}
