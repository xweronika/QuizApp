import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService, QuizDetails } from '../../../../core/services/quiz.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public data!: QuizDetails;
  public activeIndex: number = 1;
  public selectedAnswer: string | null = null;
  private correctAnswer: string | null = null;
  private points: number = 0;

  constructor(public quizService: QuizService, private router: Router) { }
  ngOnInit(): void {
    this.quizService.getById(1)
      .subscribe({
        next: res => { this.data = res; console.log(res) },
        error: err => { console.log(err.error) }
      });
  }

  // submit() {
  //   let points = 0;
  //   this.data.details.forEach(el => {
  //     if (this.finalArray[el.index - 1] == el.correct) points++;
  //   });
  //   this.quizService.saveScore(points, this.data.details.length);
  //   //this.router.navigate(['quizzes/score']);
  //   this.quizService.showScore = true;
  // }

  onClick(answer: string, correct: string) {
    if (this.selectedAnswer) return false;
    if (answer == correct) this.points += 1;
    this.selectedAnswer = answer;
    this.correctAnswer = correct;
    return true;
  }
  onNext() {
    this.selectedAnswer = null;
    this.correctAnswer = null;
    if (this.data.details.length == this.activeIndex) {
      this.quizService.saveScore(this.points, this.data.details.length);
      this.router.navigate(['quizzes/score']);
    }
    else this.activeIndex += 1

  }
  checkCorrect(current: string) {
    if (!this.selectedAnswer) return false;
    return current == this.correctAnswer ? true : false;
  }
  checkWrong(current: string) {
    if (current != this.selectedAnswer) return false;
    return current != this.correctAnswer ? true : false;
  }
}
