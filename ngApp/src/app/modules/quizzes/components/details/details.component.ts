import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, map, switchMap } from 'rxjs';
import { QuizService, QuizDetails } from '../../../../core/services/quiz.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  public data!: QuizDetails;
  public activeIndex: number = 0;
  public selectedAnswer: string | null = null;
  private correctAnswer: string | null = null;
  private points: number = 0;
  private subscribe!: Subscription;

  constructor(
    public quizService: QuizService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscribe = this.route.params.pipe(
      map(({ id }) => id),
      switchMap((id: number) => this.quizService.getById(id)))
      .subscribe({
        next: res => { this.data = res; },
        error: err => { console.log(err.error) }
      });
  }
  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
  onClick(answer: string, correct: string): Boolean {
    if (this.selectedAnswer) return false;
    if (answer == correct) this.points += 1;
    this.selectedAnswer = answer;
    this.correctAnswer = correct;
    return true;
  }
  onNext(): void {
    this.selectedAnswer = null;
    this.correctAnswer = null;
    if (this.data.details.length == this.activeIndex) {
      this.quizService.saveScore(this.points, this.data.details.length, this.data.quiz.id);
      this.router.navigate(['quizzes/score']);
    } else this.activeIndex += 1
  }
  checkCorrect(current: string): Boolean {
    if (!this.selectedAnswer) return false;
    return current == this.correctAnswer ? true : false;
  }
  checkWrong(current: string): Boolean {
    if (current != this.selectedAnswer) return false;
    return current != this.correctAnswer ? true : false;
  }
}

