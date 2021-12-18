import { Component, Input, OnInit } from '@angular/core';
import { oneTask } from '../../app.component';
import { HttpClient, HttpHeaders} from '@angular/common/http';

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

  constructor(private http: HttpClient) { 
    this.todo = {id: 1, text: "Инит значение", isCompleted: false}
  }

  toggleCompleted(ev:any): void {
    console.log(ev.target.checked);
    this.http.patch('http://127.0.0.1:3000/projects/1/todo/' + this.todo.id, {id:this.todo.id})
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
