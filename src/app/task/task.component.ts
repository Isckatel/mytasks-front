import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../app.component';

@Component({
  selector: 'app-task',
  template: `
  <div class='task'>
    <input type="checkbox" />
    <span>{{todo.text}}</span>
  </div>
  `,
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() todo: Todo   

  constructor() { 
    this.todo = {id: 1, text: "Инит значение", isCompleted: false}
  }

  ngOnInit(): void {
  }

  

}
