import { Component } from '@angular/core';
import { Info } from 'src/app/core/interfaces/info';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})

export class InfoComponent {
  public informations: Array<Info> = [
    {
      name: 'info.appliaction',
      description: 'info.app_data'
    },
    {
      name: 'info.technology',
      description: 'info.tech_data'
    },
    {
      name: 'info.author',
      description: 'info.author_data'
    },
  ]
}
