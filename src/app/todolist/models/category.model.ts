import {ITask} from './task.model';

export interface ICategory {
    id: number,
    title: string,
    todos: Array<ITask>
}

export class Category {
    id;
    title;
    todos;
    constructor(categoryData: ICategory) {
        this.id = categoryData.id;
        this.title = categoryData.title;
        this.todos = categoryData.todos;
    }
}