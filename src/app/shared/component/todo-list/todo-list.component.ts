import { Component, inject, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Itodo } from '../../models/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoArr!:Array<Itodo>

 private _TodoService = inject(TodoService)

  constructor() { }

  ngOnInit(): void {
   this.todoArr = this._TodoService.fetchAllTodos()
  }

  onRemoveTodo(id:Itodo){
    let getConfirm=confirm('Are you sure, You want to delete this TodoItem?')
    if(getConfirm){
      this._TodoService.deleteTodo(id)
    }
  }

}
