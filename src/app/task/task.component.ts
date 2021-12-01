import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  template: `
  <div>
    <div></div><p>Задача 1</p>
  </div>
  `,
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
