import { Component } from '@angular/core';

@Component({
  selector: 'fantasy-football-busts-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'busts';
  links = [{ path: '', icon: 'view_list', title: 'Busts' }];
}
