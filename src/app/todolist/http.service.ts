import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

type bodyPost = {
    title: string,
    text: string
}

@Injectable()
export class HttpService{
    constructor(private http: HttpClient){ }
    //https://blooming-dawn-85383.herokuapp.com/projects
    //http://127.0.0.1:3000/projects
    private url = "http://127.0.0.1:3000/";
    private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };  

    getData(){
        return this.http.get((this.url + 'projects'), this.options)
    }

    changeCompleted(inputId: number) {
        return this.http.patch(this.url + 'projects/1/todo/' + inputId, {id:inputId})
    }

    addTask(body: bodyPost) {
        return this.http.post(this.url +'todos', body)
    }
}