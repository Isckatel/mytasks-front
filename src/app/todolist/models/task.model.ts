export interface ITask {
    id: number;
    text: string;
    isCompleted: boolean;
    category_id: number;
    // newCategory?: string;
}

export interface IqTask extends ITask {
    category_id: number;
    newCategory: string;
}

export class Task {
    id;
    text;
    isCompleted;
    category_id;
    constructor(taskData: ITask) {
        this.id = taskData.id;
        this.text = taskData.text;
        this.isCompleted = taskData.isCompleted;
        this.category_id = taskData.category_id;
    }
}

//Ответ от сервера на создание задачи
export class qTask extends Task  {
    newCategory; //Чтобы не обновлять весь список задач с сервера    
    constructor(taskData: IqTask) {
        super(taskData);
        
        this.newCategory = taskData.newCategory;
    }
}