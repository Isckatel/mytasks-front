import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ModalwinComponent } from './modalwin/modalwin.component';
import { TabComponent } from './tab/tab.component';
import { TaskComponent } from './task/task.component';
import { MaterialAppModule } from '../ngmaterial.module';
import { MatSliderModule } from '@angular/material/slider';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HeaderComponent,
    TabComponent,
    TaskComponent,
    ModalwinComponent 
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatSliderModule,
    MaterialAppModule,
    HttpClientModule
  ],
  exports:[
    HeaderComponent,
    TabComponent,
    TaskComponent,
    ModalwinComponent
  ]
})
export class TodolistModule { }
