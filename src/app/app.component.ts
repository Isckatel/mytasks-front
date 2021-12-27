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
  categorys: Category[]  = [
    {
      id: 1,
      title: "Семья",
      todos: [
        {id: 1, text: "Заплатить за квартиру", isCompleted: false},
        {id: 2, text: "Купить продукты", isCompleted: false}
      ]
    },
    {
      id: 2,
      title: "Работа",
      todos: [
        {id: 1, text: "Позвонить заказчкиу", isCompleted: false},
        {id: 2, text: "Отправить отчет", isCompleted: false}
      ]
    }
  ]    

  constructor(private httpService: HttpService){}  

  ngOnInit(){
    this.httpService.getData()
    .subscribe( 
      (data: any) => {
      this.categorys = plainToClassFromExist(this.categorys, data);
    });
  }
  //Обновим список задач после создания новой
  onNewTask(task:qTask) {
    console.log(task);
    if (!task.newCategory) {  
      this.categorys.forEach(el => {
        if (el.id == task.category_id) el.todos.push({id: task.id, text: task.text, isCompleted: task.isCompleted});
      });
    } else {
      this.categorys.push({id: task.category_id, title: task.newCategory, todos: [{id: task.id, text: task.text, isCompleted: task.isCompleted}]})
    }
  }
}
