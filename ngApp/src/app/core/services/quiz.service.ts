import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

export interface Quiz {
  id: number,
  title: string,
  description: string,
  language: string,
  created_at: Date
}
export interface QuizDetails {
  quiz: Quiz,
  details: Array<Answer>,
}
export interface Answer {
  question: string,
  answer_1: string,
  answer_2: string,
  answer_3: string,
  answer_4: string,
  correct: string
}

@Injectable({
  providedIn: 'root'
})

export class QuizService {
  private url = `${environment.apiURL}/quiz`;
  constructor(private http: HttpClient, private router: Router) { }

  get() {
    return this.http.get<Quiz[]>(this.url);
  }
  getById(id: number) {
    return this.http.get<QuizDetails[]>(`${this.url}/${id}`);
  }
}
