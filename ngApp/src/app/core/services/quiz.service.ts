import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Quiz } from '../interfaces/quiz';
import { Score } from '../interfaces/score';
import { Details } from '../interfaces/details';

export { Quiz } from '../interfaces/quiz';
export { Score } from '../interfaces/score';
export { Details } from '../interfaces/details';

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
    return this.http.get<Details[]>(`${this.url}/${id}/data`);
  }
  saveScore(points: number, max: number, id: number) {
    this.score = { points: points, max: max, quiz_id: id };
  }
  getScore() {
    return this.score ? `${this.score.points} / ${this.score.max}` : '';
  }
}
