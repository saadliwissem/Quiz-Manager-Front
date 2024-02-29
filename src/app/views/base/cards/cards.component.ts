import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  quizzes: any[] = [];
  constructor(private quizService: QuizService, private router: Router) { }

  ngOnInit(): void {
    this.fetchQuizzes();
  }

  fetchQuizzes(): void {
    this.quizService.getQuizzes()
      .subscribe(
        (data: any[]) => {
          this.quizzes = data
        },
        error => {
          console.error(error);
        }
      );
  }

  deleteQuiz(id: string): void {
    if (confirm("are you sure you want to delete this quiz ?")) {

      this.quizService.deleteQuiz(id).subscribe()
      console.log("deleted")
    }

  }
  modifyQuiz(id: string,name:string): void {
    this.router.navigate(["/forms/checks-radios"], { queryParams: { id: id ,name:name} })
  }
  startQuiz(id: string,name:string): void {
    this.router.navigate(["/base/passquiz"], { queryParams: { id: id ,name:name} })
  }

}
