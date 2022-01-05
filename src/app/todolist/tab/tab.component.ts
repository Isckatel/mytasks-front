import { Component, Input } from '@angular/core';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {
  @Input() category!: Category;
  constructor() {    
   }  
}
