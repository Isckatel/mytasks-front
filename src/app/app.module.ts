import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodolistModule } from './todolist/todolist.module';

@NgModule({
  declarations: [
    AppComponent       
  ],
  imports: [
    BrowserModule,
    TodolistModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
