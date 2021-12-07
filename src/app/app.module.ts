import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }   from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TabComponent } from './tab/tab.component';
import { TaskComponent } from './task/task.component';
import { ModalwinComponent } from './modalwin/modalwin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabComponent,
    TaskComponent,
    ModalwinComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
