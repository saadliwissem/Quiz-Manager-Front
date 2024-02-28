import { Component } from '@angular/core';
import { FormGroup, UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import { QuizData } from "./QuizDataModal"

@Component({
  selector: 'app-checks-radios',
  templateUrl: './checks-radios.component.html',
  styleUrls: ['./checks-radios.component.scss']
})
export class ChecksRadiosComponent {
  form!: FormGroup;

  formGroup = this.formBuilder.group({
    flexRadioGroup: this.formBuilder.group({
      flexRadioDefault: this.formBuilder.control('two')
    }),
    flexRadioGroupDisabled: this.formBuilder.group({
      flexRadioDefault: this.formBuilder.control({ value: 'two', disabled: true })
    }),
    flexCheckGroup: this.formBuilder.group({
      checkOne: [false],
      checkTwo: [true]
    }),
    flexCheckGroupDisabled: this.formBuilder.group({
      checkThree: [{ value: false, disabled: true }],
      checkFour: [{ value: true, disabled: true }]
    }),
    btnCheckGroup: this.formBuilder.group({
      checkbox1: [true],
      checkbox2: [false],
      checkbox3: [{ value: false, disabled: true }]
    }),
    btnRadioGroup: this.formBuilder.group({
      radio1: this.formBuilder.control({ value: 'Radio2' })
    })
  });

  constructor(
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private quizService: QuizService
  ) { }

  Quizid: string | null = "";
  QuizName: string | null = ""
  Questions: [] = [];
  nemberOfNewQuestion: number = 1;
  ngOnInit(): void {
    // Accessing query parameters using ActivatedRoute
    this.route.queryParamMap.subscribe(params => {
      // Retrieving the 'id' parameter
      this.Quizid = params.get('id');
      this.QuizName = params.get('name');

      console.log('ID:', this.Quizid); // Just for demonstration, you can remove this
    });
    this.quizService.getQuestionsForQuiz(this.Quizid).subscribe(
      questions => {
        console.log('Questions:', questions);
        this.Questions = questions;
        this.quizData.questions = questions
      },
      error => {
        console.error('Error fetching questions:', error);
        // Handle error appropriately
      }
    );

  }
  quizData: QuizData = {
    questions: [
      {
        id: '1',
        content: 'What is your favorite color?',
        options: [
          { id: '1', content: 'Red' },
          { id: '2', content: 'Blue' },
          { id: '3', content: 'Green' }
        ]
      },
      {
        id: '2',
        content: 'What is the capital of France?',
        options: [
          { id: '4', content: 'Paris' },
          { id: '5', content: 'London' },
          { id: '6', content: 'Berlin' }
        ]
      }
    ]
  };
  displayQuestions(id: string): void {
    this.quizService.getOptionsForQuestion(id).subscribe(
      options => {
        console.log('Options:', options);
        // Do whatever you need with the options, such as displaying them in your component
      },
      error => {
        console.error('Error fetching options:', error);
        // Handle error appropriately
      }
    );
  }


  addNewQestion(): void {
    this.nemberOfNewQuestion += 1;
  }
  createQuestion(text: string, quizId: string): void {
    this.quizService.createQuestion(text, quizId).subscribe(
      response => {
        console.log('Question created successfully:', response);
        // Handle success response as needed
      },
      error => {
        console.error('Error creating question:', error);
        // Handle error appropriately
      }
    );
  }
  setCheckBoxValue(controlName: string) {
    const btnCheckGroup = this.formGroup.controls['btnCheckGroup'];
    const prevValue = btnCheckGroup.get(controlName)?.value;
    const groupValue = { ...btnCheckGroup.value };
    groupValue[controlName] = !prevValue;
    btnCheckGroup.patchValue(groupValue);
  }

  setRadioValue(value: string): void {
    const group = this.formGroup.controls['btnRadioGroup'];
    group.setValue({ radio1: value });
  }

}
