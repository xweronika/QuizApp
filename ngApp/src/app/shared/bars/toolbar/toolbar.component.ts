import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  public active = false;
  constructor(private router: Router) {
    router.events.subscribe(() => {
      this.active = this.router.url === '/' ? false : true;
    });
  }
}
