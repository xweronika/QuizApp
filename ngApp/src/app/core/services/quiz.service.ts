import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface Quiz {
  id: number,
  title: string,
  description: string,
  language: string,
  created_at: Date
}

@Injectable({
  providedIn: 'root'
})

export class QuizService {
  constructor(private http: HttpClient, private router: Router) { }

  private url = 'http://localhost:3000/quiz';


  getQuizzes() {
    return this.http.get<Quiz[]>(this.url);
  }
}
