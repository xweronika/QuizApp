import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, map, switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizService, Details } from '../../../../core/services/quiz.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  public data: Array<Details> = [];
  public selectedAnswer: number | null = null;
  private correctAnswer: number | null = null;
  public activeIndex: number = 0;
  private points: number = 0;
  private subscribe!: Subscription;

  constructor(
    public quizService: QuizService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    public translate: TranslateService) { }

  ngOnInit(): void {
    this.subscribe = this.route.params.pipe(
      map(({ id }) => id),
      switchMap((id: number) => this.quizService.getQuestions(id)))
      .subscribe({
        next: res => {
          res.length ? this.data = res : this.router.navigate(['/quizzes']);
        },
        error: err => {
          this.snackBar.open(err.statusText, 'OK',
            { duration: 10000, panelClass: ['snackbar'] })
        }
      });
  }
  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
  onClick(answer: number, correct: number): boolean {
    if (this.isAnswer()) return false;
    if (answer == correct) this.points += 1;
    this.selectedAnswer = answer;
    this.correctAnswer = correct;
    return true;
  }
  onNext(): void {
    this.selectedAnswer = null;
    this.correctAnswer = null;
    if (this.data.length - 1 == this.activeIndex) {
      this.quizService.saveScore(this.points, this.data.length, this.data[0].quiz_id);
      this.router.navigate(['quizzes/score']);
    } else this.activeIndex += 1
  }
  checkCorrect(current: number): boolean {
    if (!this.isAnswer()) return false;
    return current == this.correctAnswer ? true : false;
  }
  checkWrong(current: number): boolean {
    if (current != this.selectedAnswer) return false;
    return current != this.correctAnswer ? true : false;
  }
  isAnswer(): boolean {
    return this.selectedAnswer != null ? true : false;
  }
  getData(data: string, add_default: boolean) {
    return add_default ? this.translate.instant(data) : data;
  }
}

