import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task, qTask} from '../../app.component';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-modalwin',
  templateUrl: './modalwin.component.html',
  styleUrls: ['./modalwin.component.css']
})
export class ModalwinComponent implements OnInit {
  isShowModal = false;
  newTitle = '';    
  @Input() tasks:Array<Task>;
  @Output() newTask = new EventEmitter<qTask>();

  modalForm : FormGroup = new FormGroup({             
    "task": new FormControl("", [Validators.required]),
    "titles": new FormControl(),
    "newTitles": new FormControl()
  });

  constructor(private httpService: HttpService){ 
    this.tasks = [{
      id: 1,
      title: "Семья",
      todos: [
        {id: 1, text: "Инит значение", isCompleted: false},
        {id: 2, text: "Инит значение", isCompleted: false}
      ]
    }
    ]    
  }
  ngOnInit(): void {
    this.newTitle = this.tasks[0].title;
  }

  changeTitles(e:any) {
    this.newTitle = e.target.value;
    if (e.target.value=='Новая категория') {
      this.modalForm.controls['newTitles'].setValidators([Validators.required]);
      this.modalForm.controls['newTitles'].updateValueAndValidity();
    } else {
      this.modalForm.controls['newTitles'].clearValidators();
      this.modalForm.controls['newTitles'].updateValueAndValidity();
    }
  }

  showModal() :void {
    this.isShowModal = !this.isShowModal;
  }

  cansel() :void {
    this.isShowModal = !this.isShowModal;
  }

  add() :void {    
    let jbody;   
    if (this.modalForm.controls['newTitles'].value == '' 
        || this.modalForm.controls['newTitles'].value == null ) {
      //Задача в имеющемся разделе
      jbody = {
        title: this.newTitle,
        text: this.modalForm.controls['task'].value
      }      
    } else {
      //Задача в новом разделе
      jbody = {
        title: this.modalForm.controls['newTitles'].value,
        text: this.modalForm.controls['task'].value        
      }
      this.newTitle ='';      
    }
    this.isShowModal = false;
    //this.http.post('http://127.0.0.1:3000/todos',jbody)
    this.httpService.addTask(jbody)
    .subscribe((data:any) =>{
      let newTask: qTask = {
        id: data.id,
        text: data.text,
        isCompleted: data.isCompleted,
        title_id: data.title_id,
        newTitle: this.modalForm.controls['newTitles'].value
      };
      this.modalForm.controls['newTitles'].setValue('');
      this.modalForm.controls['task'].setValue(''); 
      this.modalForm.controls['titles'].setValue(this.tasks[0].title);
      this.sendNewTask(newTask);    
      console.log(newTask);      
    }); 
  }

  sendNewTask(data:qTask) :void {
    this.newTask.emit({
      ...data
    });
  }
}
