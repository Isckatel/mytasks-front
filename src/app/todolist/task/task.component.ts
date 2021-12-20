import { Component, Input, OnInit } from '@angular/core';
import { oneTask } from '../../app.component';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-task',
  template: `
  <div class='task'>
    <input (click)="toggleCompleted($event)" [checked]="todo.isCompleted" type="checkbox" />
    <span [ngStyle]="{
      textDecoration: todo.isCompleted ? 'line-through' :'none'
    }">{{todo.text}}</span>
  </div>
  `,
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() todo: oneTask 

  constructor(private httpService: HttpService){  
    this.todo = {id: 1, text: "Инит значение", isCompleted: false}
  }

  toggleCompleted(ev:any): void {
    console.log(ev.target.checked);    
    this.httpService.changeCompleted(this.todo.id)
    .subscribe((data:any) =>{
      // @ts-ignore
      console.log(data);
      ev.target.checked = data.isCompleted;
      this.todo.isCompleted = data.isCompleted; 
    }); 
  }

  ngOnInit(): void {
  }  

}
