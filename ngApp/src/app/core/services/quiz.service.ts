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
export interface Questions {
  question: string,
  answers: Array<string>,
  correct: string,
  index: number,
  quiz_id: number
}

export interface Score {
  points: number,
  max: number,
  quiz_id: number,
}
@Injectable({
  providedIn: 'root'
})

export class QuizService {
  private url: string = `${environment.apiURL}/quiz`;
  public score!: Score;

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Quiz[]>(this.url);
  }
  getQuizById(id: number) {
    return this.http.get<Quiz>(`${this.url}/${id}`);
  }
  getQuestions(id: number) {
    return this.http.get<Questions[]>(`${this.url}/${id}/data`);
  }
  saveScore(points: number, max: number, id: number) {
    this.score = { points: points, max: max, quiz_id: id };
  }
  getScore() {
    if (!this.score) return '';
    return `${this.score.points} / ${this.score.max}` || '';
  }
}
