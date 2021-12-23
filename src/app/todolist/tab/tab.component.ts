import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() task: Category;
  constructor() {
    this.task = {
      id: 1,
      title: "Семья",
      todos: [
        {id: 1, text: "Инит значение", isCompleted: false},
        {id: 2, text: "Инит значение", isCompleted: false}
      ]
    }
   }

  ngOnInit(): void {
  }

}
