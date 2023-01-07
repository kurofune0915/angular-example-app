import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  /**
   * タイトル
   *
   * @type {string}
   */
  readonly title: string = 'Angular example app';
}
