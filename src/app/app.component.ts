import { Component } from '@angular/core';

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
export class AppComponent {
  tasks: Task[]  = [
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
}
