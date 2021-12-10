import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Tasks } from './tasks';

export type oneTask = {
  id: number,
  text: string,
  isCompleted: boolean
}

//Ответ от сервера на создание задачи
export type qTask = {
  id: number,
  text: string,
  isCompleted: boolean
  title_id: number,
  newTitle: string
}

export interface Task {
  id: number,
  title: string,
  todos: oneTask[] 
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasksInit: Task[]  = [
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
  tasks: Tasks | undefined; 
  constructor(private http: HttpClient){}
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  //https://blooming-dawn-85383.herokuapp.com/projects
  //http://127.0.0.1:3000/projects
  ngOnInit(){          
    this.http.get('http://127.0.0.1:3000/projects', this.options)
    .subscribe((data:Tasks) =>{
      // @ts-ignore
      this.tasksInit = data;  
    }); 
  }
  onNewTask(task:qTask) {
    console.log(task);
    if (!task.newTitle) {  
      this.tasksInit.forEach(el => {
        if (el.id == task.title_id) el.todos.push({id: task.id, text: task.text, isCompleted: task.isCompleted});
      });
    } else {
      this.tasksInit.push({id: task.title_id, title: task.newTitle, todos: [{id: task.id, text: task.text, isCompleted: task.isCompleted}]})
    }
  }
}
