import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

export interface Quiz {
  id: number,
  category: string,
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
  answers: Array<string>,
  correct: string,
  index: number
}
export interface Score {
  points: number,
  max: number,
}
@Injectable({
  providedIn: 'root'
})

export class QuizService {
  private url: string = `${environment.apiURL}/quiz`;
  public score!: Score;
  public showScore: Boolean = false;

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Quiz[]>(this.url);
  }
  getById(id: number) {
    return this.http.get<QuizDetails>(`${this.url}/${id}`);
  }
  saveScore(points: number, max: number) {
    this.score = { points: points, max: max };
  }
  getScore() {
    return `${this.score.points} / ${this.score.max}` || '';
  }
}
