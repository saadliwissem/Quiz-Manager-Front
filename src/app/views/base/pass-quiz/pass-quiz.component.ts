import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-pass-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pass-quiz.component.html',
  styleUrl: './pass-quiz.component.scss'
})
export class PassQuizComponent {


  quiz: any;
  Quizid: string | null = ''
  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService
  ) { }

  ngOnInit(): void {
    this.getQuiz();
  }
  getQuiz(): void {
    this.route.queryParamMap.subscribe(params => {
      // Retrieving the 'id' parameter
      this.Quizid = params.get('id');
      console.log('ID:', this.Quizid); // Just for demonstration, you can remove this
    });
    this.quizService.getQuizById(this.Quizid)
      .subscribe(
        quiz => {
          this.quiz = quiz;
          console.log(this.quiz); // For debugging, you can remove this line
        },
        error => {
          console.error(error);
          // Handle error
        }
      );
  }

}
