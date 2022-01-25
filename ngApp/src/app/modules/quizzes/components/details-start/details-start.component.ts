import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, map, switchMap } from 'rxjs';
import { QuizService, Quiz } from 'src/app/core/services/quiz.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-details-start',
  templateUrl: './details-start.component.html',
  styleUrls: ['./details-start.component.scss']
})
export class DetailsStartComponent implements OnInit, OnDestroy {
  private subscribe!: Subscription;
  public quiz!: Quiz;
  constructor(
    public quizService: QuizService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.subscribe = this.route.params.pipe(
      map(({ id }) => id),
      switchMap((id: number) => this.quizService.getQuizById(id)))
      .subscribe({
        next: res => {
          res ? this.quiz = res : this.router.navigate(['/quizzes']);
        },
        error: err => {
          this.snackBar.open(err.statusText, 'OK',
            { duration: 10000, panelClass: ['snackbar'] })
        },
      });
  }
  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
  onClick() {
    this.router.navigate([`quizzes/${this.quiz.id}/data`]);
  }
}
