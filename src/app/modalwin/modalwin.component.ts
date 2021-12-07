import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task} from '../app.component';

@Component({
  selector: 'app-modalwin',
  templateUrl: './modalwin.component.html',
  styleUrls: ['./modalwin.component.css']
})
export class ModalwinComponent implements OnInit {
  isShowModal = false;
  newTitle = '';
  @Input() tasks:Array<Task>;

  modalForm : FormGroup = new FormGroup({             
    "task": new FormControl("", [Validators.required]),
    "titles": new FormControl(),
    "newTitles": new FormControl()
});

  constructor() { 
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
    console.log(this.tasks);
  }

  changeTitles(e:any) {
    this.newTitle = e.target.value
  }

  showModal() :void {
    this.isShowModal = !this.isShowModal;
  }

  cansel() :void {
    this.isShowModal = !this.isShowModal;
  }

  add() :void {
    console.log(this.modalForm.controls['newTitles']);
    this.isShowModal = false;
  }

}
