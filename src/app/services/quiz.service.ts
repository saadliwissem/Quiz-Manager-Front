import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private apiUrl = 'http://localhost:3117'; // Replace this with your backend API URL

  constructor(private http: HttpClient) { }

  createQuiz(title: string, description: string): Observable<any> {
    const formData = {
      title:title,
      description:description
    };
    
    return this.http.post(`${this.apiUrl}/quiz`, formData);
  }
  getQuizzes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/quiz`);
  }

  deleteQuiz(id: string): Observable<any> {
    const url = `${this.apiUrl}/quiz/${id}`;
    return this.http.delete(url);
  }
  getQuestionsForQuiz(quizId: string |null): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/question/${quizId}`);
  }
  getOptionsForQuestion(questionId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/option/${questionId}`);
  }
  createQuestion(text: string, quizId: string): Observable<any> {
    const body = { text, quizId };
    return this.http.post<any>(`${this.apiUrl}/question`, body);
  }
  getQuizById(id: string|null): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/quiz/${id}`);
  }
}
