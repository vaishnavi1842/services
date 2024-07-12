import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoFormComponent } from './shared/component/todo-form/todo-form.component';
import { TodoListComponent } from './shared/component/todo-list/todo-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { StudentFormComponent } from './shared/component/student-form/student-form.component';
import { StudentTableComponent } from './shared/component/student-table/student-table.component';




@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoListComponent,
    StudentFormComponent,
    StudentTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatSnackBarModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
