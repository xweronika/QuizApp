import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})

export class QuizzesComponent implements OnInit {
  public quizzes: Array<Quiz> = [
    {
      id: 1,
      title: "Quiz What I like",
      description: "Lorem ipsum tekst składający się z łacińskich i quasi."
    },
    {
      id: 2,
      title: "Quiz What I like",
      description: "Lorem ipsum tekst składający się z łacińskich."
    },
    {
      id: 2,
      title: "Quiz What I like",
      description: "Lorem ipsum tekst składający się z łacińskich."
    },
    {
      id: 2,
      title: "Quiz What I like",
      description: "Lorem ipsum tekst składający się z łacińskich."
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
export interface Quiz {
  id: number;
  title: string;
  description: string;
}