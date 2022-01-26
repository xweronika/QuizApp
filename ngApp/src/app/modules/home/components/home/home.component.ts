import { Component } from '@angular/core';
import { Links } from 'src/app/core/interfaces/links';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  public links: Array<Links> = [
    {
      name: 'home.quizzes',
      to: 'quizzes'
    },
    {
      name: 'home.add_new',
      to: 'add'
    },
    {
      name: 'home.info',
      to: 'info'
    },
  ]

}
