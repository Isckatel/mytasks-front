import { Component, OnInit } from '@angular/core';
import { HttpService } from './todolist/http.service';
import { qTask } from './todolist/models/task.model';
import { plainToClassFromExist } from 'class-transformer';
import { Category } from './todolist/models/category.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent implements OnInit {
  categorys: Category[] = [];  

  constructor(private httpService: HttpService){}  

  ngOnInit(){
    this.httpService.getData()
    .subscribe( 
      (data: any) => {
      console.log(data);
      this.categorys = plainToClassFromExist(this.categorys, data);
    });
  }
  //Обновим список задач после создания новой
  onNewTask(task:qTask) {
    console.log(task);
    if (!task.newCategory) {  
      this.categorys.forEach(el => {
        if (el.id == task.category_id) el.todos.push({id: task.id, text: task.text, isCompleted: task.isCompleted, category_id: task.category_id});
      });
    } else {
      this.categorys.push({id: task.category_id, title: task.newCategory, todos: [{id: task.id, text: task.text, isCompleted: task.isCompleted, category_id: task.category_id}]})
    }
  }
}
