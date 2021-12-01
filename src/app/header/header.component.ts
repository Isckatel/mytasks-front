import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <div class="header">
    <div class="wraper-h1">
      <h1>Задачи</h1>
      <div class="new-task">+</div>
    </div>
  </div>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
