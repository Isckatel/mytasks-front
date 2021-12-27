import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';

type bodyPost = {
    title: string,
    text: string
}

@Injectable()
export class HttpService{
    constructor(private http: HttpClient){ }

    private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };  

    getData(){
        return this.http.get((environment.url + 'projects'), this.options)
    }

    changeCompleted(inputId: number) {
        return this.http.patch(environment.url + 'projects/1/todo/' + inputId, {id:inputId})
    }

    addTask(body: bodyPost) {
        return this.http.post(environment.url +'todos', body)
    }
}