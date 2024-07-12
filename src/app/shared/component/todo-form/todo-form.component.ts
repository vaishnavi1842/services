import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { NgForm } from '@angular/forms';
import { UuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  @ViewChild('todoForm')todoForm!:NgForm

  private _TodoService = inject(TodoService)
  private _UuidService = inject(UuidService)

  constructor() { }

  ngOnInit(): void {
  }

  onTodoAdd(){
    let todo={...this.todoForm.value, todoId:this._UuidService.Uuid()}
    console.log(todo);
    this.todoForm.reset()
    this._TodoService.createNewTodo(todo)
    
  }

}
