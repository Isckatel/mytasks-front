import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Tasks } from './tasks';

export type Todo = {
  id: number,
  text: string,
  isCompleted: boolean
}

export interface Task {
  id: number,
  title: string,
  todos: Todo[] 
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
    },
    {
      id: 2,
      title: "Прочее",
      todos: [
        {id: 1, text: "Сходить на субботнкик", isCompleted: false}        
      ]
    }
  ]  
  tasks: Tasks | undefined;
  constructor(private http: HttpClient){}
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  //https://blooming-dawn-85383.herokuapp.com/projects
  //http://127.0.0.1:3000/projects
  ngOnInit(){          
    this.http.get('https://blooming-dawn-85383.herokuapp.com/projects', this.options)
    .subscribe((data:Tasks) =>{
      // @ts-ignore
      this.tasksInit = data;  
    }); 
  }
}
