import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  correct: string,
  selected?: string;
  id: number
}
export interface Selected extends Answer {
  selected: string;
}

@Injectable({
  providedIn: 'root'
})

export class QuizService {
  private url: string = `${environment.apiURL}/quiz`;

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Quiz[]>(this.url);
  }
  getById(id: number) {
    return this.http.get<QuizDetails>(`${this.url}/${id}`);
  }
  saveScore(points: number, max: number) {
    const score = `${points.toString()} / ${max.toString()}`
    localStorage.setItem('score', score);
  }
  getScore() {
    return localStorage.getItem('score') || "";
  }
}
