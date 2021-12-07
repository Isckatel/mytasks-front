import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modalwin',
  templateUrl: './modalwin.component.html',
  styleUrls: ['./modalwin.component.css']
})
export class ModalwinComponent implements OnInit {
  isShowModal = false;

  constructor() { }
  
  ngOnInit(): void {
  }

  showModal() :void {
    this.isShowModal = !this.isShowModal;
  }

  cansel() :void {
    this.isShowModal = !this.isShowModal;
  }

  add() :void {

  }

}
