import { Component } from '@angular/core';
import { QuizService } from "../../../services/quiz.service"
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-controls',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.scss']
})
export class FormControlsComponent {

  public favoriteColor = '#26ab3c';
  title: string = "";
  description: string = "";
  

  constructor(private quizService: QuizService ,private _router : Router ) { }

  

  createQuiz(): void {
    if (!this.title || !this.description) {
      return; // Do not submit if any field is empty
    }
    this.quizService.createQuiz(this.title, this.description)
      .subscribe(
        response => {
          console.log(response); // Handle success response
          this._router.navigate(["/base/cards"])
        },
        error => {
          console.error(error); // Handle error response
        }
      );
  }

}
