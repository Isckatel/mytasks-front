import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task',
  template: `
  <div class='task'>
    <input (click)="toggleCompleted($event)" [checked]="task.isCompleted" type="checkbox" />
    <span [ngStyle]="{
      textDecoration: task.isCompleted ? 'line-through' :'none'
    }">{{task.text}}</span>
  </div>
  `,
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Task 

  constructor(private httpService: HttpService){  
    this.task = {id: 1, text: "Инит значение", isCompleted: false}
  }

  toggleCompleted(ev:any): void {
    console.log(ev.target.checked);    
    this.httpService.changeCompleted(this.task.id)
    .subscribe((data:any) =>{
      // @ts-ignore
      console.log(data);
      ev.target.checked = data.isCompleted;
      this.task.isCompleted = data.isCompleted; 
    }); 
  }

  ngOnInit(): void {
  }  

}
